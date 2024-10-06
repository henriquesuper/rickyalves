const Skills = () => {
    return (
      <div className="py-16 px-8">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-200 text-gray-800 flex justify-center items-center gap-4 p-4 rounded-lg shadow-md transition-all duration-500 ease-in-out cursor-default hover:bg-red-500">
            <i className="fa-brands fa-html5 text-2xl"></i>
            <p>HTML</p>
          </div>
          <div className="skill-card css">
            <i className="fa-brands fa-css3-alt css-icon"></i>
            <p>CSS</p>
          </div>
          <div className="skill-card js">
            <i className="fa-brands fa-js-square js-icon"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-card react">
            <i className="fa-brands fa-react react-icon"></i>
            <p>React</p>
          </div>
          <div className="skill-card node">
            <i className="fa-brands fa-node-js node-icon"></i>
            <p>Node</p>
          </div>
          <div className="skill-card python">
            <i className="fa-brands fa-python python-icon"></i>
            <p>Python</p>
          </div>
          <div className="skill-card swift">
            <i className="fa-brands fa-swift swift-icon"></i>
            <p>Swift</p>
          </div>
          <div className="skill-card docker">
            <i className="fa-brands fa-docker docker-icon"></i>
            <p>Docker</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills;