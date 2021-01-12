function getDockerVolumeOption() {
    root="$(dirname "${0}")/.."
    root="$(realpath "${root}")"
    scriptsDir="$(realpath "${root}/.scripts")"
    source "${scriptsDir}/is-running-in-ci.sh"

    packageDir="${1}"
    ciProjectSubDir="${2}"
    workDir="${3}"
    ciJobID="${CI_JOB_ID}"
    ciProjectDir="${CI_PROJECT_DIR}"

    volumeOption="--volume ${root}:${packageDir} -w ${packageDir}/${workDir}"

    if isRunningInCI ; then
        jobContainerID=$(docker ps -q -f "label=com.gitlab.gitlab-runner.job.id=${ciJobID}")
        volumeOption="--volumes-from ${jobContainerID} -w ${ciProjectDir}/${ciProjectSubDir}"
    fi

    echo "${volumeOption}"
}

echo $(getDockerVolumeOption)
