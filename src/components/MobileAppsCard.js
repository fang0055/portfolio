import React from 'react'
import './MobileAppsCard.css';


function MobileAppsCard(props) {

  return(
    <div className='card'>
        <div className='cardImgCtn'>
            <img src={props.img}
            className='cardImg'/>
        </div>

        <div className='cardTitleCtn'>
            <p className='cardTitle'>{props.title}</p>
        </div>
    </div>
  )
}

export default MobileAppsCard