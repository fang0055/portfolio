import React, {useState} from 'react'
import './MobileAppsCard.css';


function MobileAppsCard(props) {
    
    const [isOver, setIsMouseOver] = useState(false)

  return(
    <div className='card'>
        <div className='cardImgCtn'>
            <img src= { isOver ? props.gif : props.img }
            className='cardImg'
            onMouseOver={ ()=> setIsMouseOver(true) }
            onMouseOut={ ()=> setIsMouseOver(false) }
            />
        </div>

        <div className='cardTitleCtn'>
            <p className='cardTitle'>{props.title}</p>
        </div>
    </div>
  )
}

export default MobileAppsCard