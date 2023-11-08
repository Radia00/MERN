function Project() {
  const projects = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      imageUrl: "images/banner.jpg",
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      imageUrl: "images/banner2.jpg",
    },
    // Add more project data as needed
  ];

  return (
    <div className="container">
      <h1>Project Page</h1>
      <div className="project-list d-flex gap-4 justify-content-center">
        {projects.map((project, index) => (
          <div className="card card-body" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img
              className="img-fluid"
              src={project.imageUrl}
              alt={project.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
