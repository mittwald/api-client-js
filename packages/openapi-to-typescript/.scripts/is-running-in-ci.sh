function isRunningInCI() {
    [[ -n "${CI_JOB_ID}" && -n "${CI_PROJECT_DIR}" ]] && return
    false
}

echo $(isRunningInCI)
