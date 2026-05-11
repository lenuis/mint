const pages = [
  {
    id: "tasks",
    navLabel: "任务",
    navMeta: "执行面板",
    title: "Tasks",
    subtitle: "今日待办与核心工作流",
    primaryAction: "新建任务",
    secondaryAction: "进入专注",
    bentoBlocks: [
      {
        span: 8,
        title: "进行中 (In Progress)",
        action: "查看全部",
        content: `
          <div class="ant-list">
            <div class="ant-list-item interactive" data-click-label="重构核心渲染引擎">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">重构核心渲染引擎</h4>
                  <div class="ant-list-item-meta-description">将 WebGL 替换为 WebGPU，提升大规模节点渲染帧率。</div>
                  <div class="ant-progress" style="margin-top: 8px;"><div class="ant-progress-outer"><div class="ant-progress-inner"><div class="ant-progress-bg" style="width: 65%;"></div></div></div></div>
                </div>
              </div>
              <div class="ant-list-item-action">
                <span class="ant-tag ant-tag-orange">高优先级</span>
              </div>
            </div>
            <div class="ant-list-item interactive" data-click-label="发布 V2.0 候选版">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">发布 V2.0 候选版</h4>
                  <div class="ant-list-item-meta-description">合并 feature分支，跑通 CI/CD 自动化流水线。</div>
                </div>
              </div>
              <div class="ant-list-item-action">
                <span class="ant-tag ant-tag-red">今天必须</span>
              </div>
            </div>
          </div>
        `
      },
      {
        span: 4,
        title: "今日进度",
        action: "统计",
        content: `
          <div class="ant-statistic">
            <div class="ant-statistic-content">72%</div>
            <div class="ant-statistic-title">已完成 18 / 25 项任务</div>
          </div>
          <div class="ant-list" style="margin-top: 16px;">
            <div class="ant-list-item" style="padding: 8px 0;"><span class="ant-list-item-meta-title" style="margin:0;">Bug 修复</span><span>8</span></div>
            <div class="ant-list-item" style="padding: 8px 0;"><span class="ant-list-item-meta-title" style="margin:0;">代码评审</span><span>5</span></div>
            <div class="ant-list-item" style="padding: 8px 0;"><span class="ant-list-item-meta-title" style="margin:0;">阻塞中</span><span style="color:var(--ant-error-color);">2</span></div>
          </div>
        `
      },
      {
        span: 6,
        title: "待处理 (Backlog)",
        content: `
          <div class="ant-list">
            <div class="ant-list-item interactive" data-click-label="排查内存泄漏问题">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">排查内存泄漏问题</h4>
                  <div class="ant-list-item-meta-description">V8 引擎在处理大量数组时出现堆内存溢出</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag ant-tag-red">P0</span></div>
            </div>
            <div class="ant-list-item interactive" data-click-label="更新 API 接口文档">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">更新 API 接口文档</h4>
                  <div class="ant-list-item-meta-description">补充认证模块的新参数说明</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag">P2</span></div>
            </div>
          </div>
        `
      },
      {
        span: 6,
        title: "最近合并 (Merged)",
        content: `
          <div class="ant-list">
            <div class="ant-list-item interactive" data-click-label="PR #1024">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">feat: 支持暗黑模式</h4>
                  <div class="ant-list-item-meta-description">#1024 merged by @evan</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag ant-tag-blue">已合并</span></div>
            </div>
            <div class="ant-list-item interactive" data-click-label="PR #1023">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">fix: 登录状态丢失问题</h4>
                  <div class="ant-list-item-meta-description">#1023 merged by @sarah</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag ant-tag-blue">已合并</span></div>
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
        title: "Q3 核心目标 (OKRs)",
        action: "编辑",
        content: `
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
            <div class="ant-card ant-card-bordered interactive" data-click-label="发布开源组件库" style="box-shadow:none;">
              <div class="ant-card-body">
                <h4 class="ant-list-item-meta-title">1. 发布开源 UI 组件库</h4>
                <div class="ant-list-item-meta-description">完成 40+ 基础组件的无障碍访问适配和文档编写。</div>
                <div class="ant-progress" style="margin-top: 16px;"><div class="ant-progress-outer"><div class="ant-progress-inner"><div class="ant-progress-bg" style="width: 40%;"></div></div></div></div>
                <div style="margin-top:12px;"><span class="ant-tag ant-tag-blue">进行中</span></div>
              </div>
            </div>
            <div class="ant-card ant-card-bordered interactive" data-click-label="独立站 MRR 突破" style="box-shadow:none;">
              <div class="ant-card-body">
                <h4 class="ant-list-item-meta-title">2. 独立站 MRR 突破 $5000</h4>
                <div class="ant-list-item-meta-description">上线高级订阅功能，优化支付转化漏斗。</div>
                <div class="ant-progress" style="margin-top: 16px;"><div class="ant-progress-outer"><div class="ant-progress-inner"><div class="ant-progress-bg" style="width: 80%; background-color: var(--ant-success-color);"></div></div></div></div>
                <div style="margin-top:12px;"><span class="ant-tag ant-tag-green">健康</span></div>
              </div>
            </div>
            <div class="ant-card ant-card-bordered interactive" data-click-label="AI 助手功能整合" style="box-shadow:none;">
              <div class="ant-card-body">
                <h4 class="ant-list-item-meta-title">3. 深度整合 AI 助手功能</h4>
                <div class="ant-list-item-meta-description">接入 LLM 接口，实现代码片段自动生成与补全。</div>
                <div class="ant-progress" style="margin-top: 16px;"><div class="ant-progress-outer"><div class="ant-progress-inner"><div class="ant-progress-bg" style="width: 15%; background-color: var(--ant-error-color);"></div></div></div></div>
                <div style="margin-top:12px;"><span class="ant-tag ant-tag-red">落后</span></div>
              </div>
            </div>
          </div>
        `
      },
      {
        span: 8,
        title: "迭代计划 (Sprints)",
        content: `
          <div class="ant-list">
            <div class="ant-list-item interactive" data-click-label="Sprint 42">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">Sprint 42: 性能优化周</h4>
                  <div class="ant-list-item-meta-description">5 月 15 日 - 5 月 29 日</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag ant-tag-blue">当前</span></div>
            </div>
            <div class="ant-list-item interactive" data-click-label="Sprint 43">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">Sprint 43: 多语言支持</h4>
                  <div class="ant-list-item-meta-description">6 月 01 日 - 6 月 15 日</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag">规划中</span></div>
            </div>
          </div>
        `
      },
      {
        span: 4,
        title: "发布倒计时",
        content: `
          <div class="ant-statistic">
            <div class="ant-statistic-content">12 <span style="font-size: 16px; font-weight: normal;">天</span></div>
            <div class="ant-statistic-title">距离 V2.0 正式发布</div>
          </div>
          <div style="margin-top:20px;">
            <button class="ant-btn ant-btn-default interactive" style="width:100%" data-click-label="检查发布清单">检查发布清单</button>
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
          <div class="ant-statistic">
            <div class="ant-statistic-content" style="color: var(--ant-success-color);">$4,250</div>
            <div class="ant-statistic-title">+15% 较上月</div>
          </div>
          <div class="ant-progress" style="margin-top: 8px;"><div class="ant-progress-outer"><div class="ant-progress-inner"><div class="ant-progress-bg" style="width: 85%; background-color: var(--ant-success-color);"></div></div></div></div>
        `
      },
      {
        span: 4,
        title: "云基建支出",
        content: `
          <div class="ant-statistic">
            <div class="ant-statistic-content" style="color: var(--ant-error-color);">$320</div>
            <div class="ant-statistic-title">服务器、数据库、CDN</div>
          </div>
          <div class="ant-progress" style="margin-top: 8px;"><div class="ant-progress-outer"><div class="ant-progress-inner"><div class="ant-progress-bg" style="width: 45%; background-color: var(--ant-error-color);"></div></div></div></div>
        `
      },
      {
        span: 4,
        title: "API 调用费用",
        content: `
          <div class="ant-statistic">
            <div class="ant-statistic-content" style="color: var(--ant-warning-color);">$185</div>
            <div class="ant-statistic-title">OpenAI / Anthropic Token 消耗</div>
          </div>
          <div class="ant-progress" style="margin-top: 8px;"><div class="ant-progress-outer"><div class="ant-progress-inner"><div class="ant-progress-bg" style="width: 60%; background-color: var(--ant-warning-color);"></div></div></div></div>
        `
      },
      {
        span: 8,
        title: "最近流水 (Transactions)",
        action: "查看账单",
        content: `
          <div class="ant-list">
            <div class="ant-list-item interactive" data-click-label="Pro Plan Subscription">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">Pro Plan Subscription</h4>
                  <div class="ant-list-item-meta-description">Stripe 自动扣款</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span style="color:var(--ant-success-color); font-weight:600;">+$29.00</span></div>
            </div>
            <div class="ant-list-item interactive" data-click-label="AWS EC2 账单">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">AWS EC2 月度账单</h4>
                  <div class="ant-list-item-meta-description">us-east-1 区域实例费用</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span style="color:var(--ant-error-color); font-weight:600;">-$145.20</span></div>
            </div>
            <div class="ant-list-item interactive" data-click-label="GitHub Copilot">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">GitHub Copilot</h4>
                  <div class="ant-list-item-meta-description">年度订阅续费</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span style="color:var(--ant-error-color); font-weight:600;">-$100.00</span></div>
            </div>
          </div>
        `
      },
      {
        span: 4,
        title: "即将扣款",
        content: `
          <div class="ant-list">
            <div class="ant-list-item interactive" data-click-label="Vercel Pro">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">Vercel Pro</h4>
                  <div class="ant-list-item-meta-description">明天</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag">$20</span></div>
            </div>
            <div class="ant-list-item interactive" data-click-label="Google Workspace">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">Google Workspace</h4>
                  <div class="ant-list-item-meta-description">3 天后</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag">$12</span></div>
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
        title: "即将启程",
        content: `
          <div class="ant-card ant-card-bordered interactive" data-click-label="WWDC 开发者大会" style="border-color: var(--ant-primary-color);">
            <div class="ant-card-body">
              <span class="ant-tag ant-tag-blue" style="margin-bottom: 12px;">5天后出发</span>
              <div class="ant-statistic-content" style="font-size: 24px;">WWDC 2026 现场参会</div>
              <div class="ant-list-item-meta-description" style="margin-bottom: 16px;">加州库比蒂诺 · 苹果园区</div>
              <span class="ant-tag">UA888 航班已确认</span>
              <span class="ant-tag">酒店已预订</span>
            </div>
          </div>
        `
      },
      {
        span: 4,
        title: "行程状态",
        content: `
          <div class="ant-list">
            <div class="ant-list-item interactive" data-click-label="ESTA 签证">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">ESTA 签证</h4>
                  <div class="ant-list-item-meta-description">已确认，无需更新</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag ant-tag-green">OK</span></div>
            </div>
            <div class="ant-list-item interactive" data-click-label="漫游流量">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">eSIM 漫游</h4>
                  <div class="ant-list-item-meta-description">需购买 15 天北美套餐</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag ant-tag-orange">待购</span></div>
            </div>
          </div>
        `
      },
      {
        span: 6,
        title: "规划中",
        content: `
          <div class="ant-list">
            <div class="ant-list-item interactive" data-click-label="东京设计周">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">东京设计周 / 独立开发者聚会</h4>
                  <div class="ant-list-item-meta-description">10 月份 · 寻找当地民宿</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag">收集中</span></div>
            </div>
          </div>
        `
      },
      {
        span: 6,
        title: "数字游民目的地",
        action: "浏览",
        content: `
          <div class="ant-list">
            <div class="ant-list-item interactive" data-click-label="清迈">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">清迈, 泰国</h4>
                  <div class="ant-list-item-meta-description">生活成本极低，咖啡馆基建完善</div>
                </div>
              </div>
            </div>
            <div class="ant-list-item interactive" data-click-label="巴厘岛">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">巴厘岛, 印尼</h4>
                  <div class="ant-list-item-meta-description">时区友好，冲浪与编码</div>
                </div>
              </div>
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
        title: "最近更新",
        action: "查看库",
        content: `
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
            <div class="ant-card ant-card-bordered interactive" data-click-label="Rust 借用检查器原理" style="box-shadow:none;">
              <div class="ant-card-body">
                <span class="ant-tag" style="margin-bottom:8px;">Rust</span>
                <h4 class="ant-list-item-meta-title">深入理解 Rust 借用检查器</h4>
                <div class="ant-list-item-meta-description" style="margin-top:8px;">关于生命周期和所有权转移在复杂并发场景下的最佳实践分析...</div>
              </div>
            </div>
            <div class="ant-card ant-card-bordered interactive" data-click-label="微前端架构演进" style="box-shadow:none;">
              <div class="ant-card-body">
                <span class="ant-tag" style="margin-bottom:8px;">Architecture</span>
                <h4 class="ant-list-item-meta-title">微前端架构从 Webpack 到 Rspack 的演进</h4>
                <div class="ant-list-item-meta-description" style="margin-top:8px;">构建速度提升了 400%，解决了模块联邦的共享依赖版本冲突问题。</div>
              </div>
            </div>
            <div class="ant-card ant-card-bordered interactive" data-click-label="Bento 网格设计灵感" style="box-shadow:none;">
              <div class="ant-card-body">
                <span class="ant-tag ant-tag-blue" style="margin-bottom:8px;">Design System</span>
                <h4 class="ant-list-item-meta-title">AntD 网格设计规范</h4>
                <div class="ant-list-item-meta-description" style="margin-top:8px;">浅色模式下的边框处理与空间利用率研究。</div>
              </div>
            </div>
          </div>
        `
      },
      {
        span: 6,
        title: "代码片段",
        content: `
          <div class="ant-list">
            <div class="ant-list-item interactive" data-click-label="Docker 缓存清理脚本">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">Docker 缓存强制清理脚本.sh</h4>
                  <div class="ant-list-item-meta-description">bash</div>
                </div>
              </div>
            </div>
            <div class="ant-list-item interactive" data-click-label="React 虚拟滚动 Hook">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">useVirtualScroll.ts</h4>
                  <div class="ant-list-item-meta-description">typescript</div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        span: 6,
        title: "待整理会议纪要",
        content: `
          <div class="ant-list">
            <div class="ant-list-item interactive" data-click-label="V2.0 数据库表结构评审">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">V2.0 数据库表结构评审</h4>
                  <div class="ant-list-item-meta-description">昨天 14:00</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag ant-tag-orange">需整理</span></div>
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
        title: "API 密钥 (Keys)",
        action: "管理",
        content: `
          <div class="ant-list">
            <div class="ant-list-item interactive" data-click-label="OpenAI API Key">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">OpenAI API Key</h4>
                  <div class="ant-list-item-meta-description">sk-proj-...8f9a</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag ant-tag-green">Active</span></div>
            </div>
            <div class="ant-list-item interactive" data-click-label="AWS Access Key">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">AWS Access Key</h4>
                  <div class="ant-list-item-meta-description">AKIA...XZQ</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag ant-tag-green">Active</span></div>
            </div>
            <div class="ant-list-item interactive" data-click-label="Stripe Webhook Secret">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">Stripe Webhook Secret</h4>
                  <div class="ant-list-item-meta-description">whsec_...112</div>
                </div>
              </div>
              <div class="ant-list-item-action"><span class="ant-tag ant-tag-red">Expired</span></div>
            </div>
          </div>
        `
      },
      {
        span: 6,
        title: "SSH 公钥",
        content: `
          <div class="ant-list">
            <div class="ant-list-item interactive" data-click-label="MacBook Pro M3">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">MacBook Pro M3 Max</h4>
                  <div class="ant-list-item-meta-description">ed25519 · 添加于 2024/01</div>
                </div>
              </div>
            </div>
            <div class="ant-list-item interactive" data-click-label="Ubuntu 生产服务器">
              <div class="ant-list-item-meta">
                <div class="ant-list-item-meta-content">
                  <h4 class="ant-list-item-meta-title">Ubuntu 生产服务器</h4>
                  <div class="ant-list-item-meta-description">rsa · 添加于 2023/11</div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        span: 12,
        title: "自动化部署偏好",
        content: `
          <div style="display:flex; gap: 16px; flex-wrap: wrap;">
            <div class="ant-card ant-card-bordered interactive" data-click-label="推送即部署" style="flex:1; box-shadow:none;">
              <div class="ant-card-body">
                <h4 class="ant-list-item-meta-title">Push to Main -> Deploy</h4>
                <div class="ant-list-item-meta-description" style="display:block; margin-top:8px;">主分支代码推送后自动触发 Vercel 生产环境部署。</div>
                <div style="margin-top: 12px;"><span class="ant-tag ant-tag-green">已启用</span></div>
              </div>
            </div>
            <div class="ant-card ant-card-bordered interactive" data-click-label="每日数据库备份" style="flex:1; box-shadow:none;">
              <div class="ant-card-body">
                <h4 class="ant-list-item-meta-title">Daily Database Backup</h4>
                <div class="ant-list-item-meta-description" style="display:block; margin-top:8px;">每天凌晨 3:00 自动备份 PostgreSQL 至 S3 存储桶。</div>
                <div style="margin-top: 12px;"><span class="ant-tag ant-tag-green">已启用</span></div>
              </div>
            </div>
          </div>
        `
      }
    ]
  }
];

