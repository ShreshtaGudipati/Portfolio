/** 
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
*/


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
    {
      imgSrc: '/images/webdev.svg',
      label: 'Full Stack Development',
      desc: 'Web Development'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/github.svg',
      label: 'GitHub',
      desc: 'Code Hosting'
    },
    {
      imgSrc: '/images/dsa.svg',
      label: 'DSA',
      desc: 'Problem Solving'
    },
    {
      imgSrc: '/images/oop.svg',
      label: 'OOP',
      desc: 'Programming'
    },
  ];


const Skill = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 ">
                My Skills
            </h2>


            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] ">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc},key)=>(
                        <SkillCard
                        key={key} 
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}
                        classes=""
                        />

                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill
