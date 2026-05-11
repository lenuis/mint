const DEVICE_PRESETS = {
  desktop: {
    width: 1440,
    height: 960,
    label: "1440 x 960",
    hint: "桌面端采用信息密度更高的分栏布局。",
  },
  mobile: {
    width: 430,
    height: 932,
    label: "430 x 932",
    hint: "手机端使用独立尺寸设定，强化单列滚动与触控区。",
  },
};

const pages = [
  {
    id: "tasks",
    navLabel: "任务",
    navMeta: "执行面板",
    heroTag: "Execution Desk",
    title: "任务页面",
    description:
      "聚合今日待办、执行队列、进度标签、委派记录与阻塞项。结构强调紧凑信息密度，适合桌面端高频管理。",
    primaryAction: "新建任务",
    secondaryAction: "查看看板",
    metrics: [
      { label: "今日任务", value: "26", meta: "已完成 14，延后 3" },
      { label: "高优先级", value: "08", meta: "2 项待确认负责人" },
      { label: "进行中", value: "11", meta: "平均专注时长 42 分钟" },
      { label: "阻塞项", value: "03", meta: "等待外部回复" },
    ],
    mainSections: [
      {
        title: "执行清单",
        note: "按优先级与上下文整理，点击条目可模拟选中反馈。",
        chips: ["全部", "今天", "高优先", "可委派", "等待中"],
        kind: "list",
        items: [
          {
            title: "完成本周家庭预算复盘",
            subtitle: "家庭财务 / 需整理餐饮、通勤、娱乐三类支出",
            status: { text: "今天必须", tone: "warning" },
            meta: "预计 45 分钟",
            action: "打开明细",
          },
          {
            title: "确认 5 月体检预约材料",
            subtitle: "个人事项 / 上传身份证、社保卡、过往检查报告",
            status: { text: "待准备", tone: "pink" },
            meta: "截止 18:30",
            action: "补齐资料",
          },
          {
            title: "整理项目页面视觉反馈",
            subtitle: "工作协同 / 统一记录布局、色彩、文案层级问题",
            status: { text: "进行中", tone: "success" },
            meta: "已处理 9/15 条",
            action: "继续标注",
          },
          {
            title: "给父母安排周末出行路线",
            subtitle: "家庭计划 / 高铁时间、酒店、打车接驳一并确认",
            status: { text: "待确认", tone: "warning" },
            meta: "涉及 3 个城市",
            action: "查看路线",
          },
        ],
      },
      {
        title: "专注区块",
        note: "把大任务拆成更小的行动块，便于在设计确认前验证交互结构。",
        kind: "compact",
        items: [
          { title: "09:00 - 10:00", text: "集中处理票据录入与标签归类", meta: "深度工作" },
          { title: "10:30 - 11:10", text: "同步 3 个待决事项并更新状态", meta: "沟通窗口" },
          { title: "14:00 - 15:00", text: "审查行程预算与酒店备选", meta: "出行准备" },
        ],
      },
      {
        title: "委派与跟进",
        note: "用于展示紧凑的卡片操作区。",
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
    description:
      "面向周计划、月计划和季度主题，强调目标拆分、阶段状态、关键里程碑与风险前置记录。",
    primaryAction: "创建计划",
    secondaryAction: "切换周期",
    metrics: [
      { label: "本周重点", value: "05", meta: "覆盖健康、理财、旅行、学习" },
      { label: "里程碑", value: "12", meta: "本月已完成 7 个" },
      { label: "延后节点", value: "02", meta: "集中在资料准备环节" },
      { label: "计划完成率", value: "68%", meta: "较上周 +9%" },
    ],
    mainSections: [
      {
        title: "阶段规划",
        note: "用紧凑的阶段卡展示策略目标。",
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
        note: "将抽象目标拆成行动、资源、风险与完成标记。",
        kind: "list",
        items: [
          {
            title: "5 月个人效率体系更新",
            subtitle: "动作：统一任务标签、模板、晨晚复盘格式",
            status: { text: "结构完成", tone: "success" },
            meta: "剩余：移动端版式验证",
            action: "展开方案",
          },
          {
            title: "家庭旅行总表",
            subtitle: "动作：确认预算边界、备选路线与老人休息节奏",
            status: { text: "待比价", tone: "warning" },
            meta: "资源：酒店 6 家 / 车次 9 个",
            action: "查看节点",
          },
          {
            title: "年度健康指标追踪",
            subtitle: "动作：体重、睡眠、体检、运动频率统一归档",
            status: { text: "已开档", tone: "pink" },
            meta: "风险：连续性不足",
            action: "录入计划",
          },
          {
            title: "阅读与学习计划",
            subtitle: "动作：划分主题书单、每周阅读时段、笔记产出模板",
            status: { text: "准备中", tone: "warning" },
            meta: "首批书单 8 本",
            action: "设置节奏",
          },
        ],
      },
      {
        title: "计划回顾",
        note: "用更细致的文本说明验证页面密度。",
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
    description:
      "展示日常支出、分类预算、账户余额、固定账单与收支记录。侧重高密度数字信息与快速筛选的样板样式。",
    primaryAction: "记录支出",
    secondaryAction: "导出报表",
    metrics: [
      { label: "本月支出", value: "¥8,420", meta: "预算使用 63%" },
      { label: "本月收入", value: "¥14,800", meta: "含兼职与报销" },
      { label: "固定账单", value: "06", meta: "已支付 4 项" },
      { label: "储蓄率", value: "43%", meta: "目标 40% 已达成" },
    ],
    mainSections: [
      {
        title: "最近流水",
        note: "按时间与类别压缩呈现，方便验证卡片间距。",
        chips: ["全部", "餐饮", "通勤", "居家", "娱乐", "医疗"],
        kind: "list",
        items: [
          {
            title: "午餐与咖啡",
            subtitle: "餐饮消费 / 公司附近简餐 + 手冲咖啡",
            status: { text: "已记账", tone: "success" },
            meta: "¥58.00 / 12:18",
            action: "查看票据",
          },
          {
            title: "高铁候补补差",
            subtitle: "行程支出 / 城际出行改签差价",
            status: { text: "待分类", tone: "warning" },
            meta: "¥124.50 / 09:42",
            action: "调整分类",
          },
          {
            title: "超市采购",
            subtitle: "居家用品 / 日用品、清洁、早餐储备",
            status: { text: "预算内", tone: "success" },
            meta: "¥286.90 / 昨日 20:10",
            action: "拆分条目",
          },
          {
            title: "体检预约定金",
            subtitle: "医疗健康 / 预约金可在到院后抵扣",
            status: { text: "待确认", tone: "pink" },
            meta: "¥300.00 / 昨日 16:20",
            action: "补备注",
          },
        ],
      },
      {
        title: "预算分布",
        note: "用紧凑区块展示不同分类的余量。",
        kind: "compact",
        items: [
          { title: "餐饮", text: "已用 ¥1,680 / 上限 ¥2,400", meta: "余量 30%" },
          { title: "通勤", text: "已用 ¥420 / 上限 ¥700", meta: "余量 40%" },
          { title: "居家", text: "已用 ¥1,120 / 上限 ¥1,600", meta: "余量 30%" },
        ],
      },
      {
        title: "账户与账单",
        note: "这里使用双栏卡片增强样板层次。",
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
    description:
      "聚合日期、交通、住宿、天气、行前准备和每日动线，用于确认出行信息在桌面端与手机端的不同呈现方式。",
    primaryAction: "添加行程",
    secondaryAction: "切换地图",
    metrics: [
      { label: "待出发", value: "04", meta: "最近一次 6 天后" },
      { label: "已订项目", value: "11", meta: "交通 5 / 住宿 3 / 活动 3" },
      { label: "预算占用", value: "72%", meta: "仍可补充体验项目" },
      { label: "待准备", value: "09", meta: "证件与衣物优先" },
    ],
    mainSections: [
      {
        title: "行程总览",
        note: "用于验证复杂信息卡在毛玻璃样式下的识别度。",
        chips: ["本周", "本月", "家庭旅行", "商务出差"],
        kind: "list",
        items: [
          {
            title: "苏杭 3 日家庭短途",
            subtitle: "5 月 18 日 - 5 月 20 日 / 两位老人同行，节奏偏轻松",
            status: { text: "已预订", tone: "success" },
            meta: "预算 ¥4,800 / 当前已花 ¥3,360",
            action: "查看明细",
          },
          {
            title: "深圳两日工作行",
            subtitle: "6 月 02 日 - 6 月 03 日 / 客户拜访与现场沟通",
            status: { text: "待出票", tone: "warning" },
            meta: "酒店待最后确认",
            action: "补充预订",
          },
          {
            title: "青岛海边休整计划",
            subtitle: "7 月上旬 / 需要平衡预算、天气与假期时长",
            status: { text: "规划中", tone: "pink" },
            meta: "备选酒店 6 家",
            action: "比较方案",
          },
        ],
      },
      {
        title: "每日安排",
        note: "时间轴交互用于模拟可展开日程区。",
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
        note: "用紧凑卡组展示出发前检查项。",
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
    description:
      "面向随手记录、主题笔记、备忘清单和灵感归档，突出高密度文本块在毛玻璃环境中的阅读节奏。",
    primaryAction: "新增笔记",
    secondaryAction: "筛选标签",
    metrics: [
      { label: "今日速记", value: "17", meta: "已整理 9 条" },
      { label: "主题笔记", value: "42", meta: "工作 / 生活 / 阅读 / 健康" },
      { label: "待归档", value: "06", meta: "主要是语音转写" },
      { label: "收藏片段", value: "28", meta: "本周新增 5 条" },
    ],
    mainSections: [
      {
        title: "最新备忘",
        note: "列表样式强调信息密度与点击反馈。",
        chips: ["全部", "生活", "工作", "阅读", "灵感", "提醒"],
        kind: "list",
        items: [
          {
            title: "周五记得带旧体检报告",
            subtitle: "医疗提醒 / 报告放在书桌左侧抽屉文件袋",
            status: { text: "重要", tone: "warning" },
            meta: "创建于 08:12",
            action: "标记已办",
          },
          {
            title: "重新整理租房合同扫描件",
            subtitle: "家庭资料 / 需要重命名并归档到个人信息库",
            status: { text: "待归档", tone: "pink" },
            meta: "附件 3 个",
            action: "打开文件",
          },
          {
            title: "阅读摘录：关于节奏感的设计思考",
            subtitle: "阅读笔记 / 关注留白、密度、次级信息的排序",
            status: { text: "已整理", tone: "success" },
            meta: "可转入长期笔记",
            action: "继续编辑",
          },
          {
            title: "给爸妈准备出行说明卡",
            subtitle: "旅行备忘 / 酒店地址、返程时间、联系方式",
            status: { text: "待排版", tone: "warning" },
            meta: "建议打印 A6 小卡",
            action: "生成草稿",
          },
        ],
      },
      {
        title: "主题卡片",
        note: "卡组用来模拟专题笔记入口。",
        kind: "journal",
        items: [
          { title: "个人效率", text: "沉淀晨间启动清单、晚间复盘模版、周期计划复盘字段，以及任务标记方式。" },
          { title: "出行经验", text: "记录老人同行注意点、酒店筛选偏好、城市内交通耗时与节奏安排。" },
        ],
      },
      {
        title: "灵感片段",
        note: "更短更轻的卡片用于测试紧凑栅格。",
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
    description:
      "聚合证件、联系人、偏好、常用地址、健康信息和账户摘要，作为未来功能联动的核心资料样板页。",
    primaryAction: "编辑资料",
    secondaryAction: "查看权限",
    metrics: [
      { label: "资料模块", value: "18", meta: "身份证件、地址、联系人等" },
      { label: "待补字段", value: "04", meta: "紧急联系人和保险资料优先" },
      { label: "常用地址", value: "05", meta: "家 / 公司 / 医院 / 父母家 / 高铁站" },
      { label: "授权场景", value: "07", meta: "行程、记账、提醒可复用" },
    ],
    mainSections: [
      {
        title: "基础资料",
        note: "未来会为其他页面提供统一引用，目前先保留信息结构和点击样板。",
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
        note: "用档案卡片测试更密集的资料展示。",
        kind: "compact",
        items: [
          { title: "母亲 / 紧急联系人", text: "138 1111 5501 / 常住杭州", meta: "优先级 A" },
          { title: "家庭医生", text: "021-6000 8899 / 周四下午可约", meta: "健康档案" },
          { title: "常用酒店管家", text: "400-820-0000 / 支持老人友好服务", meta: "旅行资源" },
        ],
      },
      {
        title: "偏好与授权",
        note: "模拟未来功能联动的设置区域。",
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

  const metricGrid = fragment.querySelector('[data-field="metrics"]');
  page.metrics.forEach((metric) => metricGrid.appendChild(createMetric(metric)));

  const mainSections = fragment.querySelector('[data-field="mainSections"]');
  page.mainSections.forEach((section) => mainSections.appendChild(createSection(section)));

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
