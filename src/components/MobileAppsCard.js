import React, {useState} from 'react'
import './MobileAppsCard.css';


function MobileAppsCard(props) {
    
    const [isOver, setIsMouseOver] = useState(false)

  return(
    <div className='card'
    onMouseOver={ ()=> setIsMouseOver(true) }
    onMouseOut={ ()=> setIsMouseOver(false) } >
        <div className='cardImgCtn'>
            <img src= { isOver ? props.card.gif : props.card.img }
            className='cardImg' alt='image of mobile apps'/>
        </div>

        <div className='cardTitleCtn'>
            <div className='cardTitle'>
              <span>{props.card.title}</span>
              <span className='language'>{props.card.language}</span>
            </div>
            <a className='repoBtn' href={props.card.repo} target='blank'>Repo</a>
        </div>
    </div>
  )
}

export default MobileAppsCard