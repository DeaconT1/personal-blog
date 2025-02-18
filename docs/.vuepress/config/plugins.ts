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


    [
        'vuepress-plugin-helper-live2d', {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
            // 是否启用(关闭请设置为false)(default: true)
            enable: true,
            // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
            model: 'wanko',
            display: {
                position: "left", // 显示位置：left/right(default: 'right')
                width: 189, // 模型的长度(default: 135)
                height: 420, // 模型的高度(default: 300)
                hOffset: 13, //  水平偏移(default: 65)
                vOffset: -91, //  垂直偏移(default: 0)
            },
            mobile: {
                show: false // 是否在移动设备上显示(default: false)
            },
            react: {
                opacity: 0.8 // 模型透明度(default: 0.8)
            }
        }
    }
    ],

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