// .vuepress/enhanceApp.js
export default ({ router, Vue }) => {
    if (typeof window !== 'undefined') {

        // 封装文本替换逻辑到一个函数 replaceText
        function replaceText() {
            Vue.nextTick(() => {

                // 假设渲染出来的 HTML 中包含 <div class="catalogue-title">目录</div>
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

                const note = document.querySelector('.custom-block.note .custom-block-title');
                if (note) {
                    note.textContent = 'Note';
                }

                const tip = document.querySelector('.custom-block.tip .custom-block-title');
                if (tip) {
                    tip.textContent = 'Tips';
                }

                const allCate = document.querySelector('.title.iconfont.icon-wenjianjia.router-link-exact-active.router-link-active');
                if (allCate) {
                    allCate.textContent = 'All Categories';
                }
            });
        }

        // 首次进入页面时也执行一次
        replaceText();

        // 每次完成路由切换后再执行一次
        router.afterEach(() => {
            replaceText();
        });
    }
};