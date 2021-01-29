# Git教程

## 安装

windows下直接去官网下载git安装

**设置用户名**

```console
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```



## 克隆项目

```bash
 git clone url地址
 //重命名
 git clone url地址 newProject
```

工作目录的文件共有两种状态：已跟踪、未跟踪



## 提交代码

**查看用户状态**

```bash
git status
# 使用 git status -s 命令或 git status --short 命令可以输出比较简短的状态信息

git diff
# 可以查看未暂存区的内容比较的是工作目录中当前文件和暂存区域快照之间的差异

git diff --staged
#查看已暂存的将要添加到下次提交里的内容，比对已暂存文件与最后一次提交的文件差异

# Untracked 未跟踪
# modified  修改的
# Changes to be committed 已暂存 暂存区
# Changes not staged for commit 已更改	 未暂存区
```



**添加文件**

```bash
# 添加本目录下的某文件
# git add 之后又修订了文件，需要重新运行 git add 把最新版本重新暂存起来
git add file(文件名)

git commit -m "第一次提交"   #把暂存区的文件提交更新
git commit -a -m "第一次提交" #把修改过的文件都提交更新，不需要再git add命令

git commit --amend 
# 撤销操作，如果提交时漏掉了某些文件，或者想要修改注释，可以使用改命令

git pull # 将远程master分支合并到本地master分支
git push origin master # 将当前分支合并到远程分支

```



**删除文件**

```bash
git rm [文件名] 
# 删除暂存区和工作区(本地磁盘文件)下的该文件，不能简单的直接从工作区删除文件，需要使用该命令
# 不会删除已提交的文件

git rm --cached [文件名]
# 只删除暂存区的内容，不删除保存在磁盘的文件

git mv [改名前] [改名后的名字]
# 文件改名
```



**提交历史**

```bash
git log #查看
```



## **版本回退**

```bash
#显示从最近到最远的提交日志
git log --pretty=oneline

#可以得到相应版本的版本号,Eg:cc8c9dfa4b201771551ab1f465b4ad751d54fa9e
#根据版本号回退相应的版本
##有几种方式供我们选择
git reset --hard HEAD^ #回退到上一个版本
git reset --hard HEAD^^ #回退到上上一个版本
git reset --hard HEAD~10 #回退到上10个版本
git reset --hard 版本号 #回退到指定版本，版本号没必要写全，前几位就可以
```

**再回到最新的版本**

```bash
#前提下是你没有关闭这个窗口
#顺着这个窗口向上找到最新的版本号
###根据版本号回到最新版本
git reset --hard 版本号 #回退到指定版本

##如果你关闭了这个窗口
##可以使用以下命令查看你的每一次命令
##找到相应的版本号，回到最新版本
git reflog
```

**丢弃工作区的修改**

```bash
git checkout -- readme.txt #丢弃的文件
```

**获取最新版本，强制更新，覆盖掉本地原有版本**

```bash
git fetch --all

git reset --hard origin/master
```



## **分支操作**

**创建分支**

```bash
git branch #查看分支
git branch dev #创建分支dev
git checkout dev或者git switch dev #切换分支

#创建并切换分支
git checkout -b dev
git switch -c dev 
```

**合并分支**

```bash
git merge dev #合并某分支到当前分支
```

**删除分支**

```bash
git branch -d dev #删除分支
git branch -D dev #强行删除分支
```

**查看分支**

```bash
git log --oneline --decorate # 查看各个分支当前所指的对象
git log --oneline --decorate --graph --all #查看分叉历史
```



## 关联远程库

```bash
git remote add origin git@gitee.com:liaoxuefeng/learngit.git

git push -u origin master
```



## 使用操作

**git add后撤销**

```bash
#所有文件
git reset HEAD 

#单个文件
git reset HEAD -filename
```

