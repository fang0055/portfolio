import React, {useState} from 'react'
import './DesignWorksCard.css';

function DesignWorksCard(props) {
    
    const [isOver, setIsMouseOver] = useState(false)

  return(
    <div className={props.card.typeTall ? 'designCardTall' : 'designCard'}
    onMouseOver={ ()=> setIsMouseOver(true) }
    onMouseOut={ ()=> setIsMouseOver(false) } >
        <div className={props.card.typeTall ? 'designCardImgCtnTall' : 'designCardImgCtn'}>
          <a href={ props.card.preview } target="blank">
            <img src= { isOver ? props.card.hover : props.card.img }
            className={props.card.typeTall ? 'designCardImgTall' : 'designCardImg'}/>
          </a>
        </div>

        <div className='designCardTitleCtn'>
            <p className='designCardTitle'>{props.card.title}</p>
            <a className='previewBtn' href={props.card.preview} target='blank'>View</a>
        </div>
    </div>
  )
}

export default DesignWorksCard