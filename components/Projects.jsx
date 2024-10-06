import { projectData } from './data.js';

const Projects = () => {
  return (
    <div className="py-16 px-8">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectData && projectData.map((project) => (
          <div className="border border-gray-300 p-5 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg" key={project.id}>
            <div className="flex justify-between items-start mb-5">
              <i className="fa-regular fa-folder-open text-4xl text-yellow-400"></i>
              <div className="flex gap-2">
                <a href={project.gitHubLink} className="transition-all duration-500 ease-in-out hover:text-yellow-400">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <h3 className="text-xl mb-2">{project.title}</h3>
            <p className="text-base text-gray-400">{project.description}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Projects;