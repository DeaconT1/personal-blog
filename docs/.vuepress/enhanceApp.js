// .vuepress/enhanceApp.js
export default ({ router, Vue }) => {
    if (typeof window !== 'undefined') {
        // 在路由切换后执行
        router.afterEach(() => {
            Vue.nextTick(() => {
                // 假设渲染出来的 HTML 中包含 <div class="sidebar-title">目录</div>
                const el = document.querySelector('.catalogue-title');
                if (el && el.textContent.includes('目录')) {
                    el.textContent = 'Content';
                }

                const el1 = document.querySelector('.right-menu-title');
                if (el1 && el1.textContent.includes('目录')) {
                    el1.textContent = 'Content';
                }

                const elZidong = document.querySelector('.iconfont.icon-zidong');
                if (elZidong) {
                    elZidong.textContent = 'Follow system';
                }

                // 浅色模式 -> Light mode
                const elLight = document.querySelector('.iconfont.icon-rijianmoshi');
                if (elLight) {
                    elLight.textContent = 'Light mode';
                }

                // 深色模式 -> Dark mode
                const elDark = document.querySelector('.iconfont.icon-yejianmoshi');
                if (elDark) {
                    elDark.textContent = 'Dark mode';
                }

                // 阅读模式 -> Reading mode
                const elRead = document.querySelector('.iconfont.icon-yuedu');
                if (elRead) {
                    elRead.textContent = 'Reading mode';
                }

                const updated = document.querySelector('.iconfont.icon-bi');
                if (updated) {
                    updated.textContent = 'Recently Updated';
                }

                const cate = document.querySelector('.title.iconfont.icon-wenjianjia');
                if (cate) {
                    cate.textContent = 'Categories';
                }

                const tags = document.querySelector('.title.iconfont.icon-biaoqian1');
                if (tags) {
                    tags.textContent = 'Tags';
                }

                const more = document.querySelector('.more');
                if (more) {
                    more.textContent = 'More articles';
                }
            });
        });
    }
};