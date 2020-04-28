import React, {useState} from 'react'
import './WebAppsCard.css';


function WebAppsCard(props) {
    
    const [isOver, setIsMouseOver] = useState(false)

  return(
    <div className='webCard'
    onMouseOver={ ()=> setIsMouseOver(true) }
    onMouseOut={ ()=> setIsMouseOver(false) } >
        <div className='webCardImgCtn'>
          <a href={ props.card.preview } target="blank">
            <img src= { isOver ? props.card.hover : props.card.img }
            className='webCardImg' alt='image of web apps'/>
          </a>
        </div>

        <div className='webCardTitleCtn'>
            <p className='webCardTitle'>{props.card.title}</p>
            <a className='webRepoBtn' href={props.card.repo} target='blank'>Repo</a>
        </div>
    </div>
  )
}

export default WebAppsCard