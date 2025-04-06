import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import nav from '../common/nav';
import { readFileList, readTotalFileWords, readEachFileWords } from '../webSiteInfo/readFile';

export default <VdoingThemeConfig>{
    nav,
    sidebar: "structuring",
    catalogTitle: 'Content',
    logo: 'https://s3.bmp.ovh/imgs/2025/02/17/90894ee9bae75aac.jpg',

    indexImg: {
        navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
        switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
        // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
        bgTimeColor: false,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
        bgTimeColorArray: ['transparent', 'rgba(255, 148, 48, .2)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .5)'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
        descFade: true,   // 是否开启图片中间描述的淡入效果，默认为 false
        desc: ["Good morning, and in case I don't see you, Good afternoon, Good evening, And good night.", "I know now why you cried,but it's something i can never do.", "No mistakes in the tango, not like life."],  // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFade 为 true 生效
        descFontSize: '1.4rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
        descFadeInTime: 85,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
        descFadeOutTime: 50,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
        descNextTime: 800,  // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
        bubble: false,    // 是否开启图片的气泡效果，默认为 false
        bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
        bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
    },




    bodyBgImg: [
        "https://image.atridea.com/banner0.png",
        "https://image.atridea.com/banner1.png",
        "https://image.atridea.com/banner2.png",
        "https://image.atridea.com/banner3.png",
        "https://image.atridea.com/banner4.png",
        "https://image.atridea.com/banner5.png",
        "https://image.atridea.com/banner6.png",
        "https://image.atridea.com/banner7.png",
        ],
        bodyBgImgOpacity: 1.0,
        bodyBgImgInterval: 25,

    searchPlaceholder: "Press 𝑺 to search",


    // user login front page style
    // defaultMode: 'dark',

    blogger: {
        avatar: 'https://s3.bmp.ovh/imgs/2025/02/17/90894ee9bae75aac.jpg',   // 头像(必需)，建议放在 .vuepress/public 下
        name: 'Deacon',
        slogan: 'UBC CS💻 ’27',
    },

    // 站点配置（首页 & 文章页）
    blogInfo: {
        blogCreate: '2025-1-14', // 博客创建时间
        indexView: true,  // 开启首页的访问量和排名统计，默认 true（开启）
        pageView: true,  // 开启文章页的浏览量统计，默认 true（开启）
        readingTime: true, // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
        eachFileWords: readEachFileWords([''], 300, 160),
        mdFileCountType: 'archives',  // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
        totalWords: 'archives',  // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
        moutedEvent: '.tags-wrapper',   // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
        // 下面两个选项：第一次获取访问量失败后的迭代时间
        indexIteration: 2500,   // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
        pageIteration: 2500,    // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
        // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
    },

    social: {
        icons: [
            {
                iconClass: 'icon-github',
                title: 'GitHub',
                link: 'https://github.com/DeaconT1'
            },
            {
                iconClass: 'icon-QQ',
                title: 'QQ',
                link: 'https://tool.gljlw.com/qq/?qq=3119415717'
            },
            {

                iconClass: 'icon-youjian',
                title: 'Email Me',
                link: 'mailto:deacont1study@gmail.com'
            },

            {
                iconClass: 'icon-bilibili',
                title: 'Bilibili',
                link: 'https://space.bilibili.com/589152671'
            }
        ]

    },

    author: {
        // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
        name: "Deacon"
    },


    lastUpdated: 'last updated',

    footer: {
    createYear: 2024,
        copyrightInfo: 'Deacon | All rights reserved.'
    },

    // 私密文章配置
    privatePage: {
        openPrivate: true, // 开启私密文章验证，默认开启（true），如果不开启（false），则下面配置都失效
        username: "deacon", // 管理员用户名
        password: "Cetc1028", // 管理员密码
        expire: "1d", // 登录过期时间：1d 代表 1 天，1h 代表 1 小时，仅支持这两个单位，不加单位代表秒。过期后访问私密文章重新输入用户名和密码。默认一天
        loginPath: "/vdoing/login/", // 引用登录组件的 md 文章的 permalink（必须），无默认值
        loginKey: "vdoing_manager", // 存储用户名信息的 key，默认是 vdoing_manager。系统通过该 key 验证是否登录、是否过期
        loginSession: false, // 开启是否在网页关闭或刷新后，清除登录状态，这样再次访问网页，需要重新登录，默认为 false（不开启）
        firstLogin: 0, // 第一次进入网站需要验证。用于封锁整个网站，默认为 0（不开启），1 和 2 都代表开启，区别：1 代表虽然进入网站成功，但是网站内的私密文章仍需要单独验证，2 代表进入网站成功，网站内的私密文章不需要单独验证，也就是网站内的私密文章和普通文章一样可以访问
        firstLoginKey: "vdoing_first_login", // 存储用户名信息的 key，firstLogin 开启后该配置生效，默认为 vdoing_first_login，系统通过该 key 验证是否登录、是否过期
        // 私密文章多组用户名密码
        // loginInfo: {
        //   "/private/test1/": [
        //     { username: "vdoing", password: "123456" },
        //   ],
        //   "vdoing_first_login" :[  // 对应 firstLoginKey 的值
        //     { username: "vdoing", password: "123456" },
        //   ]
        // }
    },


}