import React from 'react'
import Logo from "../img/sorpresa-logo.png"

const Loader = () => {
  return (
    <>
      <div className="bg-color-gradient w-screen h-screen flex justify-center items-center flex-col" >
        <div className="w-1/2 animate-bounce">
          <img src={Logo} />
        </div>
      </div>
    </>
  )
}

export default Loader
