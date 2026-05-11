const pages = [
  {
    id: "tasks",
    navLabel: "任务",
    navMeta: "执行面板",
    title: "Tasks",
    subtitle: "今日待办与核心工作流",
    primaryAction: "新建任务 (⌘N)",
    secondaryAction: "进入专注模式",
    bentoBlocks: [
      {
        span: 8,
        title: "进行中 / In Progress",
        action: "查看全部",
        content: `
          <div class="item-list">
            <div class="list-row interactive" data-click-label="重构核心渲染引擎">
              <div class="row-main">
                <span class="row-title">重构核心渲染引擎</span>
                <span class="row-desc">将 WebGL 替换为 WebGPU，提升大规模节点渲染帧率。</span>
                <div class="progress-track"><div class="progress-fill" style="width: 65%"></div></div>
              </div>
              <div class="row-meta">
                <span class="badge warning">高优先级</span>
                <span class="row-desc">剩余 3 小时</span>
              </div>
            </div>
            <div class="list-row interactive" data-click-label="发布 V2.0 候选版">
              <div class="row-main">
                <span class="row-title">发布 V2.0 候选版</span>
                <span class="row-desc">合并 feature分支，跑通 CI/CD 自动化流水线。</span>
              </div>
              <div class="row-meta">
                <span class="badge success">今天必须</span>
              </div>
            </div>
          </div>
        `
      },
      {
        span: 4,
        title: "今日进度 / Today",
        action: "统计",
        content: `
          <div class="hero-stat">72<span style="font-size:20px">%</span></div>
          <span class="stat-label">已完成 18 / 25 项任务</span>
          <div class="item-list" style="margin-top: 20px;">
            <div class="list-row" style="padding: 8px;">
              <span class="row-title">Bug 修复</span><span class="row-desc">8</span>
            </div>
            <div class="list-row" style="padding: 8px;">
              <span class="row-title">代码评审</span><span class="row-desc">5</span>
            </div>
            <div class="list-row" style="padding: 8px;">
              <span class="row-title">阻塞中</span><span class="row-desc" style="color:var(--danger)">2</span>
            </div>
          </div>
        `
      },
      {
        span: 6,
        title: "待处理 / Backlog",
        content: `
          <div class="item-list">
            <div class="list-row interactive" data-click-label="修复内存泄漏">
              <div class="row-main"><span class="row-title">排查内存泄漏问题</span><span class="row-desc">V8 引擎在处理大量数组时出现堆内存溢出</span></div>
              <span class="badge danger">P0</span>
            </div>
            <div class="list-row interactive" data-click-label="更新 API 文档">
              <div class="row-main"><span class="row-title">更新 API 接口文档</span><span class="row-desc">补充认证模块的新参数说明</span></div>
              <span class="badge neutral">P2</span>
            </div>
          </div>
        `
      },
      {
        span: 6,
        title: "最近合并 / Merged",
        content: `
          <div class="item-list">
            <div class="list-row interactive" data-click-label="PR #1024">
              <div class="row-main"><span class="row-title">feat: 支持暗黑模式</span><span class="row-desc">#1024 merged by @evan</span></div>
              <span class="badge accent">已合并</span>
            </div>
            <div class="list-row interactive" data-click-label="PR #1023">
              <div class="row-main"><span class="row-title">fix: 登录状态丢失问题</span><span class="row-desc">#1023 merged by @sarah</span></div>
              <span class="badge accent">已合并</span>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "plans",
    navLabel: "计划",
    navMeta: "目标编排",
    title: "Roadmap",
    subtitle: "产品迭代与长期目标",
    primaryAction: "新建里程碑",
    secondaryAction: "视图选项",
    bentoBlocks: [
      {
        span: 12,
        title: "Q3 核心目标 / Q3 OKRs",
        action: "编辑",
        content: `
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
            <div class="list-row interactive" data-click-label="发布开源组件库">
              <div class="row-main">
                <span class="row-title">1. 发布开源 UI 组件库</span>
                <span class="row-desc">完成 40+ 基础组件的无障碍访问适配和文档编写。</span>
                <div class="progress-track"><div class="progress-fill" style="width: 40%"></div></div>
              </div>
              <span class="badge warning">进行中</span>
            </div>
            <div class="list-row interactive" data-click-label="独立站 MRR 突破">
              <div class="row-main">
                <span class="row-title">2. 独立站 MRR 突破 $5000</span>
                <span class="row-desc">上线高级订阅功能，优化支付转化漏斗。</span>
                <div class="progress-track"><div class="progress-fill" style="width: 80%"></div></div>
              </div>
              <span class="badge success">健康</span>
            </div>
            <div class="list-row interactive" data-click-label="AI 助手功能整合">
              <div class="row-main">
                <span class="row-title">3. 深度整合 AI 助手功能</span>
                <span class="row-desc">接入 LLM 接口，实现代码片段自动生成与补全。</span>
                <div class="progress-track"><div class="progress-fill" style="width: 15%"></div></div>
              </div>
              <span class="badge danger">落后</span>
            </div>
          </div>
        `
      },
      {
        span: 8,
        title: "迭代计划 / Sprints",
        content: `
          <div class="item-list">
            <div class="list-row interactive" data-click-label="Sprint 42">
              <div class="row-main"><span class="row-title">Sprint 42: 性能优化周</span><span class="row-desc">5 月 15 日 - 5 月 29 日</span></div>
              <span class="badge accent">当前</span>
            </div>
            <div class="list-row interactive" data-click-label="Sprint 43">
              <div class="row-main"><span class="row-title">Sprint 43: 多语言支持</span><span class="row-desc">6 月 01 日 - 6 月 15 日</span></div>
              <span class="badge neutral">规划中</span>
            </div>
          </div>
        `
      },
      {
        span: 4,
        title: "发布倒计时",
        content: `
          <div class="hero-stat">12<span style="font-size:20px">天</span></div>
          <span class="stat-label">距离 V2.0 正式发布</span>
          <div style="margin-top:20px;">
            <button class="btn-outline interactive" style="width:100%" data-click-label="检查发布清单">检查发布清单</button>
          </div>
        `
      }
    ]
  },
  {
    id: "finance",
    navLabel: "记账",
    navMeta: "独立收入",
    title: "Finance",
    subtitle: "独立开发收入与基建支出",
    primaryAction: "记录流水",
    secondaryAction: "生成报表",
    bentoBlocks: [
      {
        span: 4,
        title: "本月 MRR (预估)",
        content: `
          <div class="hero-stat" style="color:var(--success)">$4,250</div>
          <span class="stat-label">+15% 较上月</span>
          <div class="progress-track"><div class="progress-fill" style="background:var(--success); width: 85%"></div></div>
        `
      },
      {
        span: 4,
        title: "云基建支出",
        content: `
          <div class="hero-stat" style="color:var(--danger)">$320</div>
          <span class="stat-label">服务器、数据库、CDN</span>
          <div class="progress-track"><div class="progress-fill" style="background:var(--danger); width: 45%"></div></div>
        `
      },
      {
        span: 4,
        title: "API 调用费用",
        content: `
          <div class="hero-stat" style="color:var(--warning)">$185</div>
          <span class="stat-label">OpenAI / Anthropic Token 消耗</span>
          <div class="progress-track"><div class="progress-fill" style="background:var(--warning); width: 60%"></div></div>
        `
      },
      {
        span: 8,
        title: "最近流水 / Transactions",
        action: "查看账单",
        content: `
          <div class="item-list">
            <div class="list-row interactive" data-click-label="Pro Plan Subscription">
              <div class="row-main"><span class="row-title">Pro Plan Subscription</span><span class="row-desc">Stripe 自动扣款</span></div>
              <span class="row-title" style="color:var(--success)">+$29.00</span>
            </div>
            <div class="list-row interactive" data-click-label="AWS EC2 账单">
              <div class="row-main"><span class="row-title">AWS EC2 月度账单</span><span class="row-desc">us-east-1 区域实例费用</span></div>
              <span class="row-title" style="color:var(--danger)">-$145.20</span>
            </div>
            <div class="list-row interactive" data-click-label="GitHub Copilot">
              <div class="row-main"><span class="row-title">GitHub Copilot</span><span class="row-desc">年度订阅续费</span></div>
              <span class="row-title" style="color:var(--danger)">-$100.00</span>
            </div>
          </div>
        `
      },
      {
        span: 4,
        title: "即将扣款",
        content: `
          <div class="item-list">
            <div class="list-row interactive" data-click-label="Vercel Pro">
              <div class="row-main"><span class="row-title">Vercel Pro</span><span class="row-desc">明天</span></div>
              <span class="badge neutral">$20</span>
            </div>
            <div class="list-row interactive" data-click-label="Google Workspace">
              <div class="row-main"><span class="row-title">Google Workspace</span><span class="row-desc">3 天后</span></div>
              <span class="badge neutral">$12</span>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "travel",
    navLabel: "行程",
    navMeta: "会议与休假",
    title: "Travel",
    subtitle: "科技大会与数字游民行程",
    primaryAction: "规划新行程",
    secondaryAction: "机票管理",
    bentoBlocks: [
      {
        span: 8,
        title: "即将启程 / Upcoming",
        content: `
          <div class="list-row interactive" style="padding: 24px; border: 1px solid var(--accent-primary);" data-click-label="WWDC 开发者大会">
            <div class="row-main">
              <span class="badge accent" style="width: fit-content; margin-bottom: 12px;">5天后出发</span>
              <span class="hero-stat" style="font-size: 32px;">WWDC 2026 现场参会</span>
              <span class="row-desc">加州库比蒂诺 · 苹果园区</span>
              <div style="display:flex; gap:16px; margin-top: 16px;">
                <span class="badge neutral">UA888 航班已确认</span>
                <span class="badge neutral">酒店已预订</span>
              </div>
            </div>
          </div>
        `
      },
      {
        span: 4,
        title: "行程状态",
        content: `
          <div class="item-list">
            <div class="list-row interactive" data-click-label="ESTA 签证">
              <div class="row-main"><span class="row-title">ESTA 签证有效性</span><span class="row-desc">已确认，无需更新</span></div>
              <span class="badge success">OK</span>
            </div>
            <div class="list-row interactive" data-click-label="漫游流量">
              <div class="row-main"><span class="row-title">eSIM 漫游流量</span><span class="row-desc">需购买 15 天北美套餐</span></div>
              <span class="badge warning">待购</span>
            </div>
          </div>
        `
      },
      {
        span: 6,
        title: "规划中 / Planning",
        content: `
          <div class="item-list">
            <div class="list-row interactive" data-click-label="东京设计周">
              <div class="row-main"><span class="row-title">东京设计周 / 独立开发者聚会</span><span class="row-desc">10 月份 · 寻找当地民宿</span></div>
              <span class="badge neutral">收集中</span>
            </div>
          </div>
        `
      },
      {
        span: 6,
        title: "数字游民目的地库",
        action: "浏览",
        content: `
          <div class="item-list">
            <div class="list-row interactive" data-click-label="清迈">
              <div class="row-main"><span class="row-title">清迈, 泰国</span><span class="row-desc">生活成本极低，咖啡馆基建完善</span></div>
            </div>
            <div class="list-row interactive" data-click-label="巴厘岛">
              <div class="row-main"><span class="row-title">巴厘岛, 印尼</span><span class="row-desc">时区友好，冲浪与编码</span></div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "notes",
    navLabel: "笔记",
    navMeta: "技术洞察",
    title: "Knowledge",
    subtitle: "架构设计与技术文档",
    primaryAction: "新建文档",
    secondaryAction: "全局搜索",
    bentoBlocks: [
      {
        span: 12,
        title: "最近更新 / Recent Docs",
        action: "查看库",
        content: `
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
            <div class="bento-card interactive" style="padding: 16px;" data-click-label="Rust 借用检查器原理">
              <span class="badge neutral" style="margin-bottom:8px; display:inline-block;">Rust</span>
              <div class="row-title">深入理解 Rust 借用检查器</div>
              <div class="row-desc" style="margin-top:8px;">关于生命周期和所有权转移在复杂并发场景下的最佳实践分析...</div>
            </div>
            <div class="bento-card interactive" style="padding: 16px;" data-click-label="微前端架构演进">
              <span class="badge neutral" style="margin-bottom:8px; display:inline-block;">Architecture</span>
              <div class="row-title">微前端架构从 Webpack 到 Rspack 的演进</div>
              <div class="row-desc" style="margin-top:8px;">构建速度提升了 400%，解决了模块联邦的共享依赖版本冲突问题。</div>
            </div>
            <div class="bento-card interactive" style="padding: 16px;" data-click-label="Bento 网格设计灵感">
              <span class="badge accent" style="margin-bottom:8px; display:inline-block;">Design System</span>
              <div class="row-title">Bento UI 网格设计规范</div>
              <div class="row-desc" style="margin-top:8px;">高对比度暗黑模式下的边框处理与空间利用率研究。</div>
            </div>
          </div>
        `
      },
      {
        span: 6,
        title: "代码片段 / Snippets",
        content: `
          <div class="item-list">
            <div class="list-row interactive" data-click-label="Docker 缓存清理脚本">
              <div class="row-main"><span class="row-title">Docker 缓存强制清理脚本.sh</span><span class="row-desc">bash</span></div>
            </div>
            <div class="list-row interactive" data-click-label="React 虚拟滚动 Hook">
              <div class="row-main"><span class="row-title">useVirtualScroll.ts</span><span class="row-desc">typescript</span></div>
            </div>
          </div>
        `
      },
      {
        span: 6,
        title: "待整理的会议纪要",
        content: `
          <div class="item-list">
            <div class="list-row interactive" data-click-label="V2.0 数据库表结构评审">
              <div class="row-main"><span class="row-title">V2.0 数据库表结构评审</span><span class="row-desc">昨天 14:00</span></div>
              <span class="badge warning">需整理</span>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "profile",
    navLabel: "配置",
    navMeta: "系统与环境",
    title: "Settings",
    subtitle: "开发环境与部署密钥管理",
    primaryAction: "保存更改",
    secondaryAction: "导出配置",
    bentoBlocks: [
      {
        span: 6,
        title: "API 密钥 / Keys",
        action: "管理",
        content: `
          <div class="item-list">
            <div class="list-row interactive" data-click-label="OpenAI API Key">
              <div class="row-main"><span class="row-title">OpenAI API Key</span><span class="row-desc">sk-proj-...8f9a</span></div>
              <span class="badge success">Active</span>
            </div>
            <div class="list-row interactive" data-click-label="AWS Access Key">
              <div class="row-main"><span class="row-title">AWS Access Key</span><span class="row-desc">AKIA...XZQ</span></div>
              <span class="badge success">Active</span>
            </div>
            <div class="list-row interactive" data-click-label="Stripe Webhook Secret">
              <div class="row-main"><span class="row-title">Stripe Webhook Secret</span><span class="row-desc">whsec_...112</span></div>
              <span class="badge danger">Expired</span>
            </div>
          </div>
        `
      },
      {
        span: 6,
        title: "SSH 公钥 / SSH Keys",
        content: `
          <div class="item-list">
            <div class="list-row interactive" data-click-label="MacBook Pro M3">
              <div class="row-main"><span class="row-title">MacBook Pro M3 Max</span><span class="row-desc">ed25519 · 添加于 2024/01</span></div>
            </div>
            <div class="list-row interactive" data-click-label="Ubuntu 生产服务器">
              <div class="row-main"><span class="row-title">Ubuntu 生产服务器</span><span class="row-desc">rsa · 添加于 2023/11</span></div>
            </div>
          </div>
        `
      },
      {
        span: 12,
        title: "自动化部署偏好",
        content: `
          <div style="display:flex; gap: 16px; flex-wrap: wrap;">
            <div class="bento-card interactive" style="flex:1; padding: 16px;" data-click-label="推送即部署">
              <span class="row-title">Push to Main -> Deploy</span>
              <span class="row-desc" style="display:block; margin-top:8px;">主分支代码推送后自动触发 Vercel 生产环境部署。</span>
              <div style="margin-top: 12px;"><span class="badge success">已启用</span></div>
            </div>
            <div class="bento-card interactive" style="flex:1; padding: 16px;" data-click-label="每日数据库备份">
              <span class="row-title">Daily Database Backup</span>
              <span class="row-desc" style="display:block; margin-top:8px;">每天凌晨 3:00 自动备份 PostgreSQL 至 S3 存储桶。</span>
              <div style="margin-top: 12px;"><span class="badge success">已启用</span></div>
            </div>
          </div>
        `
      }
    ]
  }
];

// Elements
const desktopNav = document.getElementById("desktopNav");
const mobileNav = document.getElementById("mobileNav");
const pageRoot = document.getElementById("pageRoot");
const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const primaryActionBtn = document.getElementById("primaryActionBtn");
const secondaryActionBtn = document.getElementById("secondaryActionBtn");
const toast = document.getElementById("toast");

let currentPageId = pages[0].id;
let toastTimeout;

// Toast Notification
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// Render Navigation
function renderNavigation() {
  desktopNav.innerHTML = "";
  mobileNav.innerHTML = "";

  pages.forEach((page) => {
    // Desktop Sidebar Item
    const deskBtn = document.createElement("button");
    deskBtn.className = `nav-item ${currentPageId === page.id ? "active" : ""}`;
    deskBtn.dataset.pageId = page.id;
    deskBtn.innerHTML = `<span>${page.navLabel}</span><span class="nav-meta">${page.navMeta}</span>`;
    
    deskBtn.addEventListener("click", () => switchPage(page.id));
    desktopNav.appendChild(deskBtn);

    // Mobile Bottom Nav Item
    const mobBtn = document.createElement("button");
    mobBtn.className = `mobile-nav-item ${currentPageId === page.id ? "active" : ""}`;
    mobBtn.dataset.pageId = page.id;
    // Simple icon placeholder logic based on id
    mobBtn.innerHTML = `
      <div class="mobile-icon"></div>
      <span>${page.navLabel}</span>
    `;
    mobBtn.addEventListener("click", () => switchPage(page.id));
    mobileNav.appendChild(mobBtn);
  });
}

// Render Bento Blocks
function renderPageContent(page) {
  pageTitle.textContent = page.title;
  pageSubtitle.textContent = page.subtitle;
  primaryActionBtn.textContent = page.primaryAction;
  secondaryActionBtn.textContent = page.secondaryAction;
  
  primaryActionBtn.dataset.clickLabel = page.primaryAction;
  secondaryActionBtn.dataset.clickLabel = page.secondaryAction;

  pageRoot.innerHTML = "";

  page.bentoBlocks.forEach(block => {
    const card = document.createElement("div");
    card.className = `bento-card col-span-${block.span}`;
    
    let headerHtml = "";
    if (block.title) {
      headerHtml = `
        <div class="card-header">
          <div class="card-title">${block.title}</div>
          ${block.action ? `<div class="card-action interactive" data-click-label="${block.action}">${block.action}</div>` : ""}
        </div>
      `;
    }

    card.innerHTML = `
      ${headerHtml}
      <div class="card-body">
        ${block.content}
      </div>
    `;
    pageRoot.appendChild(card);
  });
}

function switchPage(pageId) {
  currentPageId = pageId;
  const page = pages.find(p => p.id === pageId);
  if (page) {
    renderNavigation();
    renderPageContent(page);
    window.scrollTo(0, 0); // Reset scroll
  }
}

// Global Click Handler for Interactive Elements
document.body.addEventListener("click", (e) => {
  const interactiveEl = e.target.closest('.interactive');
  if (interactiveEl && interactiveEl.dataset.clickLabel) {
    // Visual feedback
    interactiveEl.style.transform = 'scale(0.98)';
    setTimeout(() => {
      interactiveEl.style.transform = '';
    }, 150);
    
    const label = interactiveEl.dataset.clickLabel;
    
    // Check if it's a structural element that should open the detail pane
    if (
      interactiveEl.classList.contains('list-row') || 
      interactiveEl.classList.contains('bento-card') ||
      interactiveEl.classList.contains('btn-primary') ||
      interactiveEl.classList.contains('btn-outline')
    ) {
      openDetailPane(currentPageId, label);
    } else {
      showToast(label);
    }
  }
});

// --- Detail Pane Logic ---
const detailOverlay = document.getElementById("detailOverlay");
const detailPane = document.getElementById("detailPane");
const detailPaneClose = document.getElementById("detailPaneClose");
const detailPaneTitle = document.getElementById("detailPaneTitle");
const detailPaneContent = document.getElementById("detailPaneContent");
const detailPaneFooter = document.getElementById("detailPaneFooter");

function openDetailPane(pageContext, itemLabel) {
  const isNew = itemLabel.includes('新建') || itemLabel.includes('记录') || itemLabel.includes('规划');
  detailPaneTitle.textContent = isNew ? '新建项目' : '查看详情';
  
  let contentHtml = '';
  let footerHtml = `
    <button class="btn-ghost interactive" data-click-label="取消" onclick="closeDetailPane()">取消</button>
    <button class="btn-primary interactive" data-click-label="保存" onclick="saveAndCloseDetail()">保存更改</button>
  `;

  if (pageContext === 'tasks') {
    contentHtml = `
      <div class="form-group">
        <label class="form-label">任务标题</label>
        <input type="text" class="form-input" value="${isNew ? '' : itemLabel}" placeholder="输入任务名称...">
      </div>
      <div style="display:flex; gap: 16px;">
        <div class="form-group" style="flex:1;">
          <label class="form-label">状态</label>
          <select class="form-select">
            <option>待处理 (To Do)</option>
            <option ${isNew ? '' : 'selected'}>进行中 (In Progress)</option>
            <option>已完成 (Done)</option>
          </select>
        </div>
        <div class="form-group" style="flex:1;">
          <label class="form-label">优先级</label>
          <select class="form-select">
            <option>P0 - 紧急</option>
            <option selected>P1 - 高</option>
            <option>P2 - 中</option>
            <option>P3 - 低</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">详细描述 (Markdown)</label>
        <textarea class="form-textarea" placeholder="输入任务的验收标准、相关 PR 链接...">${isNew ? '' : '此任务正在处理中。由于 V8 引擎在渲染超大规模数据时的机制问题，需要将目前的 WebGL 渲染管线迁移至 WebGPU。\n\n## 验收标准\n- [ ] 帧率在 10w 节点下稳定 60fps\n- [ ] 兼容 Safari 和 Chrome'}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label">子任务清单</label>
        <div>
          <div class="subtask-item done"><input type="checkbox" checked><span>阅读架构升级文档</span></div>
          <div class="subtask-item"><input type="checkbox"><span>完成 Shader 转换</span></div>
          <div class="subtask-item"><input type="checkbox"><span>性能压测与基准对比</span></div>
          <div class="tag-input" style="width: fit-content; margin-top: 12px;">+ 添加子任务</div>
        </div>
      </div>
    `;
    if (!isNew) {
      footerHtml = `
        <button class="btn-ghost interactive" style="color:var(--danger); margin-right:auto;" onclick="closeDetailPane()">删除任务</button>
        <button class="btn-ghost interactive" onclick="closeDetailPane()">取消</button>
        <button class="btn-primary interactive" onclick="saveAndCloseDetail()">更新状态</button>
      `;
    }
  } else if (pageContext === 'finance') {
    contentHtml = `
      <div class="form-group">
        <label class="form-label">交易金额</label>
        <input type="text" class="form-input" style="font-size: 28px; font-weight: bold; color: var(--text-primary); font-family: monospace;" value="${isNew ? '' : '145.20'}" placeholder="0.00">
      </div>
      <div class="form-group">
        <label class="form-label">交易类型</label>
        <div class="tag-group">
          <span class="badge ${itemLabel.includes('Pro Plan') ? 'neutral' : 'accent'}">支出 (Expense)</span>
          <span class="badge ${itemLabel.includes('Pro Plan') ? 'accent' : 'neutral'}">收入 (Income)</span>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">交易对象 / 说明</label>
        <input type="text" class="form-input" value="${isNew ? '' : itemLabel}">
      </div>
      <div class="form-group">
        <label class="form-label">发生日期</label>
        <input type="date" class="form-input" value="2026-05-11">
      </div>
      <div class="form-group">
        <label class="form-label">发票与备注</label>
        <textarea class="form-textarea" placeholder="添加补充说明，或粘贴发票图片地址..."></textarea>
      </div>
    `;
  } else if (pageContext === 'notes') {
    contentHtml = `
      <div class="form-group">
        <input type="text" class="form-input" style="font-size: 22px; font-weight: bold; border: none; padding: 0; background: transparent; border-radius: 0; border-bottom: 1px solid var(--border-subtle);" value="${isNew ? '无标题文档' : itemLabel}">
      </div>
      <div class="tag-group" style="margin-bottom: 16px;">
        <span class="badge neutral">#技术沉淀</span>
        <span class="badge neutral">#架构设计</span>
        <span class="tag-input">+ 添加标签</span>
      </div>
      <div class="form-group">
        <textarea class="form-textarea" style="border: none; padding: 0; background: transparent; min-height: 400px;" placeholder="开始编写文档 (支持 Markdown)...">
${isNew ? '' : '## 背景与现状\n\n目前的模块联邦方案在处理多团队并行开发时，存在显著的依赖冲突风险...\n\n## 解决思路\n\n1. 统一构建工具链到 Rspack\n2. 收敛公共库版本\n\n> "架构设计的本质是管理复杂度和变化。"'}
        </textarea>
      </div>
    `;
  } else {
    // 通用 Fallback 详情面板
    contentHtml = `
      <div class="form-group">
        <label class="form-label">项目名称</label>
        <input type="text" class="form-input" value="${itemLabel}">
      </div>
      <div class="form-group">
        <label class="form-label">状态</label>
        <select class="form-select">
          <option selected>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">元数据配置</label>
        <textarea class="form-textarea" style="font-family: monospace;">{
  "id": "${itemLabel}",
  "createdAt": "${new Date().toISOString()}",
  "env": "production"
}</textarea>
      </div>
    `;
  }

  detailPaneContent.innerHTML = contentHtml;
  detailPaneFooter.innerHTML = footerHtml;

  detailOverlay.classList.add("show");
  detailPane.classList.add("show");
}

function closeDetailPane() {
  detailOverlay.classList.remove("show");
  detailPane.classList.remove("show");
}

// 供内联 onclick 使用
window.closeDetailPane = closeDetailPane;
window.saveAndCloseDetail = function() {
  showToast("更改已保存");
  closeDetailPane();
};

detailPaneClose.addEventListener("click", closeDetailPane);
detailOverlay.addEventListener("click", closeDetailPane);

// Initialize
renderNavigation();
renderPageContent(pages[0]);
