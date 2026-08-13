import Link from "next/link";
import {
  decisionRoutes,
  designProblems,
  reflections,
  removedScopes,
  risks,
  testMetrics,
} from "@/data/autochess-study";
import type { ContentDocument } from "@/lib/content";
import { WritingToc, type TocItem } from "@/components/writing-toc";

const autochessToc = [
  { id: "design-thesis", label: "核心设计命题", index: "00" },
  { id: "problem", label: "为什么需要", index: "01" },
  { id: "core-flow", label: "核心决策流程", index: "02" },
  { id: "declaration", label: "宣告系统", index: "03" },
  { id: "public-information", label: "公开信息", index: "04" },
  { id: "second-decision", label: "二次决策", index: "05" },
  { id: "bard", label: "吟游诗人", index: "06" },
  { id: "ux", label: "UI / UX", index: "07" },
  { id: "anti-meta", label: "反最优解", index: "08" },
  { id: "scope-control", label: "主动减法", index: "09" },
  { id: "prototype-test", label: "原型测试", index: "10" },
  { id: "reflection", label: "策划复盘", index: "11" },
  { id: "autochess-conclusion", label: "结语", index: "—" },
] satisfies TocItem[];

function SectionHeading({ index, english, title }: { index: string; english: string; title: string }) {
  return (
    <header className="autochess-section__heading">
      <p><span>{index}</span> / {english}</p>
      <h2>{title}</h2>
    </header>
  );
}

function Insight({ children }: { children: React.ReactNode }) {
  return <blockquote className="autochess-insight">{children}</blockquote>;
}

function CoreFlow() {
  const nodes = [
    ["1-1 ～ 1-4", "正常前期运营", ""],
    ["2-1", "出现 3 个可宣告大羁绊", "A / B 优先已有棋子羁绊；C 为随机大羁绊"],
    ["DECLARE", "玩家公开宣告", "生成暂不可领取的锁定奖励"],
    ["2-1 ～ 3-1", "观察期", "来牌 · 装备 · 同行人数 · 对手强弱 · 自身血量"],
    ["3-1", "二次决策", "坚持宣告 · 转型宣告 · 成为吟游诗人"],
    ["RESULT", "进入不同构筑路线", "纵向专精 / 修正方向 / 横向运营"],
  ] as const;

  return (
    <div className="autochess-flow" aria-label="从 1-1 到 3-1 的核心决策流程">
      {nodes.map(([phase, title, note], index) => (
        <div className="autochess-flow__node" key={phase}>
          <span>{phase}</span>
          <strong>{title}</strong>
          {note ? <p>{note}</p> : null}
          {index < nodes.length - 1 ? <i aria-hidden="true">→</i> : null}
        </div>
      ))}
    </div>
  );
}

function DeclarationWireframe() {
  return (
    <div className="autochess-lock-demo" aria-label="锁定奖励概念图">
      <div>
        <span>2-1 / DECLARATION</span>
        <strong>选择宣告羁绊</strong>
        <p>第一次选择建立方向，但暂不兑现收益。</p>
      </div>
      <span className="autochess-lock-demo__arrow" aria-hidden="true">→</span>
      <div className="autochess-lock-demo__reward">
        <span>RESERVED REWARD</span>
        <strong>锁定奖励</strong>
        <p>仅在 3-1 坚持宣告时解锁</p>
        <i aria-hidden="true">LOCKED</i>
      </div>
    </div>
  );
}

