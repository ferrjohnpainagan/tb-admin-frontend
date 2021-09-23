import React from 'react'
import BookingCards from './BookingCards'
import CartrunkCard from './CartrunkCard'
import DeliveriesCard from './DeliveriesCard'


const Wrapper: React.FC<any> = (props) => {


  return (
    <>
      Header
      <BookingCards />
      <CartrunkCard />
      <DeliveriesCard />
      Footer
    </>
  )
}

export default Wrapper
