import React from 'react'
import { Card } from './Card'
import wedding from './assets/wedding.jpg'
import sport from './assets/sport.jpg'
import mountain from './assets/mountain-bike.jpg'
import star from './assets/star-icon.svg'

const cardDetails = [
    {
        name: 'sport',
        src: sport,
        star: star,
        rating: '5.0',
        location: '(6) .USA',
        description: 'Life lessons with Katie Zaferes',
        price: "136"
    },

    {
        name: 'wedding',
        src: wedding,
        rating: '5.0',
        location: '(30) .USA',
        description: 'Learn wedding photography',
        price: 125
    },

    {
        name: 'mountain',
        src: mountain,
        rating: '4.8',
        location: '(6) .USA',
        description: 'Life lessons with Katie Zaferes',
        price: 136
    }
   
]

const SectionCard = () => {
    const cardArr = cardDetails.map((cards)=>(
        <Card
            
            src={cards.src}
            rating={cards.rating}
            price={cards.price}
            star={cards.star}

        />
    ))
  return (
    <div className='flex gap-6'>
       {cardArr} 
    </div>
  )
}

export default SectionCard