function UxWireframe() {
  const declarations = ["大羁绊 A", "大羁绊 B", "随机大羁绊 C"];

  return (
    <div className="autochess-wireframe">
      <div className="autochess-wireframe__topbar">
        <span>2-1 / CHOOSE A DECLARATION</span>
        <span>CURRENT · UNDECLARED</span>
      </div>
      <div className="autochess-wireframe__choices">
        {declarations.map((item, index) => (
          <div key={item}>
            <span>0{index + 1}</span>
            <strong>{item}</strong>
            <p>一句话构筑方向</p>
            <small>LOCKED REWARD</small>
          </div>
        ))}
      </div>
      <div className="autochess-wireframe__players">
        <p>全场宣告信息</p>
        <span>PLAYER 01 · 羁绊 A</span>
        <span>PLAYER 02 · 羁绊 A</span>
        <span>同羁绊人数 · 02</span>
      </div>
      <div className="autochess-wireframe__actions">
        <button type="button">坚持 · 奖励即将解锁</button>
        <button type="button">转型 · 旧奖励碎裂</button>
        <button type="button">吟游诗人 · 转换身份</button>
      </div>
    </div>
  );
}

export function AutochessStudy({ article }: { article: ContentDocument }) {
  const { frontmatter } = article;

  return (
    <main className="autochess-study">
      <header className="autochess-hero">
        <div className="autochess-hero__inner">
          <Link className="case-back-link" href="/writing">← 返回文章</Link>
          <p className="autochess-eyebrow">SYSTEM DESIGN CASE STUDY · AUTO CHESS</p>
          <h1>
            <span>自走棋赛季机制设计</span>
            <span>宣告系统 &amp; 吟游诗人</span>
          </h1>
          <p className="autochess-hero__subtitle">用“公开承诺”，把共享卡池中的隐性竞争变成显性决策。</p>
          <div className="autochess-hero__notice">个人策划学习 / 非官方概念设计</div>
          <dl className="autochess-hero__meta">
            <div><dt>TYPE</dt><dd>{frontmatter.type}</dd></div>
            <div><dt>STATUS</dt><dd>{frontmatter.status}</dd></div>
            <div><dt>GENRE</dt><dd>Auto Chess</dd></div>
            <div><dt>FOCUS</dt><dd>Decision Design · Meta System · Player Choice</dd></div>
          </dl>
        </div>
      </header>

      <div className="autochess-layout">
        <WritingToc items={autochessToc} />
        <article className="autochess-content">
          <section id="design-thesis" className="autochess-section autochess-thesis">
            <SectionHeading index="00" english="DESIGN THESIS" title="核心设计命题" />
            <div className="autochess-thesis__title"><strong>承诺</strong><span>vs</span><strong>灵活性</strong></div>
            <p className="autochess-thesis__english">Commitment vs Flexibility</p>
            <div className="autochess-thesis__compare">
              <div><span>DECLARATION</span><h3>纵向专精</h3><p>牺牲一部分转型自由，换取路线确定性与专属收益。</p></div>
              <div><span>BARD</span><h3>横向运营</h3><p>放弃纵向专属收益，换取横向组合、临场变阵与随机资源利用能力。</p></div>
            </div>
            <Insight>这个赛季机制不是为了“禁止变阵”，而是把不同玩家偏好拆成两条都合法的玩法路线。</Insight>
          </section>

          <section id="problem" className="autochess-section">
            <SectionHeading index="01" english="PROBLEM" title="为什么需要这个机制" />
            <div className="autochess-problems">
              {designProblems.map((item) => <div key={item.index}><span>{item.index}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}
            </div>
            <Insight>能不能只增加一条规则，却让更多原本隐性的决策浮到台面上？</Insight>
          </section>

          <section id="core-flow" className="autochess-section autochess-section--wide">
            <SectionHeading index="02" english="CORE FLOW" title="2-1 → 3-1 核心决策流程" />
            <CoreFlow />
            <Insight>先下注 → 收集信息 → 修正判断</Insight>
          </section>

          <section id="declaration" className="autochess-section">
            <SectionHeading index="03" english="DECLARATION" title="2-1 宣告系统" />
            <h3 className="autochess-lead-title">为什么要“锁住奖励”？</h3>
            <div className="autochess-reasoning"><p>如果 2-1 立即拿到奖励，3-1 转型几乎没有代价。</p><p>如果完全不给奖励，2-1 又容易变成一个随便点的按钮。</p></div>
            <DeclarationWireframe />
            <p>玩家选择宣告后，产生一个“预定但未解锁”的奖励。只有 3-1 坚持宣告才兑现；转型或成为吟游诗人都会失去原奖励。</p>
            <Insight>第一次选择必须有重量，但又不能重到让玩家无法修正判断。</Insight>
          </section>

          <section id="public-information" className="autochess-section autochess-section--wide">
            <SectionHeading index="04" english="PUBLIC INFORMATION" title="公开信息与多人博弈" />
            <div className="autochess-player-count">
              <div><span>01 PLAYER</span><h3>独家宣告</h3><strong>高于标准档 / 独家红利</strong><p>“没人抢，我可以放心走深。”</p></div>
              <div><span>02 PLAYERS</span><h3>正常竞争</h3><strong>标准档</strong><p>“正常竞争，看自己够不够胡。”</p></div>
              <div><span>03+ PLAYERS</span><h3>多人同行</h3><strong>低于标准档 / 卡池竞争更严重</strong><p>“我更胡，为什么是我跑？”<br />“也许另外两家会先转。”<br />“我要不要赌同行先跑路？”</p></div>
            </div>
            <Insight>这不是简单的“撞车惩罚”。关键体验是：公开信息 → 玩家判断 → 心理博弈 → 行为变化。</Insight>
            <p className="autochess-note">人数越少，宣告收益越高；人数越多，宣告收益越低。具体数值留给原型测试。</p>
          </section>

          <section id="second-decision" className="autochess-section autochess-section--wide">
            <SectionHeading index="05" english="SECOND DECISION" title="3-1 二次决策" />
            <div className="autochess-routes">
              {decisionRoutes.map((route) => (
                <div key={route.code}>
                  <span>{route.code}</span><h3>{route.title}</h3><h4>适合</h4><ul>{route.fit.map((item) => <li key={item}>{item}</li>)}</ul>
                  <h4>{route.gainTitle}</h4><ul>{route.gains.map((item) => <li key={item}>{item}</li>)}</ul>
                  <h4>{route.costTitle}</h4><ul>{route.costs.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
            <Insight>吟游诗人不是“失败补偿路线”。它必须是一种完整、主动选择的玩法身份。</Insight>
          </section>

          <section id="bard" className="autochess-section">
            <SectionHeading index="06" english="BARD" title="吟游诗人路线" />
            <div className="autochess-bard-compare"><div><span>DECLARATION</span><strong>纵向专精</strong><p>稳定目标 · 牺牲灵活性 · 验证阵容</p></div><i>VS</i><div><span>BARD</span><strong>横向组合</strong><p>利用随机资源 · 临场变阵 · 追求阵容质量</p></div></div>
            <p>吟游诗人根据场上激活的“不同羁绊数量”获得成长。第一版候选档位为 2 / 3 / 4 / 5，超过上限后不继续线性增长，但具体数值不在 Concept 阶段写死。</p>
            <div className="autochess-bard-scale"><span>2</span><span>3</span><span>4</span><span>5</span><strong>CAP</strong></div>
            <h3 className="autochess-lead-title">第二评价轴：阵容质量</h3>
            <p>如果只奖励羁绊数量，玩家可能重新找到“8 人口固定开 N 羁绊”的公式答案。因此需要加入阵容质量。星级可以作为第一轮候选指标，但不是最终答案；模型需要同时兼容三星低费、二星高费和高质量桥梁卡。</p>
            <Insight>吟游诗人的目标不是“把羁绊数量最大化”，而是“把这一局随机给到的资源利用到最大化”。</Insight>
          </section>

          <section id="ux" className="autochess-section autochess-section--wide">
            <SectionHeading index="07" english="UX" title="UI / UX 与第一局教学" />
            <UxWireframe />
            <p className="autochess-note">全场玩家列表显示宣告羁绊和同羁绊人数；左上角常驻当前状态。移动端所有核心信息均直接显示，不依赖 hover。</p>
          </section>

          <section id="anti-meta" className="autochess-section autochess-section--wide">
            <SectionHeading index="08" english="ANTI-META" title="反最优解与设计风险" />
            <div className="autochess-risk-table" role="table" aria-label="机制风险矩阵">
              <div role="row" className="autochess-risk-table__head"><span>RISK</span><span>为什么发生</span><span>应对方向</span></div>
              {risks.map(([risk, reason, response], index) => <div role="row" key={risk}><strong><i>0{index + 1}</i>{risk}</strong><span>{reason}</span><span>{response}</span></div>)}
            </div>
            <Insight>反最优解不是让“最优解不存在”，而是避免一个静态答案在绝大多数对局中始终成立。</Insight>
            <p>让局势、随机资源、同行与机会成本，持续改变不同选择的相对价值。</p>
          </section>

          <section id="scope-control" className="autochess-section">
            <SectionHeading index="09" english="SCOPE CONTROL" title="第一版主动删掉什么" />
            <h3 className="autochess-lead-title">设计不仅是加法，也要知道什么时候做减法。</h3>
            <div className="autochess-scope-list">{removedScopes.map(([title, status, reason]) => <div key={title}><span>{status}</span><h3>{title}</h3><p>{reason}</p></div>)}</div>
          </section>

          <section id="prototype-test" className="autochess-section autochess-section--wide">
            <SectionHeading index="10" english="PROTOTYPE TEST" title="原型测试计划" />
            <div className="autochess-test-questions">
              <div><span>01</span><p>宣告公开后，玩家是否真的开始观察同行，产生“你跑还是我跑”的心理博弈？</p></div>
              <div><span>02</span><p>3-1 的坚持、转型、吟游诗人是否经常至少存在两个合理选择，而非固定答案？</p></div>
              <div><span>03</span><p>宣告者与吟游诗人是否产生了不同的看牌、D 牌和阵容组合方式？</p></div>
            </div>
            <div className="autochess-metrics"><div><strong>观察指标</strong><strong>验证问题</strong></div>{testMetrics.map(([metric, question]) => <div key={metric}><span>{metric}</span><span>{question}</span></div>)}</div>
            <Insight>第一轮不追求“数值完全平衡”。先验证机制是否产生预期行为。</Insight>
            <p>确认行为成立之后，才进入奖励强度、人数收益曲线与吟游诗人分段数值的调整。</p>
          </section>

          <section id="reflection" className="autochess-section">
            <SectionHeading index="11" english="REFLECTION" title="策划复盘" />
            <ol className="autochess-reflections">{reflections.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol>
            <Insight>先定义希望玩家产生什么决策，再反推规则。规则设计完成后，继续问：“玩家会怎么利用甚至破解它？”最后再删除所有不能帮助核心决策成立的机制。</Insight>
          </section>

          <section id="autochess-conclusion" className="autochess-section autochess-conclusion">
            <SectionHeading index="—" english="CONCLUSION" title="这不是答案，而是一套等待验证的假设" />
            <p>这套方案目前仍处于 Concept V0.1。</p>
            <div className="autochess-conclusion__compare"><div><span>已经完成</span><p>核心矛盾 · 决策流程 · 玩家分流 · 信息结构 · 风险假设 · 测试问题</p></div><div><span>还没有完成</span><p>具体收益曲线 · 奖励品质 · 吟游诗人数值 · 阵容质量算法 · 真实对局验证</p></div></div>
            <Insight>一个机制设计案真正进入下一阶段，不是因为文档写得足够完整，而是因为它已经清楚到可以被做成原型、被玩家推翻、再被重新设计。</Insight>
          </section>
        </article>
      </div>
    </main>
  );
}
