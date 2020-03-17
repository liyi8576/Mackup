#!/bin/bash
#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="/Users/liyi/.sdkman"
[[ -s "/Users/liyi/.sdkman/bin/sdkman-init.sh" ]] && source "/Users/liyi/.sdkman/bin/sdkman-init.sh"

# added by Anaconda3 4.3.1 installer
export PATH="/Users/liyi/anaconda/bin:$PATH":/Users/liyi/.nowa-gui/installation/node_modules/.bin:/Applications/NowaGUI.app/Contents/Resources/app/nodes:/Applications/NowaGUI.app/Contents/Resources/app/node_modules/.bin:/Users/liyi/.once-gui/installation/node_modules/.bin:/Applications/CodeExpander.app/Contents/Resources/app/nodes:/Applications/CodeExpander.app/Contents/Resources/app/node_modules/.bin

# added by Anaconda3 4.3.1 installer
export PATH="/Users/liyi/anaconda/bin:$PATH":/Users/liyi/.nowa-gui/installation/node_modules/.bin:/Applications/NowaGUI.app/Contents/Resources/app/nodes:/Applications/NowaGUI.app/Contents/Resources/app/node_modules/.bin:/Users/liyi/.once-gui/installation/node_modules/.bin:/Applications/CodeExpander.app/Contents/Resources/app/nodes:/Applications/CodeExpander.app/Contents/Resources/app/node_modules/.bin

# added by Anaconda2 4.4.0 installer
export PATH="/Users/liyi/anaconda/bin:$PATH":/Users/liyi/.nowa-gui/installation/node_modules/.bin:/Applications/NowaGUI.app/Contents/Resources/app/nodes:/Applications/NowaGUI.app/Contents/Resources/app/node_modules/.bin:/Users/liyi/.once-gui/installation/node_modules/.bin:/Applications/CodeExpander.app/Contents/Resources/app/nodes:/Applications/CodeExpander.app/Contents/Resources/app/node_modules/.bin
# added by Anaconda3 2018.12 installer
# >>> conda init >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$(CONDA_REPORT_ERRORS=false '/Users/liyi/anaconda3/bin/conda' shell.bash hook 2> /dev/null)"
if [ $? -eq 0 ]; then
    \eval "$__conda_setup"
else
    if [ -f "/Users/liyi/anaconda3/etc/profile.d/conda.sh" ]; then
# . "/Users/liyi/anaconda3/etc/profile.d/conda.sh"  # commented out by conda initialize
        CONDA_CHANGEPS1=false conda activate base
    else
        \export PATH="/Users/liyi/anaconda3/bin:$PATH":/Users/liyi/.once-gui/installation/node_modules/.bin:/Applications/CodeExpander.app/Contents/Resources/app/nodes:/Applications/CodeExpander.app/Contents/Resources/app/node_modules/.bin
    fi
fi
unset __conda_setup
# <<< conda init <<<
# added by Anaconda3 2018.12 installer
# >>> conda init >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$(CONDA_REPORT_ERRORS=false '/Users/liyi/anaconda3/bin/conda' shell.bash hook 2> /dev/null)"
if [ $? -eq 0 ]; then
    \eval "$__conda_setup"
else
    if [ -f "/Users/liyi/anaconda3/etc/profile.d/conda.sh" ]; then
# . "/Users/liyi/anaconda3/etc/profile.d/conda.sh"  # commented out by conda initialize
        CONDA_CHANGEPS1=false conda activate base
    else
        \export PATH="/Users/liyi/anaconda3/bin:$PATH":/Users/liyi/.once-gui/installation/node_modules/.bin:/Applications/CodeExpander.app/Contents/Resources/app/nodes:/Applications/CodeExpander.app/Contents/Resources/app/node_modules/.bin
    fi
fi
unset __conda_setup
# <<< conda init <<<

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/liyi/Applications/anaconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/liyi/Applications/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/liyi/Applications/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/liyi/Applications/anaconda3/bin:$PATH":/Users/liyi/.once-gui/installation/node_modules/.bin:/Applications/CodeExpander.app/Contents/Resources/app/nodes:/Applications/CodeExpander.app/Contents/Resources/app/node_modules/.bin
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

