// .vuepress/enhanceApp.js
export default ({
                    Vue,         // VuePress 正在使用的 Vue 构造函数
                    options,     // 附加到根实例的一些选项
                    router,      // 当前应用的路由实例
                    siteData,    // 站点元数据
                    isServer     // 当前应用配置是处于 服务端渲染 或 客户端
                }) => {
    /**
     * ========= 文本替换逻辑 =========
     */
    if (typeof window !== "undefined") {
        // 封装文本替换逻辑到一个函数 replaceText
        function replaceText() {
            // 在 Vue 的下一次 DOM 更新后再延时一点点执行
            Vue.nextTick(() => {
                setTimeout(() => {
                    const cate = document.querySelector(".title.iconfont.icon-wenjianjia");
                    if (cate) cate.textContent = "Categories";

                    const tags = document.querySelector(".title.iconfont.icon-biaoqian1");
                    if (tags) tags.textContent = "Tags";

                    const el = document.querySelector(".catalogue-title");
                    if (el && el.textContent.includes("目录")) {
                        el.textContent = "Content";
                    }

                    const el1 = document.querySelector(".right-menu-title");
                    if (el1 && el1.textContent.includes("目录")) {
                        el1.textContent = "Content";
                    }

                    const updated = document.querySelector(".iconfont.icon-bi");
                    if (updated) {
                        updated.textContent = "Recently Updated";
                    }

                    const more = document.querySelector(".more");
                    if (more) {
                        more.textContent = "More articles";
                    }

                    const allCate = document.querySelector(".title.iconfont.icon-wenjianjia.router-link-exact-active.router-link-active");
                    if (allCate) {
                        allCate.setAttribute("title", "All Categories");
                    }

                    const modeItems = document.querySelectorAll('.select-box li');

                    // 依次替换成英文
                    const translations = [
                        'Follow System', // 跟随系统
                        'Light Mode',    // 浅色模式
                        'Dark Mode',     // 深色模式
                        'Reading Mode'   // 阅读模式
                    ];

                    // 遍历替换
                    modeItems.forEach((li, index) => {
                        li.textContent = translations[index];
                    });

                    const foreMoreEls = document.querySelectorAll(
                        ".readmore.iconfont.icon-jiantou-you"
                    );
                    foreMoreEls.forEach((el) => {
                        // 输出看看实际的 textContent
                        console.log(el.textContent);
                        if (el.textContent.includes("阅读全文")) {
                            el.textContent = "Read More";
                        }
                    });
                }, 100); // 延时 100ms 可以酌情调节
            });
        }

        // 页面首次加载完成后执行一次
        router.onReady(() => {
            replaceText();
        });

        // 每次完成路由切换后再执行一次
        router.afterEach(() => {
            replaceText();
        });
    }
};
