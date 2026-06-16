/**
 * Node modules
 */
import PropTypes from "prop-types";

const linkClassName =
  "h-8 text-sm font-medium text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg hover:bg-zinc-50/10 hover:text-zinc-200 transition-colors";

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    githubLink,
    liveLink,
    classes
}) => {
  const primaryLink = liveLink || githubLink;

  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors "+ classes}>
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img 
            src={imgSrc} 
            alt={title}
            loding='lazy'
            className="img-cover"
            />
        </figure>

        <div className="flex items-center justify-between gap-4">
            <div>
                <h3 className="title-1 mb-3 ">
                    {title}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                    {tags.map((label, key)=>(
                        <span 
                        key={key}
                        className="h-8 text-sm font-medium text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                        >
                            {label}
                        </span>
                    ))}

                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClassName}
                        >
                            GitHub
                        </a>
                    )}

                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClassName}
                        >
                            Live Demo
                        </a>
                    )}
                </div>

            </div>

            {primaryLink && (
                <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 hover:bg-sky-300 transition-colors"
                    aria-label={`Open ${title}`}
                >
                    <span 
                    className="material-symbols-rounded"
                    aria-hidden="true"
                    >
                        arrow_outward
                    </span>
                </a>
            )}
        </div>
    </div>

  )
}

ProjectCard.propTypes={
    imgSrc:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    tags:PropTypes.array.isRequired,
    githubLink: PropTypes.string,
    liveLink: PropTypes.string,
    classes:PropTypes.string
}

export default ProjectCard
