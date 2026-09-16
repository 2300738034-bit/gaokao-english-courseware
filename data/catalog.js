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
      coursewares: []
    },
    {
      id: "gaiyao",
      name: "高考英语概要写作专项训练",
      color: "blue",
      coursewares: []
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
        }
      ]
    },
    {
      id: "zuowen",
      name: "高考英语作文",
      color: "clay",
      coursewares: []
    },
    {
      id: "tingli",
      name: "新高考英语听力与口试",
      color: "mist",
      coursewares: []
    }
  ]
};
