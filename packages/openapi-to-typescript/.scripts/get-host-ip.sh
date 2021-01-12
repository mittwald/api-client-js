function getHostIP() {
    root="$(dirname "${0}")/.."
    root="$(realpath "${root}")"
    scriptsDir="$(realpath "${root}/.scripts")"
    source "${scriptsDir}/is-running-in-ci.sh"

    getHostIP="127.0.0.1"

    if isRunningInCI ; then
        getHostIP="$(/sbin/ip route | awk '/default/ { print $3 }')"
    fi

    echo "${getHostIP}"
}

echo $(getHostIP)
