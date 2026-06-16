

/**

 * Components

 */



import ProjectCard from "./ProjectCard";



const works = [

  {

      imgSrc: '/images/social-media.jpeg',

      title: 'Multi-Agent social media content generator',

      tags: ['AI', 'Full Stack'],

      githubLink: 'https://github.com/ShreshtaGudipati/ai-social-media-content-generator',

      liveLink: 'https://ai-social-media-content-generator-ecru.vercel.app/'

    },

    {

      imgSrc: '/images/project-2.jpg',

      title: 'Basic blog app',

      tags: ['React', 'Node.js'],

      githubLink: 'https://github.com/ShreshtaGudipati/Blogapp'

    },

    {

      imgSrc: '/images/project-3.jpg',

      title: 'AI Travel planner',

      tags: ['AI', 'React'],

      githubLink: 'https://github.com/ShreshtaGudipati/Smart-Travel-planner'

    },

    {

      imgSrc: '/images/project-4.jpg',

      title: 'Resume analyzer',

      tags: ['AI', 'NLP'],

      githubLink: 'https://github.com/ShreshtaGudipati/Resume_App'

    },

    {

      imgSrc: '/images/project-5.jpg',

      title: 'Crop care',

      tags: ['AI', 'Computer Vision'],

      githubLink: 'https://github.com/ShreshtaGudipati/crop-care',

      liveLink: 'https://smartcropcare.netlify.app/'

    },

    {

      imgSrc: '/images/project-1.jpg',

      title: 'Disaster management website',

      tags: ['React', 'Full Stack'],

      githubLink: 'https://github.com/ShreshtaGudipati/disaster-management'

    },

    {

      imgSrc: '/images/hyperbolic dnn.jpeg',

      title: 'Hyperbolic deep neural networks for chest abnormalities classification',

      tags: ['Deep Learning', 'Python']

    },

  ];

const Work = () => {

  return (

    <section

    id="work"

    className="section"

    >

        <div className="container">

            <h2 className="headline-2 mb-8">

                My portfolio Highlights

            </h2>

            <div className="grid gap-x-4 gap-y-5 

            grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">

                {works.map(({ imgSrc, title, tags, githubLink, liveLink },

                    key)=>(

                        <ProjectCard 

                            key={key}

                            imgSrc={imgSrc}

                            title={title}

                            tags={tags}

                            githubLink={githubLink}

                            liveLink={liveLink}

                            classes=""

                        />

                    ))}

            </div>

        </div>

    </section>

  )

}



export default Work

