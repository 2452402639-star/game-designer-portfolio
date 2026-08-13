type FeaturedContent = {
  slug: string;
  index: string;
  title: string;
  description: string;
  coverClass: string;
  contentLabel: "PROJECT" | "ARTICLE" | "GAME DESIGN" | "CASE STUDY" | "SYSTEM DESIGN";
  href: string | null;
  featured: boolean;
  featuredOrder: number;
};

export type Project = FeaturedContent & {
  kind: "project";
  type: "个人游戏项目";
  tags: string[];
};

export type WritingCategory = "行业观察" | "游戏设计" | "系统设计" | "关卡设计 / Case Study";

export type Writing = FeaturedContent & {
  kind: "writing";
  category: WritingCategory;
  status: "即将发布" | "已整理";
};

export type SelectedWork = Project | Writing;

export const siteInfo = {
  name: "小不理",
  mark: "小",
  title: "小不理 | 游戏策划作品集",
  description:
    "个人游戏项目、游戏设计研究、策划文章与 AI 辅助创作内容的长期合集。",
  role: "游戏策划",
  about: [
    "游戏策划，持续学习玩法设计、系统设计、关卡设计与游戏开发。",
    "使用 Unity 进行个人项目与 Demo 实践，同时持续学习 UE 和游戏设计相关知识。",
    "这个网站用于长期记录我的项目、设计方案、玩法拆解与学习过程。",
  ],
  aiNote:
    "在部分研究、写作与开发过程中使用 AI 作为辅助工具，最终选题、判断、设计与内容取舍由本人完成。",
} as const;

export const navigation = [
  { label: "首页", href: "/" },
  { label: "作品", href: "/projects" },
  { label: "文章", href: "/writing" },
  { label: "关于我", href: "/about" },
] as const;

export const projects: Project[] = [
  {
    kind: "project",
    slug: "godot-game",
    index: "01",
    title: "爱与刷刷与狗刀特",
    type: "个人游戏项目",
    description:
      "一款融合自动战斗、幸存者式成长与守点塔防的轻量 Roguelite 游戏原型。",
    tags: ["Godot", "Game Development", "Game Design"],
    coverClass: "work-cover--godot",
    contentLabel: "PROJECT",
    href: "/projects/godot-game",
    featured: true,
    featuredOrder: 1,
  },
];

export const projectPlaceholders = [
  { index: "02", label: "COMING SOON" },
  { index: "03", label: "COMING SOON" },
] as const;

export const writings: Writing[] = [
  {
    kind: "writing",
    slug: "ugc-industry-observation",
    index: "01",
    title: "UGC 行业观察",
    category: "行业观察",
    description: "围绕 UGC 游戏与内容生态进行整理、研究与个人思考。",
    status: "即将发布",
    coverClass: "work-cover--ugc",
    contentLabel: "ARTICLE",
    href: null,
    featured: true,
    featuredOrder: 2,
  },
  {
    kind: "writing",
    slug: "autochess-declaration-system",
    index: "02",
    title: "宣告系统 & 吟游诗人",
    category: "系统设计",
    description:
      "围绕“公开承诺 vs 灵活构筑”，设计一套从 2-1 宣告到 3-1 二次决策的自走棋赛季机制，并拆解多人竞争、转型成本、自由构筑与反最优解。",
    status: "已整理",
    coverClass: "work-cover--auto-chess",
    contentLabel: "SYSTEM DESIGN",
    href: "/writing/autochess-declaration-system",
    featured: true,
    featuredOrder: 3,
  },
  {
    kind: "writing",
    slug: "stormveil-castle",
    index: "03",
    title: "《艾尔登法环》史东薇尔城关卡设计拆解",
    category: "关卡设计 / Case Study",
    description:
      "从关卡策划视角拆解史东薇尔城如何在复杂箱庭中维持清晰的初见体验。",
    status: "已整理",
    coverClass: "work-cover--stormveil",
    contentLabel: "CASE STUDY",
    href: "/writing/stormveil-castle",
    featured: true,
    featuredOrder: 4,
  },
];

export const selectedWorks: SelectedWork[] = [...projects, ...writings]
  .filter((item) => item.featured)
  .sort((a, b) => a.featuredOrder - b.featuredOrder);

export const writingCategories = [
  "行业观察",
  "游戏设计",
  "系统设计",
  "关卡设计 / Case Study",
] as const;

export const disciplines = [
  {
    index: "01",
    title: "玩法设计",
    english: "GAMEPLAY",
    description: "从核心动词出发，梳理规则、反馈与玩家选择之间的关系。",
  },
  {
    index: "02",
    title: "系统设计",
    english: "SYSTEMS",
    description: "围绕目标、资源和循环，整理可读、可验证的系统方案。",
  },
  {
    index: "03",
    title: "关卡设计",
    english: "LEVELS",
    description: "通过空间、节奏与引导，练习组织玩家的行动和体验。",
  },
  {
    index: "04",
    title: "游戏分析",
    english: "ANALYSIS",
    description: "拆解游戏体验与设计结构，沉淀可复用的学习笔记。",
  },
] as const;
