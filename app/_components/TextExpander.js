"use client"
import { useState } from "react"
function TextExpander({children}) {
    const [expanded, setExpanded] = useState(false);
    const displayText = expanded ? children :
    children.split(" ").slice(0,40).join(" ") + "..."

    return (
        <span>
          {displayText}{' '}
          <button
            className='text-primary-700 border-b border-primary-700 leading-3 pb-1'
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show less' : 'Show more'}
          </button>
        </span>
      );
    }
    

export default TextExpander
