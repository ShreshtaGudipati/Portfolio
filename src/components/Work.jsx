
/**
 * Components
 */

import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Disaster management website',
      tags: ['Github'],
      projectLink: 'https://github.com/ShreshtaGudipati/disaster-management'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Basic blog app',
      tags: ['Github'],
      projectLink: 'https://github.com/ShreshtaGudipati/Blogapp'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'AI Travel planner',
      tags: ['Github'],
      projectLink: 'https://github.com/ShreshtaGudipati/Smart-Travel-planner'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Resume analyzer',
      tags: ['Github'],
      projectLink: 'https://github.com/ShreshtaGudipati/Resume_App'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'Crop care',
      tags: ['Github'],
      projectLink: 'https://github.com/ShreshtaGudipati/crop-care'
    },
    
  ];
const Work = () => {
  return (
    <section
    id="work"
    className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio Highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 
            grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink },
                    key)=>(
                        <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
            </div>
        </div>
    </section>
  )
}

export default Work
