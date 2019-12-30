#***********************ZSH 设置*******************************
# ZSH 主题设置
ZSH_THEME="dracula"
#ZSH_THEME="powerlevel9k/powerlevel9k"
#POWERLEVEL9K_MODE='awesome-fontconfig'
POWERLEVEL9K_MODE='nerdfont-complete'
# 另起一行
POWERLEVEL9K_PROMPT_ON_NEWLINE=true
# 右边的提示符显示到下一行
#POWERLEVEL9K_RPROMPT_ON_NEWLINE=true
# 命令执行完新加一行
POWERLEVEL9K_PROMPT_ADD_NEWLINE=true
# 禁用右边提示符
POWERLEVEL9K_DISABLE_RPROMPT=false
#POWERLEVEL9K_MULTILINE_FIRST_PROMPT_PREFIX="╭─"
#POWERLEVEL9K_MULTILINE_LAST_PROMPT_PREFIX="╰─%K{black}%F{green} \uf155%f%F{black} %k\ue0b0%f "
# Separators
#POWERLEVEL9K_LEFT_SEGMENT_SEPARATOR=$'\ue0b0'
#POWERLEVEL9K_LEFT_SUBSEGMENT_SEPARATOR=$'\ue231'
#POWERLEVEL9K_RIGHT_SEGMENT_SEPARATOR=$'\ue0b2'
#POWERLEVEL9K_RIGHT_SUBSEGMENT_SEPARATOR=$'\ue0b7'
# 浅色主题
#POWERLEVEL9K_COLOR_SCHEME='light'
# 自定义左边提示符元素
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(context dir rbenv vcs)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(status root_indicator background_jobs command_execution_time history time)
# 自定义多行链接符
#POWERLEVEL9K_MULTILINE_FIRST_PROMPT_PREFIX="↱"
#POWERLEVEL9K_MULTILINE_LAST_PROMPT_PREFIX="↳"
# 短目录显示
#POWERLEVEL9K_DIR_HOME_BACKGROUND='blue'
#POWERLEVEL9K_DIR_HOME_FOREGROUND='black'
#POWERLEVEL9K_DIR_HOME_SUBFOLDER_BACKGROUND='blue'
#POWERLEVEL9K_DIR_HOME_SUBFOLDER_FOREGROUND='black'
#POWERLEVEL9K_DIR_DEFAULT_BACKGROUND='blue'
#POWERLEVEL9K_DIR_DEFAULT_FOREGROUND='black'
POWERLEVEL9K_SHORTEN_DIR_LENGTH=3
#POWERLEVEL9K_SHORTEN_DELIMITER=””
#POWERLEVEL9K_SHORTEN_STRATEGY=”truncate_from_right”
# Context
DEFAULT_USER=$USER
#POWERLEVEL9K_ALWAYS_SHOW_CONTEXT=true
#POWERLEVEL9K_CONTEXT_DEFAULT_FOREGROUND='green'
#POWERLEVEL9K_CONTEXT_TEMPLATE="%F{cyan}%n%f"
#POWERLEVEL9K_CONTEXT_DEFAULT_BACKGROUND='black'

# 禁止自动更新
DISABLE_UPDATE_PROMPT="true"
DISABLE_AUTO_UPDATE="true"
# Time
POWERLEVEL9K_TIME_FORMAT="%F{black}\uf017 %D{%I:%M:%S}%f"
POWERLEVEL9K_EXECUTION_TIME_ICON="\u23F1"
POWERLEVEL9K_USER_ICON="\uF415"

# 自动纠正命令
ENABLE_CORRECTION="true"
# DISABLE_UNTRACKED_FILES_DIRTY="true"

plugins=(git python docker pip yarn)
#plugins=(git python docker pip yarn zsh-autosuggestions zsh-syntax-highlighting autoswitch_virtualenv)
#*************iterm2_shell_integration******
test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh"


# 关闭代理
function proxy_off(){
    unset http_proxy
    unset https_proxy
    echo -e "已关闭代理"
    curl ip.gs
}

# 开启代理
function proxy_on(){
    export no_proxy="localhost,127.0.0.1,localaddress,.localdomain.com"
    export http_proxy="http://127.0.0.1:1087"
    export https_proxy="http://127.0.0.1:1087"
    echo -e "已开启代理"
    curl ip.gs
}

# 切换至本机Mac docker环境
function docker_local(){
    #eval $(docker-machine env -u)
    export DOCKER_HOST=""
}

