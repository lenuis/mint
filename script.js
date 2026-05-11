const DEVICE_PRESETS = {
  desktop: {
    width: 1440,
    height: 960,
    label: "1440 x 960",
    hint: "桌面端优先展示高频操作区，右侧补充状态与次级入口。",
  },
  mobile: {
    width: 430,
    height: 932,
    label: "430 x 932",
    hint: "手机端采用独立尺寸与单列层级，先操作，再查看细节。",
  },
};

const pages = [
  {
    id: "tasks",
    navLabel: "任务",
    navMeta: "执行面板",
    heroTag: "Execution Desk",
    title: "任务页面",
    description: "把最常做的事情推到第一屏，先进入执行，再逐层查看提醒、时间线与阻塞信息。",
    primaryAction: "新建任务",
    secondaryAction: "进入专注",
    focus: {
      title: "今日主任务区",
      summary: "以“现在就该做什么”为核心，把高频任务、专注块和一键动作集中在视觉中心，避免用户先被大量信息打断。",
      kpis: [
        { label: "当前专注", value: "45 分钟" },
        { label: "待立即处理", value: "3 项" },
        { label: "今日完成率", value: "54%" },
      ],
      items: [
        { title: "优先 1", text: "完成家庭预算复盘，补齐餐饮与通勤分类。", meta: "预计 45 分钟" },
        { title: "优先 2", text: "确认体检预约材料，优先补证件与过往报告。", meta: "18:30 截止" },
        { title: "优先 3", text: "继续整理页面视觉反馈，先处理高影响问题。", meta: "剩余 6 条" },
      ],
      meta: [
        { label: "下一步", value: "先做无需等待外部反馈的任务" },
        { label: "提醒节奏", value: "专注结束后自动进入跟进检查" },
      ],
      quickActions: ["一键开始专注", "快速加任务", "批量调优先级", "复制今日模板"],
      progress: [
        { label: "高频操作", value: "主任务、专注、加任务" },
        { label: "第二层", value: "时间轴、委派、阻塞提醒" },
        { label: "深层信息", value: "历史记录与完整看板" },
        { label: "当前状态", value: "适合快速进入执行" },
      ],
    },
    metrics: [
      { label: "今日任务", value: "26", meta: "已完成 14，延后 3" },
      { label: "高优先级", value: "08", meta: "2 项待确认负责人" },
      { label: "进行中", value: "11", meta: "平均专注时长 42 分钟" },
      { label: "阻塞项", value: "03", meta: "等待外部回复" },
    ],
    mainSections: [
      {
        title: "执行清单",
        note: "第二层内容，仍然保持高可用，但不抢第一屏主操作位。",
        chips: ["全部", "今天", "高优先", "可委派", "等待中"],
        kind: "list",
        items: [
          { title: "完成本周家庭预算复盘", subtitle: "家庭财务 / 需整理餐饮、通勤、娱乐三类支出", status: { text: "今天必须", tone: "warning" }, meta: "预计 45 分钟", action: "打开明细" },
          { title: "确认 5 月体检预约材料", subtitle: "个人事项 / 上传身份证、社保卡、过往检查报告", status: { text: "待准备", tone: "pink" }, meta: "截止 18:30", action: "补齐资料" },
          { title: "整理项目页面视觉反馈", subtitle: "工作协同 / 统一记录布局、色彩、文案层级问题", status: { text: "进行中", tone: "success" }, meta: "已处理 9/15 条", action: "继续标注" },
          { title: "给父母安排周末出行路线", subtitle: "家庭计划 / 高铁时间、酒店、打车接驳一并确认", status: { text: "待确认", tone: "warning" }, meta: "涉及 3 个城市", action: "查看路线" },
        ],
      },
      {
        title: "专注区块",
        note: "把工作流拆成短时段，帮助用户只关注下一步。",
        kind: "compact",
        items: [
          { title: "09:00 - 10:00", text: "集中处理票据录入与标签归类", meta: "深度工作" },
          { title: "10:30 - 11:10", text: "同步 3 个待决事项并更新状态", meta: "沟通窗口" },
          { title: "14:00 - 15:00", text: "审查行程预算与酒店备选", meta: "出行准备" },
        ],
      },
      {
        title: "委派与跟进",
        note: "更深一层的信息，用于处理协作与补位动作。",
        kind: "split",
        left: {
          title: "待跟进事项",
          kind: "list-mini",
          items: [
            { title: "物业缴费回执", meta: "等待邮件回传 / 超过 1 天" },
            { title: "宠物疫苗记录", meta: "诊所将在今晚更新" },
            { title: "旅行保险比价", meta: "需对比 4 家方案" },
          ],
        },
        right: {
          title: "快速动作",
          kind: "mini-stack",
          items: [
            { title: "批量改优先级", text: "将 4 个家庭事项升为今日处理" },
            { title: "复制今日模板", text: "复用常见任务结构" },
            { title: "生成提醒清单", text: "同步到手机端提示" },
          ],
        },
      },
    ],
    sideSections: [
      {
        title: "时间轴",
        kind: "timeline",
        items: [
          { time: "08:40", title: "晨间收件整理", text: "清空未读提醒并归档 12 条通知" },
          { time: "11:20", title: "午前核对", text: "检查付款状态与发票截图" },
          { time: "16:10", title: "出行确认", text: "对比天气、路况与换乘时间" },
          { time: "20:00", title: "晚间复盘", text: "记录完成率与明日预留量" },
        ],
      },
      {
        title: "阻塞提醒",
        kind: "fields",
        items: [
          { label: "等待对象", value: "保险客服 / 医院前台 / 物业财务" },
          { label: "最晚处理", value: "今晚 21:30 前做二次提醒" },
          { label: "建议动作", value: "先完成不依赖外部输入的准备工作" },
        ],
      },
    ],
  },
  {
    id: "plans",
    navLabel: "计划",
    navMeta: "目标编排",
    heroTag: "Planning Studio",
    title: "计划页面",
    description: "先给出当前周期最重要的规划动作，再向下展开阶段、里程碑与回顾说明，避免计划页变成纯信息堆叠。",
    primaryAction: "创建计划",
    secondaryAction: "切换周期",
    focus: {
      title: "当前规划重点",
      summary: "首页只保留最值得立刻编辑的计划内容，把关键里程碑和待决节点放到身边，降低切换成本。",
      kpis: [
        { label: "本周重点", value: "5 个" },
        { label: "临近节点", value: "2 个" },
        { label: "完成偏差", value: "+9%" },
      ],
      items: [
        { title: "周计划整理", text: "本周优先收敛健康、理财、出行三个主题。", meta: "先处理有截止日期的计划" },
        { title: "里程碑确认", text: "锁定体检、预算、旅行方案三个必须落地的节点。", meta: "本周日复盘前完成" },
        { title: "风险前置", text: "把资料准备类事项提前到本周三之前完成。", meta: "减少后期拖延" },
      ],
      meta: [
        { label: "推荐顺序", value: "先看当前周期，再看下阶段目标" },
        { label: "层级策略", value: "计划动作前置，回顾总结后置" },
      ],
      quickActions: ["本周计划", "新增里程碑", "复制月模板", "打开回顾"],
      progress: [
        { label: "高频操作", value: "改周期、加计划、调节点" },
        { label: "第二层", value: "阶段规划与目标拆分" },
        { label: "深层信息", value: "周观察与策略说明" },
        { label: "当前状态", value: "需要继续收敛重点" },
      ],
    },
    metrics: [
      { label: "本周重点", value: "05", meta: "覆盖健康、理财、旅行、学习" },
      { label: "里程碑", value: "12", meta: "本月已完成 7 个" },
      { label: "延后节点", value: "02", meta: "集中在资料准备环节" },
      { label: "计划完成率", value: "68%", meta: "较上周 +9%" },
    ],
    mainSections: [
      {
        title: "阶段规划",
        note: "先看最重要阶段，再浏览其余层级。",
        chips: ["本周", "本月", "季度", "年度"],
        kind: "compact",
        items: [
          { title: "健康管理", text: "完成体检预约、睡眠记录与步行目标修订", meta: "第 2 阶段 / 稳定推进" },
          { title: "理财整理", text: "补录 4 月支出、建立 5 月预算上限", meta: "第 1 阶段 / 刚启动" },
          { title: "夏季出行", text: "选定城市、预算、请假窗口与住宿标准", meta: "第 3 阶段 / 待锁定" },
        ],
      },
      {
        title: "目标拆分",
        note: "第二层的执行结构，适合进一步细化。",
        kind: "list",
        items: [
          { title: "5 月个人效率体系更新", subtitle: "动作：统一任务标签、模板、晨晚复盘格式", status: { text: "结构完成", tone: "success" }, meta: "剩余：移动端版式验证", action: "展开方案" },
          { title: "家庭旅行总表", subtitle: "动作：确认预算边界、备选路线与老人休息节奏", status: { text: "待比价", tone: "warning" }, meta: "资源：酒店 6 家 / 车次 9 个", action: "查看节点" },
          { title: "年度健康指标追踪", subtitle: "动作：体重、睡眠、体检、运动频率统一归档", status: { text: "已开档", tone: "pink" }, meta: "风险：连续性不足", action: "录入计划" },
          { title: "阅读与学习计划", subtitle: "动作：划分主题书单、每周阅读时段、笔记产出模板", status: { text: "准备中", tone: "warning" }, meta: "首批书单 8 本", action: "设置节奏" },
        ],
      },
      {
        title: "计划回顾",
        note: "更深层策略内容，默认不抢首要视觉。",
        kind: "journal",
        items: [
          { title: "本周观察", text: "计划执行阻力主要来自临时事务插入，因此顶部需要更明显的缓冲区和重排入口。" },
          { title: "下周建议", text: "把健康、财务、行程三类计划拆出固定维护时间，避免都在晚上堆积处理。" },
        ],
      },
    ],
    sideSections: [
      {
        title: "月度日历",
        kind: "calendar",
        items: [
          { day: "一", date: "06" },
          { day: "二", date: "07" },
          { day: "三", date: "08", active: true },
          { day: "四", date: "09" },
          { day: "五", date: "10" },
          { day: "六", date: "11" },
          { day: "日", date: "12" },
        ],
      },
      {
        title: "计划参数",
        kind: "fields",
        items: [
          { label: "主周期", value: "按周统筹，按月结算复盘" },
          { label: "复盘时间", value: "每晚 21:40 / 每周日 19:00" },
          { label: "风险阈值", value: "连续 2 天未推进则自动预警" },
        ],
      },
    ],
  },
  {
    id: "finance",
    navLabel: "记账",
    navMeta: "消费总览",
    heroTag: "Finance Ledger",
    title: "记账页面",
    description: "记账页先给录入、最近流水和预算余量，再将账户、账单与提醒逐层放下，让用户先完成最常见动作。",
    primaryAction: "记录支出",
    secondaryAction: "快速分类",
    focus: {
      title: "高频记账区",
      summary: "第一屏直接服务‘记一笔’和‘看最近消费’，把预算和异常提醒放在同一视线范围，让用户先完成记录，再做分析。",
      kpis: [
        { label: "待分类", value: "2 笔" },
        { label: "今日支出", value: "¥482" },
        { label: "餐饮余量", value: "30%" },
      ],
      items: [
        { title: "立即录入", text: "新增一笔支出并自动带入时间、账户和最近分类。", meta: "最快 2 步完成" },
        { title: "补齐缺漏", text: "先处理候补补差与报销流水，避免月末堆积。", meta: "当前 2 笔待补" },
        { title: "预算校正", text: "先看餐饮与通勤分类，及时纠正超支倾向。", meta: "本周偏高" },
      ],
      meta: [
        { label: "推荐路径", value: "记一笔 -> 分类 -> 查看预算余量" },
        { label: "层级逻辑", value: "录入动作高于账户总览与历史分析" },
      ],
      quickActions: ["记录支出", "扫描票据", "快速分类", "查看本周"],
      progress: [
        { label: "高频操作", value: "记账、分类、改预算" },
        { label: "第二层", value: "账户与即将到期账单" },
        { label: "深层信息", value: "长期异常与周期复盘" },
        { label: "当前状态", value: "适合快速清账" },
      ],
    },
    metrics: [
      { label: "本月支出", value: "¥8,420", meta: "预算使用 63%" },
      { label: "本月收入", value: "¥14,800", meta: "含兼职与报销" },
      { label: "固定账单", value: "06", meta: "已支付 4 项" },
      { label: "储蓄率", value: "43%", meta: "目标 40% 已达成" },
    ],
    mainSections: [
      {
        title: "最近流水",
        note: "作为第二层内容，方便快速复核刚发生的消费。",
        chips: ["全部", "餐饮", "通勤", "居家", "娱乐", "医疗"],
        kind: "list",
        items: [
          { title: "午餐与咖啡", subtitle: "餐饮消费 / 公司附近简餐 + 手冲咖啡", status: { text: "已记账", tone: "success" }, meta: "¥58.00 / 12:18", action: "查看票据" },
          { title: "高铁候补补差", subtitle: "行程支出 / 城际出行改签差价", status: { text: "待分类", tone: "warning" }, meta: "¥124.50 / 09:42", action: "调整分类" },
          { title: "超市采购", subtitle: "居家用品 / 日用品、清洁、早餐储备", status: { text: "预算内", tone: "success" }, meta: "¥286.90 / 昨日 20:10", action: "拆分条目" },
          { title: "体检预约定金", subtitle: "医疗健康 / 预约金可在到院后抵扣", status: { text: "待确认", tone: "pink" }, meta: "¥300.00 / 昨日 16:20", action: "补备注" },
        ],
      },
      {
        title: "预算分布",
        note: "次级分析区，帮助快速判断是否需要调整。",
        kind: "compact",
        items: [
          { title: "餐饮", text: "已用 ¥1,680 / 上限 ¥2,400", meta: "余量 30%" },
          { title: "通勤", text: "已用 ¥420 / 上限 ¥700", meta: "余量 40%" },
          { title: "居家", text: "已用 ¥1,120 / 上限 ¥1,600", meta: "余量 30%" },
        ],
      },
      {
        title: "账户与账单",
        note: "更深层的资金结构信息，供进一步管理。",
        kind: "split",
        left: {
          title: "账户概况",
          kind: "list-mini",
          items: [
            { title: "工资卡", meta: "余额 ¥26,840 / 自动入账" },
            { title: "旅行账户", meta: "余额 ¥6,200 / 单独控制预算" },
            { title: "日常零钱", meta: "余额 ¥1,360 / 高频消费" },
          ],
        },
        right: {
          title: "即将到期账单",
          kind: "mini-stack",
          items: [
            { title: "房租", text: "5 月 10 日 / ¥3,200" },
            { title: "宽带", text: "5 月 12 日 / ¥129" },
            { title: "健身卡分期", text: "5 月 15 日 / ¥380" },
          ],
        },
      },
    ],
    sideSections: [
      {
        title: "收支提醒",
        kind: "fields",
        items: [
          { label: "本周异常", value: "通勤费用略高，建议核查临时打车" },
          { label: "储蓄动作", value: "本周可转入旅行账户 ¥800" },
          { label: "待补记录", value: "报销流水 2 笔尚未录入" },
        ],
      },
      {
        title: "固定支出时间轴",
        kind: "timeline",
        items: [
          { time: "05/10", title: "房租扣款", text: "提前 1 天提醒确认余额" },
          { time: "05/12", title: "宽带续费", text: "可评估年度套餐是否更优" },
          { time: "05/15", title: "健身卡分期", text: "扣款后更新本月剩余预算" },
          { time: "05/20", title: "保险续费", text: "检查自动扣款账户" },
        ],
      },
    ],
  },
  {
    id: "travel",
    navLabel: "行程",
    navMeta: "路线编排",
    heroTag: "Trip Scheduler",
    title: "行程页面",
    description: "行程页将出发前最常用的信息前置为‘当前旅程卡’，再递进到日程、准备项、日期和补充备注。",
    primaryAction: "添加行程",
    secondaryAction: "查看今日动线",
    focus: {
      title: "当前旅程焦点",
      summary: "先展示最近一次需要处理的旅程，把出发日期、日程入口和准备动作放在视觉中央，减少在不同模块间来回找信息。",
      kpis: [
        { label: "最近出发", value: "6 天后" },
        { label: "待准备", value: "9 项" },
        { label: "已预订", value: "11 项" },
      ],
      items: [
        { title: "当前旅程", text: "苏杭 3 日家庭短途，优先照顾老人步行与休息节奏。", meta: "预算已用 70%" },
        { title: "今日动作", text: "先确认返程高铁与酒店接驳，再补药品准备。", meta: "建议先交通后清单" },
        { title: "临近提醒", text: "天气转雨，需要把轻便雨具和备用外套前置。", meta: "注意温差" },
      ],
      meta: [
        { label: "推荐路径", value: "看当前旅程 -> 日程 -> 准备清单" },
        { label: "层级策略", value: "出行主线优先，补充备注放侧栏" },
      ],
      quickActions: ["新增行程", "补交通", "加酒店", "打开准备清单"],
      progress: [
        { label: "高频操作", value: "看当前旅程、加预订、查准备" },
        { label: "第二层", value: "每日安排与日期视图" },
        { label: "深层信息", value: "天气与照顾重点备注" },
        { label: "当前状态", value: "适合行前整理" },
      ],
    },
    metrics: [
      { label: "待出发", value: "04", meta: "最近一次 6 天后" },
      { label: "已订项目", value: "11", meta: "交通 5 / 住宿 3 / 活动 3" },
      { label: "预算占用", value: "72%", meta: "仍可补充体验项目" },
      { label: "待准备", value: "09", meta: "证件与衣物优先" },
    ],
    mainSections: [
      {
        title: "行程总览",
        note: "先显示最重要的旅程，其余旅程作为第二层切换。",
        chips: ["本周", "本月", "家庭旅行", "商务出差"],
        kind: "list",
        items: [
          { title: "苏杭 3 日家庭短途", subtitle: "5 月 18 日 - 5 月 20 日 / 两位老人同行，节奏偏轻松", status: { text: "已预订", tone: "success" }, meta: "预算 ¥4,800 / 当前已花 ¥3,360", action: "查看明细" },
          { title: "深圳两日工作行", subtitle: "6 月 02 日 - 6 月 03 日 / 客户拜访与现场沟通", status: { text: "待出票", tone: "warning" }, meta: "酒店待最后确认", action: "补充预订" },
          { title: "青岛海边休整计划", subtitle: "7 月上旬 / 需要平衡预算、天气与假期时长", status: { text: "规划中", tone: "pink" }, meta: "备选酒店 6 家", action: "比较方案" },
        ],
      },
      {
        title: "每日安排",
        note: "第二层用于快速浏览当天节奏。",
        kind: "timeline",
        items: [
          { time: "08:00", title: "酒店早餐与退房", text: "提前 20 分钟整理行李并确认药品" },
          { time: "10:30", title: "西湖游船", text: "为老人预留更多步行缓冲时间" },
          { time: "13:20", title: "午餐预订", text: "选择口味清淡、排队时间短的餐厅" },
          { time: "16:40", title: "返程高铁", text: "进站前检查身份证、充电宝、零食" },
        ],
      },
      {
        title: "准备清单",
        note: "更深一层的行前细节，按物品维度查看。",
        kind: "compact",
        items: [
          { title: "证件", text: "身份证、医保卡、酒店确认单、保险截图", meta: "还差打印 1 份" },
          { title: "衣物", text: "轻薄外套、替换上衣、舒适鞋、雨伞", meta: "根据天气微调" },
          { title: "药品", text: "晕车药、常用药、创可贴、肠胃药", meta: "需补购 2 项" },
        ],
      },
    ],
    sideSections: [
      {
        title: "日期视图",
        kind: "calendar",
        items: [
          { day: "六", date: "18" },
          { day: "日", date: "19", active: true },
          { day: "一", date: "20" },
          { day: "二", date: "21" },
          { day: "三", date: "22" },
          { day: "四", date: "23" },
          { day: "五", date: "24" },
        ],
      },
      {
        title: "出行备注",
        kind: "fields",
        items: [
          { label: "天气", value: "多云转小雨，18-26°C，需带轻便雨具" },
          { label: "交通提醒", value: "高铁站到酒店打车约 28 分钟" },
          { label: "照顾重点", value: "中段休息、少排队、备足热水" },
        ],
      },
    ],
  },
  {
    id: "notes",
    navLabel: "笔记备忘",
    navMeta: "内容归档",
    heroTag: "Memo Archive",
    title: "笔记备忘页面",
    description: "优先给出“立即记录”和“最近要处理的备忘”，再把主题归档、灵感片段和整理规则放到更后层。",
    primaryAction: "新增笔记",
    secondaryAction: "快速备忘",
    focus: {
      title: "即时记录区",
      summary: "备忘最常见的是快速记录和处理刚产生的信息，因此第一屏强调录入、待办备忘和最近使用的标签入口。",
      kpis: [
        { label: "今日速记", value: "17 条" },
        { label: "待归档", value: "6 条" },
        { label: "重要提醒", value: "3 条" },
      ],
      items: [
        { title: "现在就记", text: "优先捕捉临时提醒、地址、联系人和一闪而过的灵感。", meta: "最快 1 步保存" },
        { title: "待处理备忘", text: "先整理体检报告、合同扫描件和出行说明卡。", meta: "都与近期事项强相关" },
        { title: "主题入口", text: "把个人效率、出行经验、阅读摘录作为常用入口前置。", meta: "减少翻找成本" },
      ],
      meta: [
        { label: "推荐路径", value: "先新增 -> 再整理 -> 最后归档" },
        { label: "层级策略", value: "即时记录高于长期知识归档" },
      ],
      quickActions: ["文字速记", "语音转写", "加提醒", "打开待归档"],
      progress: [
        { label: "高频操作", value: "速记、提醒、归档" },
        { label: "第二层", value: "主题卡片与标签浏览" },
        { label: "深层信息", value: "整理规则与时间轴" },
        { label: "当前状态", value: "适合快速收纳" },
      ],
    },
    metrics: [
      { label: "今日速记", value: "17", meta: "已整理 9 条" },
      { label: "主题笔记", value: "42", meta: "工作 / 生活 / 阅读 / 健康" },
      { label: "待归档", value: "06", meta: "主要是语音转写" },
      { label: "收藏片段", value: "28", meta: "本周新增 5 条" },
    ],
    mainSections: [
      {
        title: "最新备忘",
        note: "第二层聚焦最近内容，便于继续处理。",
        chips: ["全部", "生活", "工作", "阅读", "灵感", "提醒"],
        kind: "list",
        items: [
          { title: "周五记得带旧体检报告", subtitle: "医疗提醒 / 报告放在书桌左侧抽屉文件袋", status: { text: "重要", tone: "warning" }, meta: "创建于 08:12", action: "标记已办" },
          { title: "重新整理租房合同扫描件", subtitle: "家庭资料 / 需要重命名并归档到个人信息库", status: { text: "待归档", tone: "pink" }, meta: "附件 3 个", action: "打开文件" },
          { title: "阅读摘录：关于节奏感的设计思考", subtitle: "阅读笔记 / 关注留白、密度、次级信息的排序", status: { text: "已整理", tone: "success" }, meta: "可转入长期笔记", action: "继续编辑" },
          { title: "给爸妈准备出行说明卡", subtitle: "旅行备忘 / 酒店地址、返程时间、联系方式", status: { text: "待排版", tone: "warning" }, meta: "建议打印 A6 小卡", action: "生成草稿" },
        ],
      },
      {
        title: "主题卡片",
        note: "更深一层，面向长期积累内容。",
        kind: "journal",
        items: [
          { title: "个人效率", text: "沉淀晨间启动清单、晚间复盘模版、周期计划复盘字段，以及任务标记方式。" },
          { title: "出行经验", text: "记录老人同行注意点、酒店筛选偏好、城市内交通耗时与节奏安排。" },
        ],
      },
      {
        title: "灵感片段",
        note: "末级内容用更轻的卡片承载。",
        kind: "compact",
        items: [
          { title: "布局方向", text: "桌面端强化双栏，手机端不做简单缩放而是重排层级。", meta: "UI 方向" },
          { title: "备忘入口", text: "提供语音、文字、截图三种入口，但当前先保留按钮样板。", meta: "功能草案" },
          { title: "标签策略", text: "同一条备忘可挂多个场景标签，便于未来做联动视图。", meta: "信息架构" },
        ],
      },
    ],
    sideSections: [
      {
        title: "整理规则",
        kind: "fields",
        items: [
          { label: "收纳节奏", value: "每天两次轻整理，每周一次集中归档" },
          { label: "命名约定", value: "日期 + 场景 + 主体，便于跨页面搜索" },
          { label: "转正式笔记", value: "连续 2 次引用的内容自动升级" },
        ],
      },
      {
        title: "提醒时间轴",
        kind: "timeline",
        items: [
          { time: "09:10", title: "开会前整理速记", text: "避免零散语句堆积" },
          { time: "13:30", title: "午间摘录归档", text: "把阅读摘录转成主题笔记" },
          { time: "18:50", title: "补全出行说明", text: "完善地址与电话信息" },
          { time: "21:20", title: "晚间总复盘", text: "清空临时备忘箱" },
        ],
      },
    ],
  },
  {
    id: "profile",
    navLabel: "个人信息",
    navMeta: "资料中心",
    heroTag: "Profile Hub",
    title: "个人信息页面",
    description: "把最常查、最常改的个人资料前置，证件、联系人和授权信息递进展开，避免所有字段在一开始就同时出现。",
    primaryAction: "编辑资料",
    secondaryAction: "打开常用联系人",
    focus: {
      title: "常用资料入口",
      summary: "优先让用户看到最常使用的姓名、手机号、住址、紧急联系人和提醒偏好，其余授权与健康补充延后展示。",
      kpis: [
        { label: "待补字段", value: "4 项" },
        { label: "常用地址", value: "5 个" },
        { label: "已授权模块", value: "7 个" },
      ],
      items: [
        { title: "基础身份", text: "姓名、生日、手机号与邮箱放在第一层，方便高频确认。", meta: "信息最常被引用" },
        { title: "联系人入口", text: "紧急联系人、家庭医生和常用服务联系人前置。", meta: "出行与健康场景高频使用" },
        { title: "提醒偏好", text: "优先展示提醒方式与时间，方便其他页面复用。", meta: "未来功能联动核心" },
      ],
      meta: [
        { label: "推荐路径", value: "常用资料 -> 联系人 -> 授权设置" },
        { label: "层级策略", value: "高频引用字段高于补充性档案" },
      ],
      quickActions: ["编辑基础资料", "加联系人", "改提醒偏好", "查看授权"],
      progress: [
        { label: "高频操作", value: "查手机号、地址、联系人" },
        { label: "第二层", value: "偏好与授权" },
        { label: "深层信息", value: "健康补充与维护时间轴" },
        { label: "当前状态", value: "适合完善缺漏字段" },
      ],
    },
    metrics: [
      { label: "资料模块", value: "18", meta: "身份证件、地址、联系人等" },
      { label: "待补字段", value: "04", meta: "紧急联系人和保险资料优先" },
      { label: "常用地址", value: "05", meta: "家 / 公司 / 医院 / 父母家 / 高铁站" },
      { label: "授权场景", value: "07", meta: "行程、记账、提醒可复用" },
    ],
    mainSections: [
      {
        title: "基础资料",
        note: "高频引用字段集中在同一组里，减少阅读成本。",
        kind: "fields",
        items: [
          { label: "姓名", value: "林知远" },
          { label: "出生日期", value: "1994-08-16" },
          { label: "手机号", value: "138 0000 2468" },
          { label: "邮箱", value: "lin.zhiyuan@example.com" },
          { label: "居住地址", value: "上海市徐汇区天钥桥路 218 号 1203" },
          { label: "证件状态", value: "身份证、驾驶证、医保卡均已录入" },
        ],
      },
      {
        title: "常用联系人",
        note: "第二层放高频联系人，便于其他页面联动。",
        kind: "compact",
        items: [
          { title: "母亲 / 紧急联系人", text: "138 1111 5501 / 常住杭州", meta: "优先级 A" },
          { title: "家庭医生", text: "021-6000 8899 / 周四下午可约", meta: "健康档案" },
          { title: "常用酒店管家", text: "400-820-0000 / 支持老人友好服务", meta: "旅行资源" },
        ],
      },
      {
        title: "偏好与授权",
        note: "深层管理信息放在第三层，适合深入设置。",
        kind: "split",
        left: {
          title: "生活偏好",
          kind: "list-mini",
          items: [
            { title: "饮食偏好", meta: "少辣、清淡、乳糖不耐受" },
            { title: "出行偏好", meta: "高铁优先，酒店靠近地铁" },
            { title: "提醒偏好", meta: "重要事项提前 1 天 + 当天二次提醒" },
          ],
        },
        right: {
          title: "已授权模块",
          kind: "mini-stack",
          items: [
            { title: "行程页读取联系人", text: "紧急联系人与常用地址可复用" },
            { title: "记账页读取账户标签", text: "仅展示，不开放自动修改" },
            { title: "任务页读取提醒偏好", text: "用来计算提醒节奏" },
          ],
        },
      },
    ],
    sideSections: [
      {
        title: "健康补充",
        kind: "fields",
        items: [
          { label: "血型", value: "B 型" },
          { label: "过敏信息", value: "青霉素过敏，海鲜轻度敏感" },
          { label: "慢性记录", value: "暂无长期慢性病，需持续跟踪睡眠" },
        ],
      },
      {
        title: "资料维护时间轴",
        kind: "timeline",
        items: [
          { time: "本周", title: "补充保险信息", text: "上传保单与紧急电话" },
          { time: "本月", title: "更新居住证明", text: "替换最新地址扫描件" },
          { time: "季度", title: "核对证件有效期", text: "提前 90 天预警" },
          { time: "年度", title: "更新健康档案", text: "同步体检结论与变化" },
        ],
      },
    ],
  },
];

