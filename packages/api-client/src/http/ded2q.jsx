const ProjectName = (props) => {
    const project = useGetProject(
        {
            path: {
                projectId: props.id,
            },
        },
        {
            loading: <ProjectNameLoading />,
            notFound: <>Not found!</>,
        },
    );

    if (!project.hasLoaded) {
        return project.view;
    }

    return <>{project.data.name}</>;
};