function docker_106(){
   export DOCKER_HOST="tcp://10.13.6.106:2376"
}
function docker_103(){
   export DOCKER_HOST="tcp://10.13.6.103:2376"
}
function docker_109(){
   export DOCKER_HOST="tcp://10.13.6.109:2376"
}
function docker_52(){
   export DOCKER_HOST="tcp://10.1.253.52:2376"
}

# 更新系统
function upgrade(){
   echo "upgrade oh_my_zsh"
   upgrade_oh_my_zsh
   echo "::: upgrade brew :::"
   brew update && brew upgrade && brew cleanup && brew prune
   echo "::: upgrade brew cask :::"
   brew cu --all --force --yes --cleanup
   echo "::: upgrade mac software ::::::"
   echo "mi,./" | sudo -S softwareupdate -i -a
   echo "mi,./" | sudo -S purge
   echo "::: upgrade apm package:::"
   apm update && apm upgrade --confirm
   echo "::: upgrade node modules ::: "
   #npm update -g
   npm install npm@latest -g
   yarn global upgrade
   brew bundle dump
   mv  -f /Users/liyi/Brewfile "/Users/liyi/CloudSync/Mackup/"
   mackup backup -f
   cd  "/Users/liyi/CloudSync/Mackup/"
   git add .
   git commit -m "update"
   git push
}

#**********************环境变量&别名设置***************************
export LANG=en_US.UTF-8
export EDITOR="vim"
export M2_HOME="/Users/liyi/Develop/apache-maven-3.6.0"
export PATH="/Users/liyi/Tools:/Users/liyi/.local/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$M2_HOME/bin:$PATH"
alias cls="clear"
alias ll="ls -l"
alias la="ls -a"
alias vi='vim'
alias javac="javac -J-Dfile.encoding=utf8"
alias grep="grep --color=auto"
alias -s html=subl
alias -s py=vi
alias -s js=subl
alias -s java=subl
alias -s txt=vi
alias subl="'/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl'"
export PATH=$PATH:/Users/liyi/.config/yarn/global/node_modules/.bin
export NODE_ENV=development
#***************************python环境设置************************
export PYTHONIOENCODING=UTF-8
#pyenv setting
#if command -v pyenv 1>/dev/null 2>&1; then
#  eval "$(pyenv init -)"
#fi
alias loadpyenv='eval "$(pyenv init -)"'
# eval "$(pipenv --completion)"
# source /usr/local/opt/autoenv/activate.sh
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/versions/3.6.4/bin:$PATH"
#**************nvm setting*****************
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

#alias loadnvm='[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"'
#export PATH=$HOME/.nvm/versions/node/v8.16.2/bin:$PATH
#**************jenv setting***************
# export PATH="$HOME/.jenv/bin:$PATH"
# eval "$(jenv init -)"

#*************other setting****************
[[ -s $(brew --prefix)/etc/profile.d/autojump.sh  ]] && . $(brew --prefix)/etc/profile.d/autojump.sh
export PATH="/usr/local/opt/thrift@0.9/bin:$PATH"
# if [ -f $(brew --prefix)/etc/brew-wrap ];then
#     source $(brew --prefix)/etc/brew-wrap
# fi
#source ~/.bin/tmuxinator.zsh

export ZSH=/Users/liyi/.oh-my-zsh
source $ZSH/oh-my-zsh.sh
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

#**************sdkman setting**************
# export SDKMAN_DIR="/Users/liyi/.sdkman"
# [[ -s "/Users/liyi/.sdkman/bin/sdkman-init.sh" ]] && source "/Users/liyi/.sdkman/bin/sdkman-init.sh"
#

export GOPATH=$HOME/golang
export GOROOT=/usr/local/opt/go/libexec
export PATH=$PATH:$GOPATH/bin
export PATH=$PATH:$GOROOT/bin

#source "/usr/local/opt/kube-ps1/share/kube-ps1.sh"
#PS1='$(kube_ps1)'$PS1

if [ /usr/local/bin/kubectl ]; then source <(kubectl completion zsh); fi

source <(oc completion zsh)

export PATH=$PATH:/usr/local/Cellar/mysql-client/5.7.23/bin
export PATH="/usr/local/opt/sqlite/bin:$PATH"
export PATH="/usr/local/opt/qt/bin:$PATH"
#export JAVA_HOME=$(/usr/libexec/java_home)
#export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.0.3.jdk/Contents/Home
export CLASSPAHT=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export PATH="/usr/local/sbin:$JAVA_HOME/bin:$PATH"
#source ~/.oh-my-zsh/plugins/incr/incr*.zsh

unsetopt correct_all  
export REDIS_CLUSTER_IP=0.0.0.0
source "$(navi widget zsh)"

