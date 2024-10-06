const Skills = () => {
    const skills = [
        { icon: 'html5', name: 'HTML' },
        { icon: 'css3-alt', name: 'CSS' },
        { icon: 'js-square', name: 'JavaScript' },
        { icon: 'react', name: 'React' },
        { icon: 'node-js', name: 'Node' },
        { icon: 'python', name: 'Python' },
        { icon: 'swift', name: 'Swift' },
        { icon: 'flutter', name: 'Flutter' },
    ];

    return (
      <div className="py-16 px-8">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex justify-center items-center gap-4 p-4 rounded-lg shadow-md transition-all duration-500 ease-in-out cursor-default hover:from-purple-600 hover:to-indigo-500">
              <i className={`fa-brands fa-${skill.icon} text-2xl`}></i>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Skills;