import "server-only";

import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentType = "projects" | "writing";

export type ContentFrontmatter = {
  title: string;
  description: string;
  type: string;
  category: string;
  tags: string[];
  status: string;
  cover: string;
};

export type ProjectFrontmatter = ContentFrontmatter & {
  tool: string;
  implemented: string[];
  gallerySlots: number;
  build: {
    platform: string;
    url: string;
  };
};

export type ContentDocument<T extends ContentFrontmatter = ContentFrontmatter> = {
  slug: string;
  frontmatter: T;
  body: string;
};

const contentRoot = path.join(process.cwd(), "content");
const extensions = [".md", ".mdx"] as const;

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function readRequiredString(
  data: Record<string, unknown>,
  key: keyof ContentFrontmatter,
  source: string,
) {
  const value = data[key];

  if (typeof value !== "string") {
    throw new Error(`Invalid or missing "${key}" in ${source}`);
  }

  return value;
}

function parseFrontmatter(data: Record<string, unknown>, source: string): ContentFrontmatter {
  if (!isStringArray(data.tags)) {
    throw new Error(`Invalid or missing "tags" in ${source}`);
  }

  return {
    title: readRequiredString(data, "title", source),
    description: readRequiredString(data, "description", source),
    type: readRequiredString(data, "type", source),
    category: readRequiredString(data, "category", source),
    tags: data.tags,
    status: readRequiredString(data, "status", source),
    cover: readRequiredString(data, "cover", source),
  };
}

function findContentPath(type: ContentType, slug: string) {
  const directory = path.join(contentRoot, type);

  for (const extension of extensions) {
    const filePath = path.join(directory, `${slug}${extension}`);
    if (existsSync(filePath)) return filePath;
  }

  return null;
}

export function getContentSlugs(type: ContentType) {
  const directory = path.join(contentRoot, type);
  if (!existsSync(directory)) return [];

  return readdirSync(directory, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() &&
        !entry.name.startsWith("_") &&
        extensions.some((extension) => entry.name.endsWith(extension)),
    )
    .map((entry) => entry.name.replace(/\.(md|mdx)$/, ""));
}

export function getContentBySlug<T extends ContentFrontmatter = ContentFrontmatter>(
  type: ContentType,
  slug: string,
): ContentDocument<T> | null {
  const filePath = findContentPath(type, slug);
  if (!filePath) return null;

  const source = readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  const frontmatter = parseFrontmatter(data, filePath) as T;

  return { slug, frontmatter, body: content.trim() };
}

export function getProjectBySlug(slug: string) {
  const document = getContentBySlug<ProjectFrontmatter>("projects", slug);
  if (!document) return null;

  const { frontmatter } = document;
  const data = matter(readFileSync(findContentPath("projects", slug)!, "utf8")).data;

  if (typeof data.tool !== "string") {
    throw new Error(`Invalid or missing "tool" for project ${slug}`);
  }
  if (!isStringArray(data.implemented)) {
    throw new Error(`Invalid or missing "implemented" for project ${slug}`);
  }
  if (typeof data.gallerySlots !== "number" || data.gallerySlots < 0) {
    throw new Error(`Invalid or missing "gallerySlots" for project ${slug}`);
  }

  const build = data.build;
  if (
    typeof build !== "object" ||
    build === null ||
    typeof (build as Record<string, unknown>).platform !== "string" ||
    typeof (build as Record<string, unknown>).url !== "string"
  ) {
    throw new Error(`Invalid or missing "build" for project ${slug}`);
  }

  frontmatter.tool = data.tool;
  frontmatter.implemented = data.implemented;
  frontmatter.gallerySlots = data.gallerySlots;
  frontmatter.build = build as ProjectFrontmatter["build"];

  return document;
}

export function getMarkdownSections(body: string) {
  const sections = new Map<string, string>();
  const matches = [...body.matchAll(/^##\s+([a-z0-9-]+)\s*$/gim)];

  matches.forEach((match, index) => {
    const start = (match.index ?? 0) + match[0].length;
    const end = matches[index + 1]?.index ?? body.length;
    sections.set(match[1].toLowerCase(), body.slice(start, end).trim());
  });

  return sections;
}
