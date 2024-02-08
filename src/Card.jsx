import React from 'react'
import sport from './assets/sport.jpg'
import star from './assets/star-icon.svg'

export const Card = (props) => {
  return (
    <>
      <div className="card">
            <div className="card-img">
                <img src={props.src} alt={props.name} />
                
            </div>

            <div className="card-content">
                <div className="rating-location">
                    <img src={props.star} alt="" />
                    <p>
                        <span>{props.rating}</span>
                        {props.location}
                    </p>
                </div>

                <div className="card-description">
                    <p>{props.description}</p>
                    <p>
                        <span>{`From $${props.price}`}</span>
                        / person
                    </p>
                </div>
            </div>

      </div>  
    </>
  )
}