const pageNav = document.getElementById("pageNav");
const pageRoot = document.getElementById("pageRoot");
const pageCanvas = document.getElementById("pageCanvas");
const stageScaler = document.getElementById("stageScaler");
const stageTitle = document.getElementById("stageTitle");
const dimensionLabel = document.getElementById("dimensionLabel");
const dimensionHint = document.getElementById("dimensionHint");
const toast = document.getElementById("toast");
const previewAction = document.getElementById("previewAction");
const shuffleButton = document.getElementById("shuffleButton");
const deviceSwitch = document.getElementById("deviceSwitch");
const stageWrapper = document.querySelector(".stage-wrapper");

const state = {
  pageId: pages[0].id,
  device: "desktop",
};

function renderNav() {
  pageNav.innerHTML = "";
  pages.forEach((page) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `nav-button interactive${state.pageId === page.id ? " active" : ""}`;
    button.dataset.pageId = page.id;
    button.dataset.clickLabel = `切换到${page.title}`;
    button.innerHTML = `
      <span>${page.navLabel}</span>
      <small>${page.navMeta}</small>
    `;
    pageNav.appendChild(button);
  });
}

function createMetric(metric) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "metric-card interactive";
  card.dataset.clickLabel = `${metric.label}：${metric.value}`;
  card.innerHTML = `
    <span class="label">${metric.label}</span>
    <strong>${metric.value}</strong>
    <div class="meta">${metric.meta}</div>
  `;
  return card;
}

function createFocusMain(page) {
  const wrap = document.createElement("div");
  wrap.className = "focus-main-content";
  wrap.innerHTML = `
    <div class="focus-head">
      <div>
        <p class="eyebrow">Primary Focus</p>
        <h4>${page.focus.title}</h4>
        <div class="focus-summary">${page.focus.summary}</div>
      </div>
      <button class="primary-button interactive" type="button" data-click-label="${page.primaryAction}">
        ${page.primaryAction}
      </button>
    </div>
  `;

  const kpis = document.createElement("div");
  kpis.className = "focus-kpis";
  page.focus.kpis.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "focus-kpi interactive";
    card.dataset.clickLabel = `${item.label} ${item.value}`;
    card.innerHTML = `<span>${item.label}</span><strong>${item.value}</strong>`;
    kpis.appendChild(card);
  });
  wrap.appendChild(kpis);

  const list = document.createElement("div");
  list.className = "focus-list";
  page.focus.items.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "focus-item interactive";
    card.dataset.clickLabel = item.title;
    card.innerHTML = `
      <strong>${item.title}</strong>
      <div class="detail-text">${item.text}</div>
      <div class="item-meta">${item.meta}</div>
    `;
    list.appendChild(card);
  });
  wrap.appendChild(list);

  const meta = document.createElement("div");
  meta.className = "focus-meta";
  page.focus.meta.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "field-row interactive";
    card.dataset.clickLabel = item.label;
    card.innerHTML = `<span>${item.label}</span><strong>${item.value}</strong>`;
    meta.appendChild(card);
  });
  wrap.appendChild(meta);
  return wrap;
}

function createFocusQuick(page) {
  const wrap = document.createElement("div");
  wrap.className = "focus-quick-content";
  wrap.innerHTML = `
    <div class="section-header">
      <div>
        <h4>常用操作</h4>
        <div class="section-note">高频功能前置，避免用户绕到次级信息里。</div>
      </div>
    </div>
  `;

  const row = document.createElement("div");
  row.className = "chip-row";
  page.focus.quickActions.forEach((text, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip interactive${index === 0 ? " active" : ""}`;
    button.dataset.clickLabel = text;
    button.textContent = text;
    row.appendChild(button);
  });
  wrap.appendChild(row);
  return wrap;
}

function createFocusProgress(page) {
  const wrap = document.createElement("div");
  wrap.className = "focus-progress-content";
  wrap.innerHTML = `
    <div class="section-header">
      <div>
        <h4>信息层级</h4>
        <div class="section-note">让用户先完成动作，再理解状态，最后进入深层信息。</div>
      </div>
    </div>
  `;

  const list = document.createElement("div");
  list.className = "progress-list";
  page.focus.progress.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "progress-item interactive";
    card.dataset.clickLabel = `${item.label}`;
    card.innerHTML = `<span>${item.label}</span><strong>${item.value}</strong>`;
    list.appendChild(card);
  });
  wrap.appendChild(list);
  return wrap;
}

function createStatus(status) {
  return `<span class="status-pill ${status.tone || ""}">${status.text}</span>`;
}

function createListItem(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "list-item interactive";
  button.dataset.clickLabel = item.title;
  button.innerHTML = `
    <div class="item-top">
      <strong>${item.title}</strong>
      ${item.status ? createStatus(item.status) : ""}
    </div>
    <div class="card-copy">${item.subtitle || item.text || ""}</div>
    <div class="item-bottom">
      <span class="item-meta">${item.meta || ""}</span>
      ${item.action ? `<span class="mini-text">${item.action}</span>` : ""}
    </div>
  `;
  return button;
}

function createCompactItem(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "compact-item interactive";
  button.dataset.clickLabel = item.title;
  button.innerHTML = `
    <strong>${item.title}</strong>
    <div class="detail-text">${item.text}</div>
    <div class="item-meta">${item.meta || ""}</div>
  `;
  return button;
}

function createTimelineItem(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "timeline-item interactive";
  button.dataset.clickLabel = `${item.time} ${item.title}`;
  button.innerHTML = `
    <div class="timeline-time">${item.time}</div>
    <div class="stack-grid">
      <strong>${item.title}</strong>
      <div class="detail-text">${item.text}</div>
    </div>
  `;
  return button;
}

function createFieldItem(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "field-row interactive";
  button.dataset.clickLabel = `${item.label}`;
  button.innerHTML = `
    <span>${item.label}</span>
    <strong>${item.value}</strong>
  `;
  return button;
}

function createDateItem(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `date-chip interactive${item.active ? " active" : ""}`;
  button.dataset.clickLabel = `${item.day} ${item.date}`;
  button.innerHTML = `
    <span>${item.day}</span>
    <strong>${item.date}</strong>
  `;
  return button;
}

function createJournalItem(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "sub-card interactive";
  button.dataset.clickLabel = item.title;
  button.innerHTML = `
    <h5>${item.title}</h5>
    <div class="detail-text">${item.text}</div>
  `;
  return button;
}

function createMiniList(section) {
  const wrap = document.createElement("div");
  wrap.className = "stack-grid";
  section.items.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "sub-card interactive";
    card.dataset.clickLabel = item.title;
    card.innerHTML = `
      <strong>${item.title}</strong>
      <div class="mini-text">${item.meta}</div>
    `;
    wrap.appendChild(card);
  });
  return wrap;
}

function createMiniStack(section) {
  const wrap = document.createElement("div");
  wrap.className = "stack-grid";
  section.items.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "mini-card interactive";
    card.dataset.clickLabel = item.title;
    card.innerHTML = `
      <strong>${item.title}</strong>
      <div class="detail-text">${item.text}</div>
    `;
    wrap.appendChild(card);
  });
  return wrap;
}

function renderSectionContent(section) {
  switch (section.kind) {
    case "list": {
      const wrap = document.createElement("div");
      wrap.className = "list-grid";
      section.items.forEach((item) => wrap.appendChild(createListItem(item)));
      return wrap;
    }
    case "compact": {
      const wrap = document.createElement("div");
      wrap.className = "compact-grid";
      section.items.forEach((item) => wrap.appendChild(createCompactItem(item)));
      return wrap;
    }
    case "timeline": {
      const wrap = document.createElement("div");
      wrap.className = "timeline-list";
      section.items.forEach((item) => wrap.appendChild(createTimelineItem(item)));
      return wrap;
    }
    case "fields": {
      const wrap = document.createElement("div");
      wrap.className = "info-grid";
      section.items.forEach((item) => wrap.appendChild(createFieldItem(item)));
      return wrap;
    }
    case "calendar": {
      const wrap = document.createElement("div");
      wrap.className = "calendar-strip";
      section.items.forEach((item) => wrap.appendChild(createDateItem(item)));
      return wrap;
    }
    case "journal": {
      const wrap = document.createElement("div");
      wrap.className = "journal-grid";
      section.items.forEach((item) => wrap.appendChild(createJournalItem(item)));
      return wrap;
    }
    case "split": {
      const split = document.createElement("div");
      split.className = "section-split";
      [section.left, section.right].forEach((part) => {
        const card = document.createElement("div");
        card.className = "section-card";
        card.innerHTML = `<div class="section-header"><h4>${part.title}</h4></div>`;
        if (part.kind === "list-mini") {
          card.appendChild(createMiniList(part));
        }
        if (part.kind === "mini-stack") {
          card.appendChild(createMiniStack(part));
        }
        split.appendChild(card);
      });
      return split;
    }
    default:
      return document.createElement("div");
  }
}

function createSection(section) {
  const card = document.createElement("section");
  card.className = "section-card";

  const header = document.createElement("div");
  header.className = "section-header";
  header.innerHTML = `
    <div>
      <h4>${section.title}</h4>
      ${section.note ? `<div class="section-note">${section.note}</div>` : ""}
    </div>
    <button class="inline-button interactive" type="button" data-click-label="查看${section.title}">
      查看
    </button>
  `;
  card.appendChild(header);

  if (section.chips?.length) {
    const row = document.createElement("div");
    row.className = "chip-row";
    section.chips.forEach((chipText, index) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = `chip interactive${index === 0 ? " active" : ""}`;
      chip.dataset.clickLabel = `${section.title} / ${chipText}`;
      chip.textContent = chipText;
      row.appendChild(chip);
    });
    card.appendChild(row);
  }

  card.appendChild(renderSectionContent(section));
  return card;
}

function renderPage() {
  const page = pages.find((entry) => entry.id === state.pageId) || pages[0];
  stageTitle.textContent = page.title;
  pageRoot.innerHTML = "";

  const template = document.getElementById("pageTemplate");
  const fragment = template.content.cloneNode(true);

  fragment.querySelector('[data-field="heroTag"]').textContent = page.heroTag;
  fragment.querySelector('[data-field="title"]').textContent = page.title;
  fragment.querySelector('[data-field="description"]').textContent = page.description;

  const primaryButton = fragment.querySelector('[data-field="primaryAction"]');
  primaryButton.textContent = page.primaryAction;
  primaryButton.dataset.clickLabel = page.primaryAction;

  const secondaryButton = fragment.querySelector('[data-field="secondaryAction"]');
  secondaryButton.textContent = page.secondaryAction;
  secondaryButton.dataset.clickLabel = page.secondaryAction;

  fragment.querySelector('[data-field="focusMain"]').appendChild(createFocusMain(page));
  fragment.querySelector('[data-field="focusQuick"]').appendChild(createFocusQuick(page));
  fragment.querySelector('[data-field="focusProgress"]').appendChild(createFocusProgress(page));

  const metricGrid = fragment.querySelector('[data-field="metrics"]');
  page.metrics.forEach((metric) => metricGrid.appendChild(createMetric(metric)));

  const mainSections = fragment.querySelector('[data-field="mainSections"]');
  page.mainSections.forEach((section, index) => {
    const element = createSection(section);
    if (index === 0) {
      element.classList.add("emphasis");
    }
    mainSections.appendChild(element);
  });

  const sideSections = fragment.querySelector('[data-field="sideSections"]');
  page.sideSections.forEach((section) => sideSections.appendChild(createSection(section)));

  pageRoot.appendChild(fragment);
}

function applyDevice() {
  const preset = DEVICE_PRESETS[state.device];
  pageCanvas.classList.toggle("desktop", state.device === "desktop");
  pageCanvas.classList.toggle("mobile", state.device === "mobile");
  dimensionLabel.textContent = preset.label;
  dimensionHint.textContent = preset.hint;

  [...deviceSwitch.querySelectorAll(".mode-button")].forEach((button) => {
    button.classList.toggle("active", button.dataset.device === state.device);
  });

  requestAnimationFrame(updateScale);
}

function updateScale() {
  const preset = DEVICE_PRESETS[state.device];
  const wrapperRect = stageWrapper.getBoundingClientRect();
  const scaleX = (wrapperRect.width - 32) / preset.width;
  const scaleY = (wrapperRect.height - 32) / preset.height;
  const scale = Math.min(scaleX, scaleY, 1);
  stageScaler.style.transform = `scale(${scale})`;
}

function setToast(message) {
  toast.textContent = message;
}

function handleClickFeedback(target) {
  const label = target.dataset.clickLabel;
  if (!label) return;
  target.classList.toggle("is-active");
  setToast(`已点击：${label}`);
}

pageNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-page-id]");
  if (!button) return;
  state.pageId = button.dataset.pageId;
  renderNav();
  renderPage();
  setToast(`当前页面：${pages.find((item) => item.id === state.pageId).title}`);
});

deviceSwitch.addEventListener("click", (event) => {
  const button = event.target.closest("[data-device]");
  if (!button) return;
  state.device = button.dataset.device;
  applyDevice();
  setToast(`已切换到${state.device === "desktop" ? "桌面端" : "手机端"}预览`);
});

document.body.addEventListener("click", (event) => {
  const target = event.target.closest(".interactive");
  if (!target) return;
  if (target.matches(".nav-button, .mode-button")) return;
  handleClickFeedback(target);
});

previewAction.addEventListener("click", () => {
  const currentIndex = pages.findIndex((item) => item.id === state.pageId);
  const nextIndex = (currentIndex + 1) % pages.length;
  state.pageId = pages[nextIndex].id;
  renderNav();
  renderPage();
  setToast(`已跳转到${pages[nextIndex].title}`);
});

shuffleButton.addEventListener("click", () => {
  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  state.pageId = randomPage.id;
  renderNav();
  renderPage();
  setToast(`随机浏览：${randomPage.title}`);
});

window.addEventListener("resize", updateScale);

renderNav();
renderPage();
applyDevice();
