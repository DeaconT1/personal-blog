import { UserPlugins } from 'vuepress/config'

export default <UserPlugins>[


    [
        {
            name: 'custom-plugins',
            globalUIComponents: ["PageInfo"],// 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
        },

    ],
    // 复制代码块的插件
    ['vuepress-plugin-code-copy', true],

    ['fulltext-search'],


    [
        'vuepress-plugin-comment',
        {
            // 具体参数请看官网：https://valine.js.org/
            choosen: 'valine',
            options: {
                el: '#valine-vuepress-comment',
                appId:  'p3oP61LpH40Tyg6sR64EGBQi-gzGzoHsz',
                appKey: 'd1gyPBw0DehvHv8y1EWN26HX',
                placeholder: 'You can leave your message here!',
                // 有 URL、''、mp、identicon、monsterid、wavatar、retro、robohash、hide 头像选择，具体头像是什么样子，请访问 https://valine.js.org/avatar.html
                avatar: 'identicon',	// 默认头像
                pageSize: 10,   // 评论列表分页，每页条数
                visitor: true,    // 文章访问量统计
                recordIP: true,   // 是否记录评论者 IP
                enableQQ: false,   // 是否启用昵称框自动获取 QQ 昵称和 QQ 头像, 默认关闭
                emojiCDN: '//i0.hdslb.com/bfs/emote/',
                // 表情title和图片映射
                emojiMaps: {
                    "tv_doge": "6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
                    "tv_亲亲": "a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
                    "tv_偷笑": "bb690d4107620f1c15cff29509db529a73aee261.png",
                    "tv_再见": "180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
                    "tv_冷漠": "b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
                    "tv_发怒": "34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
                    "tv_发财": "34db290afd2963723c6eb3c4560667db7253a21a.png",
                    "tv_可爱": "9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
                    "tv_吐血": "09dd16a7aa59b77baa1155d47484409624470c77.png",
                    "tv_呆": "fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
                    "tv_呕吐": "9f996894a39e282ccf5e66856af49483f81870f3.png",
                    "tv_困": "241ee304e44c0af029adceb294399391e4737ef2.png",
                    "tv_坏笑": "1f0b87f731a671079842116e0991c91c2c88645a.png",
                    "tv_大佬": "093c1e2c490161aca397afc45573c877cdead616.png",
                    "tv_大哭": "23269aeb35f99daee28dda129676f6e9ea87934f.png",
                    "tv_委屈": "d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
                    "tv_害羞": "a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
                    "tv_尴尬": "7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
                    "tv_微笑": "70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
                    "tv_思考": "90cf159733e558137ed20aa04d09964436f618a1.png",
                    "tv_惊吓": "0d15c7e2ee58e935adc6a7193ee042388adc22af.png",
                    // ... 更多表情
                },
            }
        }
    ],

    // 阅读进度
    'reading-progress',

    // 鼠标光标效果插件
    [
        'cursor-effects', {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }
    ],

    // 标签栏提示
    ['dynamic-title', {
        // showIcon: '',
        showText: 'WelcomeBack!  O(∩_∩)O~~',
        // hideIcon: '',
        hideText: "Don't Go! ::>_<::",
        recoverTime: 2000,
    }],


    // [
    //     'vuepress-plugin-helper-live2d', {
    //     // 是否开启控制台日志打印(default: false)
    //     log: false,
    //     live2d: {
    //         // 是否启用(关闭请设置为false)(default: true)
    //         enable: true,
    //         // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
    //         model: 'wanko',
    //         display: {
    //             position: "left", // 显示位置：left/right(default: 'right')
    //             width: 189, // 模型的长度(default: 135)
    //             height: 420, // 模型的高度(default: 300)
    //             hOffset: 13, //  水平偏移(default: 65)
    //             vOffset: -91, //  垂直偏移(default: 0)
    //         },
    //         mobile: {
    //             show: false // 是否在移动设备上显示(default: false)
    //         },
    //         react: {
    //             opacity: 0.8 // 模型透明度(default: 0.8)
    //         }
    //     }
    // }
    // ],

    ["sakura", {
        num: 20,  // 默认数量
        show: true, //  是否显示
        zIndex: -1,   // 层级
        img: {
            replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
            httpUrl: '...'     // 绝对路径
        }
    }]
]