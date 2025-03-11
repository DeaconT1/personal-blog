// .vuepress/enhanceApp.js
export default ({ router, Vue }) => {
    if (typeof window !== 'undefined') {
        // 封装文本替换逻辑到一个函数 replaceText
        function replaceText() {
            // 在 Vue 的下一次 DOM 更新后再延时一点点执行
            Vue.nextTick(() => {
                setTimeout(() => {
                    const cate = document.querySelector('.title.iconfont.icon-wenjianjia');
                    if (cate) cate.textContent = 'Categories';

                    const tags = document.querySelector('.title.iconfont.icon-biaoqian1');
                    if (tags) tags.textContent = 'Tags';

                    const el = document.querySelector('.catalogue-title');
                    if (el && el.textContent.includes('目录')) {
                        el.textContent = 'Content';
                    }

                    const el1 = document.querySelector('.right-menu-title');
                    if (el1 && el1.textContent.includes('目录')) {
                        el1.textContent = 'Content';
                    }

                    const updated = document.querySelector('.iconfont.icon-bi');
                    if (updated) {
                        updated.textContent = 'Recently Updated';
                    }

                    const more = document.querySelector('.more');
                    if (more) {
                        more.textContent = 'More articles';
                    }

                    const allCate = document.querySelector('.title.iconfont.icon-wenjianjia.router-link-exact-active.router-link-active');
                    if (allCate) {
                        allCate.textContent = 'All Categories';
                    }

                    const foreMoreEls = document.querySelectorAll('.readmore.iconfont.icon-jiantou-you');

                    foreMoreEls.forEach(el => {
                        // el 就是单独的那个 DOM 节点
                        // 这里可以先输出看看实际的 textContent 是不是你预期的
                        console.log(el.textContent);

                        if (el.textContent.includes('阅读全文')) {
                            el.textContent = 'Read More';
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