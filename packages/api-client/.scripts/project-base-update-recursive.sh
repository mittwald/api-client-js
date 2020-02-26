#!/usr/bin/env bash

set -e
[[ "${DEBUG}" != "true" ]] || set -x

if ! which realpath > /dev/null ; then
    echo "GNU coreutils are needed. If this is macOS, run 'brew install coreutils'."
    exit 1
fi

root="$(dirname ${0})/.."
root="$(realpath "${root}")"

scriptsDir="$(realpath "${root}/.scripts")"
packageDir="/work"

source "${scriptsDir}/docker-volume-options.sh"
source "${scriptsDir}/is-running-in-ci.sh"

image="gitlab-registry.mittwald.it/coab-0x7e7/tools/project-base:latest"
docker pull "${image}"

interactive="-it"
if isRunningInCI; then
    interactive=""
fi

for f in $(find . -type f -iname .yo-rc.json) ; do
    d=$(dirname "${f}")
    dn=$(basename $d)
    echo -e "\nUpdating subproject \033[1m${dn}\033[0m"
    docker run ${interactive} --rm $(getDockerVolumeOption "${packageDir}" "" "${d}") "${image}" --force --skip-install
done
