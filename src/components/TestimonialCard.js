import React from 'react'
import '../styles/testimonialCard.css'

function TestimonialCard(props) {
  return (
    <div className='test-card-container'>
        <div className='test-card-wrapper'>
            <div className='test-card-upper'><img src={props.image}/></div>
            <div className='test-card-bottom'>
                <p>{props.body}</p>
                <img src={props.stars}/>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard