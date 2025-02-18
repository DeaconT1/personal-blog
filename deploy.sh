#!/usr/bin/env sh

# 确保脚本抛出错误时终止执行
set -e

# 1. 提前在主分支里把对 docs/*.md 的改动 commit 好，
#    这样 VuePress build 时能读到正确的 Git 记录。

# 2. 运行打包命令
npm run docs:build

# 3. 进入打包后的文件夹
cd docs/.vuepress/dist

# 4. 初始化一个空的临时仓库（只用于提交打包产物）
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/DeaconT1/project.git main:gh-pages

cd -