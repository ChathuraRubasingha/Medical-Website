import React from 'react'
import '../styles/ServiceCard.css'

function ServiceCard(props) {
  return (
    <div className='service-card-container'>
        <div className='service-card-wrapper'>
            <div className='service-card-upper'><img src={props.image}/></div>
            <div className='service-card-bottom'>
                <h4>{props.title}</h4>
                <p>{props.body}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard