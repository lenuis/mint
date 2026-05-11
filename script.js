const DEVICE_PRESETS = {
  desktop: {
    width: 1440,
    height: 960,
    label: "1440 x 960",
    hint: "桌面端 / 紧凑双栏",
  },
  mobile: {
    width: 430,
    height: 932,
    label: "430 x 932",
    hint: "手机端 / 紧凑单列",
  },
};

const pages = [
  {
    id: "tasks",
    navLabel: "任务",
    navMeta: "今日",
    title: "任务",
    primaryAction: "新建任务",
    secondaryAction: "开始专注",
    priority: {
      title: "今天",
      cards: [
        { title: "完成本周家庭预算复盘", meta: "45 分钟", badge: "今日必须" },
        { title: "确认 5 月体检预约材料", meta: "18:30 截止", badge: "待准备" },
        { title: "整理项目页面视觉反馈", meta: "剩余 6 条", badge: "进行中" },
      ],
      actions: ["一键开始专注", "快速加任务", "批量调优先级", "复制今日模板"],
      stats: [
        { label: "今日任务", value: "26" },
        { label: "进行中", value: "11" },
        { label: "阻塞", value: "3" },
        { label: "已完成", value: "14" },
      ],
    },
    metrics: [
      { label: "高优先", value: "08", meta: "2 项待确认" },
      { label: "待委派", value: "04", meta: "下午处理" },
      { label: "专注时长", value: "42m", meta: "平均" },
      { label: "延期", value: "03", meta: "需重排" },
    ],
    mainSections: [
      {
        title: "执行清单",
        chips: ["全部", "今天", "高优先", "等待中"],
        kind: "list",
        items: [
          { title: "完成本周家庭预算复盘", subtitle: "餐饮、通勤、娱乐三类支出", status: { text: "今天必须", tone: "warning" }, meta: "预计 45 分钟", action: "打开" },
          { title: "确认 5 月体检预约材料", subtitle: "身份证、社保卡、过往检查报告", status: { text: "待准备", tone: "pink" }, meta: "18:30", action: "补齐" },
          { title: "整理项目页面视觉反馈", subtitle: "布局、色彩、文案层级问题", status: { text: "进行中", tone: "success" }, meta: "9 / 15", action: "继续" },
          { title: "给父母安排周末出行路线", subtitle: "高铁、酒店、接驳", status: { text: "待确认", tone: "warning" }, meta: "3 个城市", action: "查看" },
        ],
      },
      {
        title: "专注区块",
        kind: "compact",
        items: [
          { title: "09:00 - 10:00", text: "票据录入与标签归类", meta: "深度工作" },
          { title: "10:30 - 11:10", text: "同步待决事项", meta: "沟通窗口" },
          { title: "14:00 - 15:00", text: "审查行程预算与酒店备选", meta: "出行准备" },
        ],
      },
      {
        title: "委派与跟进",
        kind: "split",
        left: {
          title: "待跟进",
          kind: "list-mini",
          items: [
            { title: "物业缴费回执", meta: "等待邮件回传" },
            { title: "宠物疫苗记录", meta: "今晚更新" },
            { title: "旅行保险比价", meta: "对比 4 家方案" },
          ],
        },
        right: {
          title: "快速动作",
          kind: "mini-stack",
          items: [
            { title: "批量改优先级", text: "4 个家庭事项" },
            { title: "复制今日模板", text: "复用常见结构" },
            { title: "生成提醒清单", text: "同步到手机端" },
          ],
        },
      },
    ],
    sideSections: [
      {
        title: "时间轴",
        kind: "timeline",
        items: [
          { time: "08:40", title: "晨间收件整理", text: "归档 12 条通知" },
          { time: "11:20", title: "午前核对", text: "检查付款状态" },
          { time: "16:10", title: "出行确认", text: "对比天气与换乘" },
          { time: "20:00", title: "晚间复盘", text: "记录完成率" },
        ],
      },
      {
        title: "阻塞提醒",
        kind: "fields",
        items: [
          { label: "等待对象", value: "保险客服 / 医院前台 / 物业财务" },
          { label: "最晚处理", value: "21:30" },
          { label: "建议动作", value: "先做无需外部输入的事项" },
        ],
      },
    ],
  },
  {
    id: "plans",
    navLabel: "计划",
    navMeta: "本周",
    title: "计划",
    primaryAction: "创建计划",
    secondaryAction: "切换周期",
    priority: {
      title: "本周重点",
      cards: [
        { title: "5 月个人效率体系更新", meta: "剩余移动端版式验证", badge: "结构完成" },
        { title: "家庭旅行总表", meta: "酒店 6 家 / 车次 9 个", badge: "待比价" },
        { title: "年度健康指标追踪", meta: "体检、睡眠、运动", badge: "已开档" },
      ],
      actions: ["新增里程碑", "复制月模板", "打开本周", "进入回顾"],
      stats: [
        { label: "本周重点", value: "5" },
        { label: "里程碑", value: "12" },
        { label: "延后", value: "2" },
        { label: "完成率", value: "68%" },
      ],
    },
    metrics: [
      { label: "健康", value: "02", meta: "持续推进" },
      { label: "理财", value: "01", meta: "刚启动" },
      { label: "出行", value: "03", meta: "待锁定" },
      { label: "阅读", value: "08", meta: "首批书单" },
    ],
    mainSections: [
      {
        title: "阶段规划",
        chips: ["本周", "本月", "季度", "年度"],
        kind: "compact",
        items: [
          { title: "健康管理", text: "体检预约、睡眠记录、步行目标", meta: "第 2 阶段" },
          { title: "理财整理", text: "补录 4 月支出，建立 5 月预算", meta: "第 1 阶段" },
          { title: "夏季出行", text: "城市、预算、请假窗口、住宿标准", meta: "第 3 阶段" },
        ],
      },
      {
        title: "目标拆分",
        kind: "list",
        items: [
          { title: "5 月个人效率体系更新", subtitle: "统一任务标签、模板、晨晚复盘格式", status: { text: "结构完成", tone: "success" }, meta: "剩余版式验证", action: "展开" },
          { title: "家庭旅行总表", subtitle: "预算边界、备选路线、老人休息节奏", status: { text: "待比价", tone: "warning" }, meta: "酒店 6 家", action: "查看" },
          { title: "年度健康指标追踪", subtitle: "体重、睡眠、体检、运动频率", status: { text: "已开档", tone: "pink" }, meta: "连续性不足", action: "录入" },
          { title: "阅读与学习计划", subtitle: "主题书单、每周阅读时段、笔记模板", status: { text: "准备中", tone: "warning" }, meta: "首批 8 本", action: "设置" },
        ],
      },
      {
        title: "计划回顾",
        kind: "journal",
        items: [
          { title: "本周观察", text: "临时事务插入较多，周三后开始挤压原定节奏。" },
          { title: "下周安排", text: "健康、财务、行程拆成固定维护时段。" },
        ],
      },
    ],
    sideSections: [
      {
        title: "月历",
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
        title: "参数",
        kind: "fields",
        items: [
          { label: "主周期", value: "按周统筹" },
          { label: "复盘时间", value: "21:40 / 周日 19:00" },
          { label: "风险阈值", value: "连续 2 天未推进" },
        ],
      },
    ],
  },
  {
    id: "finance",
    navLabel: "记账",
    navMeta: "流水",
    title: "记账",
    primaryAction: "记录支出",
    secondaryAction: "快速分类",
    priority: {
      title: "最近要处理",
      cards: [
        { title: "高铁候补补差", meta: "¥124.50 / 09:42", badge: "待分类" },
        { title: "午餐与咖啡", meta: "¥58.00 / 12:18", badge: "已记账" },
        { title: "体检预约定金", meta: "¥300.00 / 昨日 16:20", badge: "待确认" },
      ],
      actions: ["记录支出", "扫描票据", "快速分类", "查看本周"],
      stats: [
        { label: "本月支出", value: "¥8,420" },
        { label: "本月收入", value: "¥14,800" },
        { label: "固定账单", value: "06" },
        { label: "储蓄率", value: "43%" },
      ],
    },
    metrics: [
      { label: "餐饮", value: "¥1,680", meta: "余量 30%" },
      { label: "通勤", value: "¥420", meta: "余量 40%" },
      { label: "居家", value: "¥1,120", meta: "余量 30%" },
      { label: "待补", value: "02", meta: "报销流水" },
    ],
    mainSections: [
      {
        title: "最近流水",
        chips: ["全部", "餐饮", "通勤", "居家", "医疗"],
        kind: "list",
        items: [
          { title: "午餐与咖啡", subtitle: "公司附近简餐 + 手冲咖啡", status: { text: "已记账", tone: "success" }, meta: "¥58.00 / 12:18", action: "票据" },
          { title: "高铁候补补差", subtitle: "城际出行改签差价", status: { text: "待分类", tone: "warning" }, meta: "¥124.50 / 09:42", action: "分类" },
          { title: "超市采购", subtitle: "日用品、清洁、早餐储备", status: { text: "预算内", tone: "success" }, meta: "¥286.90 / 昨日", action: "拆分" },
          { title: "体检预约定金", subtitle: "预约金到院后抵扣", status: { text: "待确认", tone: "pink" }, meta: "¥300.00 / 昨日", action: "备注" },
        ],
      },
      {
        title: "预算分布",
        kind: "compact",
        items: [
          { title: "餐饮", text: "已用 ¥1,680 / 上限 ¥2,400", meta: "余量 30%" },
          { title: "通勤", text: "已用 ¥420 / 上限 ¥700", meta: "余量 40%" },
          { title: "居家", text: "已用 ¥1,120 / 上限 ¥1,600", meta: "余量 30%" },
        ],
      },
      {
        title: "账户与账单",
        kind: "split",
        left: {
          title: "账户",
          kind: "list-mini",
          items: [
            { title: "工资卡", meta: "余额 ¥26,840" },
            { title: "旅行账户", meta: "余额 ¥6,200" },
            { title: "日常零钱", meta: "余额 ¥1,360" },
          ],
        },
        right: {
          title: "即将到期",
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
        title: "提醒",
        kind: "fields",
        items: [
          { label: "本周异常", value: "通勤费用偏高" },
          { label: "储蓄动作", value: "可转入旅行账户 ¥800" },
          { label: "待补记录", value: "报销流水 2 笔" },
        ],
      },
      {
        title: "固定支出",
        kind: "timeline",
        items: [
          { time: "05/10", title: "房租扣款", text: "确认余额" },
          { time: "05/12", title: "宽带续费", text: "评估年度套餐" },
          { time: "05/15", title: "健身卡分期", text: "更新本月余量" },
          { time: "05/20", title: "保险续费", text: "检查扣款账户" },
        ],
      },
    ],
  },
  {
    id: "travel",
    navLabel: "行程",
    navMeta: "最近",
    title: "行程",
    primaryAction: "添加行程",
    secondaryAction: "查看今日动线",
    priority: {
      title: "最近行程",
      cards: [
        { title: "苏杭 3 日家庭短途", meta: "5 月 18 日 - 5 月 20 日", badge: "已预订" },
        { title: "深圳两日工作行", meta: "6 月 02 日 - 6 月 03 日", badge: "待出票" },
        { title: "青岛海边休整计划", meta: "7 月上旬", badge: "规划中" },
      ],
      actions: ["新增行程", "补交通", "加酒店", "打开清单"],
      stats: [
        { label: "待出发", value: "04" },
        { label: "已订项目", value: "11" },
        { label: "预算占用", value: "72%" },
        { label: "待准备", value: "09" },
      ],
    },
    metrics: [
      { label: "交通", value: "05", meta: "已订" },
      { label: "住宿", value: "03", meta: "已订" },
      { label: "活动", value: "03", meta: "已订" },
      { label: "清单", value: "09", meta: "待准备" },
    ],
    mainSections: [
      {
        title: "行程总览",
        chips: ["本周", "本月", "家庭旅行", "商务出差"],
        kind: "list",
        items: [
          { title: "苏杭 3 日家庭短途", subtitle: "两位老人同行，节奏偏轻松", status: { text: "已预订", tone: "success" }, meta: "预算 ¥4,800 / 已花 ¥3,360", action: "查看" },
          { title: "深圳两日工作行", subtitle: "客户拜访与现场沟通", status: { text: "待出票", tone: "warning" }, meta: "酒店待确认", action: "预订" },
          { title: "青岛海边休整计划", subtitle: "平衡预算、天气与假期时长", status: { text: "规划中", tone: "pink" }, meta: "备选酒店 6 家", action: "比较" },
        ],
      },
      {
        title: "每日安排",
        kind: "timeline",
        items: [
          { time: "08:00", title: "酒店早餐与退房", text: "提前整理行李" },
          { time: "10:30", title: "西湖游船", text: "预留步行缓冲" },
          { time: "13:20", title: "午餐预订", text: "清淡、少排队" },
          { time: "16:40", title: "返程高铁", text: "检查证件与药品" },
        ],
      },
      {
        title: "准备清单",
        kind: "compact",
        items: [
          { title: "证件", text: "身份证、医保卡、酒店确认单、保险截图", meta: "还差打印 1 份" },
          { title: "衣物", text: "轻薄外套、替换上衣、舒适鞋、雨伞", meta: "按天气调整" },
          { title: "药品", text: "晕车药、常用药、创可贴、肠胃药", meta: "需补购 2 项" },
        ],
      },
    ],
    sideSections: [
      {
        title: "日期",
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
        title: "备注",
        kind: "fields",
        items: [
          { label: "天气", value: "多云转小雨，18-26°C" },
          { label: "交通提醒", value: "高铁站到酒店约 28 分钟" },
          { label: "照顾重点", value: "中段休息、少排队" },
        ],
      },
    ],
  },
  {
    id: "notes",
    navLabel: "笔记备忘",
    navMeta: "收纳",
    title: "笔记备忘",
    primaryAction: "新增笔记",
    secondaryAction: "快速备忘",
    priority: {
      title: "最近需要处理",
      cards: [
        { title: "周五记得带旧体检报告", meta: "创建于 08:12", badge: "重要" },
        { title: "重新整理租房合同扫描件", meta: "附件 3 个", badge: "待归档" },
        { title: "给爸妈准备出行说明卡", meta: "建议打印 A6 小卡", badge: "待排版" },
      ],
      actions: ["文字速记", "语音转写", "加提醒", "打开待归档"],
      stats: [
        { label: "今日速记", value: "17" },
        { label: "主题笔记", value: "42" },
        { label: "待归档", value: "06" },
        { label: "收藏片段", value: "28" },
      ],
    },
    metrics: [
      { label: "生活", value: "12", meta: "最近常用" },
      { label: "工作", value: "09", meta: "持续更新" },
      { label: "阅读", value: "11", meta: "摘录为主" },
      { label: "提醒", value: "03", meta: "本周重要" },
    ],
    mainSections: [
      {
        title: "最新备忘",
        chips: ["全部", "生活", "工作", "阅读", "提醒"],
        kind: "list",
        items: [
          { title: "周五记得带旧体检报告", subtitle: "报告放在书桌左侧抽屉文件袋", status: { text: "重要", tone: "warning" }, meta: "08:12", action: "完成" },
          { title: "重新整理租房合同扫描件", subtitle: "重命名并归档到个人信息库", status: { text: "待归档", tone: "pink" }, meta: "附件 3 个", action: "打开" },
          { title: "阅读摘录：关于节奏感的设计思考", subtitle: "留白、密度、次级信息排序", status: { text: "已整理", tone: "success" }, meta: "可转长期笔记", action: "编辑" },
          { title: "给爸妈准备出行说明卡", subtitle: "酒店地址、返程时间、联系方式", status: { text: "待排版", tone: "warning" }, meta: "A6 小卡", action: "草稿" },
        ],
      },
      {
        title: "主题卡片",
        kind: "journal",
        items: [
          { title: "个人效率", text: "晨间启动清单、晚间复盘模板、周期复盘字段。" },
          { title: "出行经验", text: "老人同行注意点、酒店筛选偏好、城市内交通耗时。" },
        ],
      },
      {
        title: "灵感片段",
        kind: "compact",
        items: [
          { title: "布局方向", text: "桌面端双栏，手机端重排层级。", meta: "UI" },
          { title: "备忘入口", text: "语音、文字、截图三种入口。", meta: "功能草案" },
          { title: "标签策略", text: "同一条备忘可挂多个场景标签。", meta: "信息架构" },
        ],
      },
    ],
    sideSections: [
      {
        title: "整理规则",
        kind: "fields",
        items: [
          { label: "收纳节奏", value: "每天两次轻整理" },
          { label: "命名约定", value: "日期 + 场景 + 主体" },
          { label: "升级条件", value: "连续 2 次引用" },
        ],
      },
      {
        title: "提醒时间",
        kind: "timeline",
        items: [
          { time: "09:10", title: "开会前整理速记", text: "避免零散堆积" },
          { time: "13:30", title: "午间摘录归档", text: "转成主题笔记" },
          { time: "18:50", title: "补全出行说明", text: "完善地址与电话" },
          { time: "21:20", title: "晚间总复盘", text: "清空临时备忘箱" },
        ],
      },
    ],
  },
  {
    id: "profile",
    navLabel: "个人信息",
    navMeta: "资料",
    title: "个人信息",
    primaryAction: "编辑资料",
    secondaryAction: "打开联系人",
    priority: {
      title: "常用资料",
      cards: [
        { title: "林知远 / 138 0000 2468", meta: "lin.zhiyuan@example.com", badge: "基础信息" },
        { title: "上海市徐汇区天钥桥路 218 号 1203", meta: "当前住址", badge: "常用地址" },
        { title: "母亲 / 紧急联系人", meta: "138 1111 5501", badge: "优先级 A" },
      ],
      actions: ["编辑基础资料", "加联系人", "改提醒偏好", "查看授权"],
      stats: [
        { label: "资料模块", value: "18" },
        { label: "待补字段", value: "04" },
        { label: "常用地址", value: "05" },
        { label: "授权场景", value: "07" },
      ],
    },
    metrics: [
      { label: "联系人", value: "03", meta: "常用" },
      { label: "证件", value: "03", meta: "已录入" },
      { label: "偏好", value: "03", meta: "可复用" },
      { label: "保险", value: "01", meta: "待补充" },
    ],
    mainSections: [
      {
        title: "基础资料",
        kind: "fields",
        items: [
          { label: "姓名", value: "林知远" },
          { label: "出生日期", value: "1994-08-16" },
          { label: "手机号", value: "138 0000 2468" },
          { label: "邮箱", value: "lin.zhiyuan@example.com" },
          { label: "居住地址", value: "上海市徐汇区天钥桥路 218 号 1203" },
          { label: "证件状态", value: "身份证、驾驶证、医保卡已录入" },
        ],
      },
      {
        title: "常用联系人",
        kind: "compact",
        items: [
          { title: "母亲 / 紧急联系人", text: "138 1111 5501 / 常住杭州", meta: "优先级 A" },
          { title: "家庭医生", text: "021-6000 8899 / 周四下午可约", meta: "健康档案" },
          { title: "常用酒店管家", text: "400-820-0000 / 老人友好服务", meta: "旅行资源" },
        ],
      },
      {
        title: "偏好与授权",
        kind: "split",
        left: {
          title: "生活偏好",
          kind: "list-mini",
          items: [
            { title: "饮食偏好", meta: "少辣、清淡、乳糖不耐受" },
            { title: "出行偏好", meta: "高铁优先，酒店靠近地铁" },
            { title: "提醒偏好", meta: "提前 1 天 + 当天二次提醒" },
          ],
        },
        right: {
          title: "已授权模块",
          kind: "mini-stack",
          items: [
            { title: "行程页读取联系人", text: "复用紧急联系人与常用地址" },
            { title: "记账页读取账户标签", text: "仅展示，不自动修改" },
            { title: "任务页读取提醒偏好", text: "计算提醒节奏" },
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
          { label: "慢性记录", value: "需持续跟踪睡眠" },
        ],
      },
      {
        title: "资料维护",
        kind: "timeline",
        items: [
          { time: "本周", title: "补充保险信息", text: "上传保单与电话" },
          { time: "本月", title: "更新居住证明", text: "替换扫描件" },
          { time: "季度", title: "核对证件有效期", text: "提前 90 天预警" },
          { time: "年度", title: "更新健康档案", text: "同步体检结论" },
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
    button.innerHTML = `<span>${page.navLabel}</span><small>${page.navMeta}</small>`;
    pageNav.appendChild(button);
  });
}

function createStatus(status) {
  return `<span class="status-pill ${status.tone || ""}">${status.text}</span>`;
}

function createMetric(metric) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "metric-card interactive";
  card.dataset.clickLabel = `${metric.label} ${metric.value}`;
  card.innerHTML = `<span class="label">${metric.label}</span><strong>${metric.value}</strong><div class="meta">${metric.meta}</div>`;
  return card;
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
      ${item.action ? `<span class="item-meta">${item.action}</span>` : ""}
    </div>
  `;
  return button;
}

function createCompactItem(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "compact-item interactive";
  button.dataset.clickLabel = item.title;
  button.innerHTML = `<strong>${item.title}</strong><div class="detail-text">${item.text}</div><div class="item-meta">${item.meta || ""}</div>`;
  return button;
}

function createTimelineItem(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "timeline-item interactive";
  button.dataset.clickLabel = `${item.time} ${item.title}`;
  button.innerHTML = `<div class="timeline-time">${item.time}</div><div class="stack-grid"><strong>${item.title}</strong><div class="detail-text">${item.text}</div></div>`;
  return button;
}

function createFieldItem(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "field-row interactive";
  button.dataset.clickLabel = item.label;
  button.innerHTML = `<span>${item.label}</span><strong>${item.value}</strong>`;
  return button;
}

function createDateItem(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `date-chip interactive${item.active ? " active" : ""}`;
  button.dataset.clickLabel = `${item.day} ${item.date}`;
  button.innerHTML = `<span>${item.day}</span><strong>${item.date}</strong>`;
  return button;
}

function createJournalItem(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "sub-card interactive";
  button.dataset.clickLabel = item.title;
  button.innerHTML = `<strong>${item.title}</strong><div class="detail-text">${item.text}</div>`;
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
    card.innerHTML = `<strong>${item.title}</strong><div class="item-meta">${item.meta}</div>`;
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
    card.innerHTML = `<strong>${item.title}</strong><div class="detail-text">${item.text}</div>`;
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
        card.appendChild(part.kind === "list-mini" ? createMiniList(part) : createMiniStack(part));
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
  header.innerHTML = `<h4>${section.title}</h4>`;
  card.appendChild(header);

  if (section.chips?.length) {
    const row = document.createElement("div");
    row.className = "chip-row";
    section.chips.forEach((chipText, index) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = `chip interactive${index === 0 ? " active" : ""}`;
      chip.dataset.clickLabel = `${section.title} ${chipText}`;
      chip.textContent = chipText;
      row.appendChild(chip);
    });
    card.appendChild(row);
  }

  card.appendChild(renderSectionContent(section));
  return card;
}

function createPriorityMain(page) {
  const wrap = document.createElement("div");
  wrap.innerHTML = `<div class="priority-head"><h4>${page.priority.title}</h4><button class="primary-button interactive" type="button" data-click-label="${page.primaryAction}">${page.primaryAction}</button></div>`;

  const list = document.createElement("div");
  list.className = "priority-list";
  page.priority.cards.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "priority-card interactive";
    card.dataset.clickLabel = item.title;
    card.innerHTML = `
      <div class="item-top">
        <strong>${item.title}</strong>
        <span class="status-pill">${item.badge}</span>
      </div>
      <div class="item-bottom">
        <span class="item-meta">${item.meta}</span>
      </div>
    `;
    list.appendChild(card);
  });
  wrap.appendChild(list);

  return wrap;
}

function createPriorityActions(page) {
  const wrap = document.createElement("div");
  wrap.innerHTML = `<div class="section-header"><h4>常用操作</h4></div>`;
  const row = document.createElement("div");
  row.className = "priority-actions-row";
  page.priority.actions.forEach((text, index) => {
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

function createPriorityStats(page) {
  const wrap = document.createElement("div");
  wrap.innerHTML = `<div class="section-header"><h4>概览</h4></div>`;
  const grid = document.createElement("div");
  grid.className = "priority-stats-grid";
  page.priority.stats.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "priority-stat interactive";
    card.dataset.clickLabel = `${item.label} ${item.value}`;
    card.innerHTML = `<span>${item.label}</span><strong>${item.value}</strong>`;
    grid.appendChild(card);
  });
  wrap.appendChild(grid);
  return wrap;
}

function renderPage() {
  const page = pages.find((entry) => entry.id === state.pageId) || pages[0];
  stageTitle.textContent = page.title;
  pageRoot.innerHTML = "";

  const template = document.getElementById("pageTemplate");
  const fragment = template.content.cloneNode(true);

  fragment.querySelector('[data-field="title"]').textContent = page.title;

  const primaryButton = fragment.querySelector('[data-field="primaryAction"]');
  primaryButton.textContent = page.primaryAction;
  primaryButton.dataset.clickLabel = page.primaryAction;

  const secondaryButton = fragment.querySelector('[data-field="secondaryAction"]');
  secondaryButton.textContent = page.secondaryAction;
  secondaryButton.dataset.clickLabel = page.secondaryAction;

  fragment.querySelector('[data-field="focusMain"]').appendChild(createPriorityMain(page));
  fragment.querySelector('[data-field="focusQuick"]').appendChild(createPriorityActions(page));
  fragment.querySelector('[data-field="focusProgress"]').appendChild(createPriorityStats(page));

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
  const scaleX = (wrapperRect.width - 20) / preset.width;
  const scaleY = (wrapperRect.height - 20) / preset.height;
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
  setToast(label);
}

pageNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-page-id]");
  if (!button) return;
  state.pageId = button.dataset.pageId;
  renderNav();
  renderPage();
  setToast(pages.find((item) => item.id === state.pageId).title);
});

deviceSwitch.addEventListener("click", (event) => {
  const button = event.target.closest("[data-device]");
  if (!button) return;
  state.device = button.dataset.device;
  applyDevice();
  setToast(state.device === "desktop" ? "桌面端" : "手机端");
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
  setToast(pages[nextIndex].title);
});

shuffleButton.addEventListener("click", () => {
  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  state.pageId = randomPage.id;
  renderNav();
  renderPage();
  setToast(randomPage.title);
});

window.addEventListener("resize", updateScale);

renderNav();
renderPage();
applyDevice();
