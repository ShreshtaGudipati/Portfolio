/** 
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
*/


/**
 * Nodemodules
 */
import PropTypes from 'prop-types';

import React from 'react'


/**Primary btn */

const ButtonPrimary=({
    href,
    target='_self',
    label,
    icon,
    download,
    classes
})=>{
  
    if (href) {
        return (
            <a 
            href={href}
            target={target}
            className={"btn btn-primary " + classes}
            download={download}
            >
                {label}

                {icon ? 
                <span className="material-symbols-rounded"
                aria-hidden="true">
                    {icon}
                </span>
                :undefined
                }
            </a>
        )
    }else{
        return(
            <button className={"btn btn-primary " + classes}
            >
                {label}

                {icon ? 
                <span className="material-symbols-rounded"
                aria-hidden="true">
                    {icon}
                </span>
                :undefined
                }


            </button>

        )
    }
    
}
ButtonPrimary.propTypes={
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string,
    download:PropTypes.bool

}


/**
 * Button outline
 */
const ButtonOutline=({
    href,
    target='_self',
    label,
    icon,
    classes
})=>{
  
    if (href) {
        return (
            <a 
            href={href}
            target={target}
            className={"btn btn-outline " + classes}
            >
                {label}

                {icon ? 
                <span className="material-symbols-rounded"
                aria-hidden="true">
                    {icon}
                </span>
                :undefined
                }
            </a>
        )
    }else{
        return(
            <button className={"btn btn-outline " + classes}
            >
                {label}

                {icon ? 
                <span className="material-symbols-rounded"
                aria-hidden="true">
                    {icon}
                </span>
                :undefined
                }


            </button>

        )
    }
    
}
ButtonPrimary.propTypes={
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string

}

export { ButtonPrimary,ButtonOutline}
