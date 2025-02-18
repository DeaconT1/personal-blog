import head from "./config/head"
import themeConfig from "./config/themeConfig"
import plugins from "./config/plugins"
import { readFileList, readTotalFileWords, readEachFileWords } from './webSiteInfo/readFile';
module.exports = {
    title: "Deacon's Blog",
    theme: 'vdoing',
    head,
    themeConfig,
    plugins,
    base: "/",
}