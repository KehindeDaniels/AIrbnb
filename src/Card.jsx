import React from 'react'
import sport from './assets/sport.jpg'
import star from './assets/star-icon.svg'

export const Card = (props) => {
  let count = props.rating < 5 ? 'sold out': 'Available';
  return (
    <>
      <div className="card">
            <div className="card-img relative">
                <img src={props.src} alt={props.name} className='w-full'/>
                <div className="absolute top-0 bg-slate-50 mt-1 ml-1 px-2 py-1 rounded-md ">{count}</div>
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
