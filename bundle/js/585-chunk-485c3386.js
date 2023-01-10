"use strict";(self.webpackChunkusersores=self.webpackChunkusersores||[]).push([[585],{35585:function(n,e,r){r.r(e),r.d(e,{default:function(){return a}});var o=r(67294),t=r(36112),a=function(){return o.createElement(t.v5,null,"# react-native 0.69 android 12 jdk11环境构建 笔记\n\n- 操作系统： macos pro m2芯片\n- 命令行： git\n- 安装 brew （来源：gitee：CunKai / HomebrewCN）\n- 选择网速好的网点 5分钟\n```bash\n/bin/zsh -c \"$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)\"\n```\n选择中科大源镜像\n\n    sudo 要输入两次密码\n\n安装完成\n\n屏幕提示\n\n```\n\nHomebrew 3.6.0-4-g8a807dc-dirty\nfatal: unsafe repository ('/opt/homebrew/Library/Taps/homebrew/homebrew-core' is owned by someone else)\nTo add an exception for this directory, call:\n\n\tgit config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-core\nHomebrew/homebrew-core (no Git repository)\nfatal: unsafe repository ('/opt/homebrew/Library/Taps/homebrew/homebrew-cask' is owned by someone else)\nTo add an exception for this directory, call:\n\n\tgit config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-cask\nHomebrew/homebrew-cask (no Git repository)\nBrew前期配置成功\n电脑系统版本：12.5\nAll user-space services OK, nothing cleaned...\n\n  ==> brew update-reset\n  \n==> Fetching /opt/homebrew...\n\n==> Resetting /opt/homebrew...\nBranch 'master' set up to track remote branch 'master' from 'origin'.\nReset branch 'master'\nYour branch is up to date with 'origin/master'.\n\nWarning: No remote 'origin' in /opt/homebrew/Library/Taps/homebrew/homebrew-cask, skipping update and reset!\nWarning: No remote 'origin' in /opt/homebrew/Library/Taps/homebrew/homebrew-core, skipping update and reset!\nWarning: No remote 'origin' in /opt/homebrew/Library/Taps/homebrew/homebrew-services, skipping update and reset!\n\n        Brew自动安装程序运行完成\n          国内地址已经配置完成\n\n  桌面的Old_Homebrew文件夹，大致看看没有你需要的可以删除。\n\n              初步介绍几个brew命令\n本地软件库列表：brew ls\n查找软件：brew search google（其中google替换为要查找的关键字）\n查看brew版本：brew -v  更新brew版本：brew update\n安装cask软件：brew install --cask firefox 把firefox换成你要安装的\n        \n        欢迎右键点击下方地址-打开URL 来给点个赞\n         https://zhuanlan.zhihu.com/p/111014448 \n\n         source /Users/nipengbo/.zprofile \n\n```\n\n- 重新打开shell\nbrew update\n加入安全目录\n\n```\ngit config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-core\ngit config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-cask \ngit config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-services\n```\n\n```bash\n\ncd /opt/homebrew/Library/Taps/homebrew/homebrew-core && git stash pop\n\nbrew update\n```\n\n- 安装react-native 选取0.69 macos Android 开发平台 目标平台\n\nbrew install node\nnode -v \nv18.8.0\nbrew cleanup node\n\n\nbrew install watchman\n\n切换npm淘宝镜像源\n\nnpm config set registry https://registry.npm.taobao.org\n\n校验：npm config get registry\n\n安装yarn: npm install -g yarn\n\n\n安装java jdk\nReact Native 需要 Java Development Kit [JDK] 11\n\nZulu 的 OpenJDK 发行版： 支持因特尔和m类型芯片\n\nbrew tap homebrew/cask-versions\nbrew install --cask zulu11\n\n验证： javac -version\n\n- 下载android arm版本\n安装\n不使用proxy\ndon't send\n\n一路回车同意finish（使用customer）\n等待下载\n\n\n新建项目使用31\nAndroid12版本\njava\n等待项目构建完成过程较慢\n\n- 安装sdk\nandroid 31/12\nAndroid SDK Platform 31\nIntel x86 Atom_64 System Image\n\n\nandroid sdk 环境变量\n\nvi ~/.zshrc\n\n```bash\n# 如果你不是通过Android Studio安装的sdk，则其路径可能不同，请自行确定清楚\nexport ANDROID_SDK_ROOT=$HOME/Library/Android/sdk\nexport PATH=$PATH:$ANDROID_SDK_ROOT/emulator\nexport PATH=$PATH:$ANDROID_SDK_ROOT/tools\nexport PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin\nexport PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools\n\n```\n\n生效：  source $HOME/.zshrc\n\n校验： echo $ANDROID_SDK_ROOT\n\n\n\n✔ Processing template\nℹ Installing dependencies\n? CocoaPods (https://cocoapods.org/) is not installed. CocoaPods is necessary for the iOS project to run correctly. Do you want to install it? › - Use arrow-keys. Return to submit.\n❯   Yes, with gem (may require sudo)\n    Yes, with Homebrew\n\n\nsudo gem install cocoapods\n\n确保android studio模拟器在运行中， 切内存充足，没有关联其他项目\n启动yarn android\n\n忽略ios： err: cd ./AwesomeProject/ios && pod install\n等待，第一次夹在较慢，需要生成apk文件\n\n至此android环境搭建完毕， 添加应用加环境消耗约34G\n\n- debug 调试\n\n安装react-native-debugger\n下载软件安装， 重启应用\n在shell控制台输入d， 进入debugger，\n同react应用\n\n打开网络配置debugger捕获\n\n```javaScript\nfunction openDebugger() {\n    global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;\n}\n\n```")}}}]);