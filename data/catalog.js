// ============================================================
// 课件登记表（网站的唯一数据来源）
// 新增课件：在对应 book 的 coursewares 数组里加一条，
//           并把 HTML 课件文件放进 courseware/ 目录即可。
// ============================================================
window.CATALOG = {
  siteTitle: "高考英语·课件集",

  books: [
    {
      id: "ciku",
      name: "高考英语词汇",
      color: "rose",
      coursewares: []
    },
    {
      id: "fanyi",
      name: "高考英语翻译专项训练",
      color: "sage",
      coursewares: [
        {
          title: "高考翻译中的语法课件（第三章）",
          file: "courseware/高考翻译中的语法课件.html",
          added: "2026-09-17"
        },
        {
          title: "高考翻译常用复合句课件（第四章）",
          file: "courseware/高考翻译常用复合句课件.html",
          added: "2026-10-12"
        }
      ]
    },
    {
      id: "gaiyao",
      name: "高考英语概要写作专项训练",
      color: "blue",
      coursewares: [
        {
          title: "概要写作课件（1-2节）",
          file: "courseware/概要写作课件（1-2节）.html",
          added: "2026-09-16"
        }
      ]
    },
    {
      id: "yufa",
      name: "高考英语语法",
      color: "lilac",
      coursewares: [
        {
          title: "词与句课件",
          file: "courseware/词与句课件.html",
          added: "2026-09-16"
        },
        {
          title: "冠词课件",
          file: "courseware/冠词课件.html",
          added: "2026-09-16"
        },
        {
          title: "数词课件",
          file: "courseware/数词课件.html",
          added: "2026-09-17"
        },
        {
          title: "形容词·副词·名词·动词课件",
          file: "courseware/形容词副词名词动词课件.html",
          added: "2026-10-01"
        },
        {
          title: "时态语态课件",
          file: "courseware/时态语态课件.html",
          added: "2026-10-22"
        },
        {
          title: "独立主格课件",
          file: "courseware/独立主格课件.html",
          added: "2026-10-22"
        },
        {
          title: "情态动词与虚拟语气课件",
          file: "courseware/情态动词与虚拟语气课件.html",
          added: "2026-10-22"
        },
        {
          title: "倒装课件",
          file: "courseware/倒装课件.html",
          added: "2026-10-26"
        }
      ]
    },
    {
      id: "zuowen",
      name: "高考英语作文",
      color: "clay",
      coursewares: [
        {
          title: "主题类语汇与基本句型课件",
          file: "courseware/主题类语汇与基本句型课件.html",
          added: "2026-09-29"
        }
      ]
    },
    {
      id: "tingli",
      name: "新高考英语听力与口试",
      color: "mist",
      coursewares: [
        {
          title: "听力测试部分课件（第6-24页）",
          file: "courseware/听力测试部分课件.html",
          added: "2026-09-17"
        },
        {
          title: "听说测试部分课件",
          file: "courseware/听说测试课件.html",
          added: "2026-10-12"
        }
      ]
    }
  ]
};
