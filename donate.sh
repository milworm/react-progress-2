#!/bin/bash
# Bash Menu Script Example

PS3='Would you like to support JSPM?: '
options=("Yes" "No" "No, and never show me this message again")
select opt in "${options[@]}"
do
    case $opt in
        "Yes")
            echo "Cool"
            break
            ;;
        "No")
            echo "Okay"
            break
            ;;
        "No, and never show me this message again")
            echo "Okay"
            break
            ;;
        *) echo invalid option;;
    esac
done