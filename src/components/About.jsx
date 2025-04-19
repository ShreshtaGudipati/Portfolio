/** 
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
*/


const aboutItems = [
    {
      label: 'Project done',
      number: 5
    },
    {
      label:'Coding Problems solved',
      number:200
    }
  ];


const About = () => {

  return (
    <section
    id="about"
    className="section"
    >
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl
        md:p-12 reveal-up">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[90ch]">I’m a passionate and innovative B.Tech Information Technology student with a strong interest in building modern, scalable web applications. With hands-on experience in React.js, Node.js, and emerging AI tools, I enjoy turning ideas into impactful digital solutions. From smart travel planners to AI-based crop health detectors, I’ve led and developed projects that solve real-world problems. I actively serve as an Events and PR Volunteer in a student chapter, where I help organize and promote tech events. I’m always exploring new technologies, collaborating on open-source projects, and aiming to create user-centric applications that truly make a difference.
            </p>
            <div className="flex flex-wrap items-center gap-4
            md:gap-7">
                {
                    aboutItems.map(({label, number}, key)=>(
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                            </div>

                            <p className="text-sm 
                            text-zinc-400">
                                {label}</p>

                        </div>
                    ))
                }

                <img 
                src="/images/logo.svg" 
                alt="Logo"
                width={30}
                height={30} 
                className="ml-auto md:w-[40px] md:h-[40px]" />
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default About