// Elements
const desktopMenu = document.getElementById("desktopMenu");
const mobileTabBar = document.getElementById("mobileTabBar");
const pageRoot = document.getElementById("pageRoot");
const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const primaryActionBtn = document.getElementById("primaryActionBtn");
const secondaryActionBtn = document.getElementById("secondaryActionBtn");
const messageBox = document.getElementById("antMessage");
const messageContent = document.getElementById("messageContent");

let currentPageId = pages[0].id;
let messageTimeout;

// Message (Toast)
function showMessage(msg) {
  messageContent.textContent = msg;
  messageBox.classList.add("show");
  clearTimeout(messageTimeout);
  messageTimeout = setTimeout(() => {
    messageBox.classList.remove("show");
  }, 2000);
}

// Render Navigation
function renderNavigation() {
  desktopMenu.innerHTML = "";
  mobileTabBar.innerHTML = "";

  pages.forEach((page) => {
    // Desktop Sider Item
    const deskLi = document.createElement("li");
    deskLi.className = `ant-menu-item ${currentPageId === page.id ? "ant-menu-item-selected" : ""}`;
    deskLi.dataset.pageId = page.id;
    deskLi.textContent = page.navLabel;
    deskLi.addEventListener("click", () => switchPage(page.id));
    desktopMenu.appendChild(deskLi);

    // Mobile TabBar Item
    const mobBtn = document.createElement("button");
    mobBtn.className = `tab-item ${currentPageId === page.id ? "active" : ""}`;
    mobBtn.dataset.pageId = page.id;
    mobBtn.innerHTML = `
      <div class="tab-icon"></div>
      <span class="tab-label">${page.navLabel}</span>
    `;
    mobBtn.addEventListener("click", () => switchPage(page.id));
    mobileTabBar.appendChild(mobBtn);
  });
}

// Render Cards
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
    card.className = `ant-card col-span-${block.span}`;
    
    let headerHtml = "";
    if (block.title) {
      headerHtml = `
        <div class="ant-card-head">
          <div class="ant-card-head-title">${block.title}</div>
          ${block.action ? `<div class="ant-card-extra interactive" data-click-label="${block.action}">${block.action}</div>` : ""}
        </div>
      `;
    }

    card.innerHTML = `
      ${headerHtml}
      <div class="ant-card-body">
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
    window.scrollTo(0, 0);
  }
}

// Global Click & Drawer Logic
const antDrawerMask = document.getElementById("antDrawerMask");
const antDrawer = document.getElementById("antDrawer");
const drawerClose = document.getElementById("drawerClose");
const drawerTitle = document.getElementById("drawerTitle");
const drawerBody = document.getElementById("drawerBody");
const drawerFooter = document.getElementById("drawerFooter");

document.body.addEventListener("click", (e) => {
  const interactiveEl = e.target.closest('.interactive');
  if (interactiveEl && interactiveEl.dataset.clickLabel) {
    const label = interactiveEl.dataset.clickLabel;
    
    if (
      interactiveEl.classList.contains('ant-list-item') || 
      interactiveEl.classList.contains('ant-card') ||
      interactiveEl.classList.contains('ant-btn-primary') ||
      interactiveEl.classList.contains('ant-btn-default')
    ) {
      openDrawer(currentPageId, label);
    } else {
      showMessage(label);
    }
  }
});

function openDrawer(pageContext, itemLabel) {
  const isNew = itemLabel.includes('新建') || itemLabel.includes('记录') || itemLabel.includes('规划');
  drawerTitle.textContent = isNew ? '新建项目' : '查看详情';
  
  let contentHtml = '';
  let footerHtml = `
    <button class="ant-btn ant-btn-default interactive" onclick="closeDrawer()">取消</button>
    <button class="ant-btn ant-btn-primary interactive" onclick="saveDrawer()">保存更改</button>
  `;

  if (pageContext === 'tasks') {
    contentHtml = `
      <div class="ant-form-item">
        <div class="ant-form-item-label"><label>任务标题</label></div>
        <input type="text" class="ant-input" value="${isNew ? '' : itemLabel}" placeholder="输入任务名称...">
      </div>
      <div style="display:flex; gap: 16px;">
        <div class="ant-form-item" style="flex:1;">
          <div class="ant-form-item-label"><label>状态</label></div>
          <select class="ant-select">
            <option>待处理 (To Do)</option>
            <option ${isNew ? '' : 'selected'}>进行中 (In Progress)</option>
            <option>已完成 (Done)</option>
          </select>
        </div>
        <div class="ant-form-item" style="flex:1;">
          <div class="ant-form-item-label"><label>优先级</label></div>
          <select class="ant-select">
            <option>P0 - 紧急</option>
            <option selected>P1 - 高</option>
            <option>P2 - 中</option>
            <option>P3 - 低</option>
          </select>
        </div>
      </div>
      <div class="ant-form-item">
        <div class="ant-form-item-label"><label>详细描述</label></div>
        <textarea class="ant-input" placeholder="输入任务描述...">${isNew ? '' : '此任务正在处理中。需要将目前的渲染管线迁移至 WebGPU。'}</textarea>
      </div>
    `;
    if (!isNew) {
      footerHtml = `
        <button class="ant-btn ant-btn-text" style="color:var(--ant-error-color); margin-right:auto;" onclick="closeDrawer()">删除</button>
        <button class="ant-btn ant-btn-default" onclick="closeDrawer()">取消</button>
        <button class="ant-btn ant-btn-primary" onclick="saveDrawer()">更新状态</button>
      `;
    }
  } else {
    // 通用 Fallback
    contentHtml = `
      <div class="ant-form-item">
        <div class="ant-form-item-label"><label>项目名称</label></div>
        <input type="text" class="ant-input" value="${itemLabel}">
      </div>
      <div class="ant-form-item">
        <div class="ant-form-item-label"><label>详情配置</label></div>
        <textarea class="ant-input" style="font-family: monospace;">{
  "id": "${itemLabel}",
  "env": "production"
}</textarea>
      </div>
    `;
  }

  drawerBody.innerHTML = contentHtml;
  drawerFooter.innerHTML = footerHtml;

  antDrawerMask.classList.add("show");
  antDrawer.classList.add("show");
}

function closeDrawer() {
  antDrawerMask.classList.remove("show");
  antDrawer.classList.remove("show");
}

window.closeDrawer = closeDrawer;
window.saveDrawer = function() {
  showMessage("更改已保存");
  closeDrawer();
};

drawerClose.addEventListener("click", closeDrawer);
antDrawerMask.addEventListener("click", closeDrawer);

// Init
renderNavigation();
renderPageContent(pages[0]);
