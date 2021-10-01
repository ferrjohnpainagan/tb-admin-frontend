import React from 'react'
import BookingsToday from './BookingsToday'
import CartrunkCard from './CartrunkCard'
import DeliveriesCard from './DeliveriesCard'


const Wrapper: React.FC<any> = (props) => {


  return (
    <>
      Header
      <BookingsToday />
      <CartrunkCard />
      <DeliveriesCard />
      Footer
    </>
  )
}

export default Wrapper
