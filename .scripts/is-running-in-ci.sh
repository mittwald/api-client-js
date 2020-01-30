function isRunningInCI() {
    if [[ -n "${CI_JOB_ID}" && -n "${CI_PROJECT_DIR}" ]]; then
        return 0
    fi
    return 1
}
