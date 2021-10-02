import React from 'react'

import BackBtn from "../img/back-btn.png"
import Logo from "../img/sorpresa-logo.png"

interface HeaderProps {
  type: string
  showBackBtn?: boolean
  title: string
  accntName?: string
}

const Header = (props: HeaderProps) => {
  return (
    <>
      <div className="w-screen h-20 px-6 bg-defaultGray flex justify-between items-center">
        {props.showBackBtn ? <div>
          <img src={BackBtn} />
        </div> : null}
        <div className="flex">
          <div className="px-2 text-3xl font-bold tracking-wide">
            {props.title}
          </div>
          {props.type === "home" ? <div className="px-2 text-3xl font-bold text-pinkAccntName tracking-wide">{props.accntName + "!"}</div> : null}
        </div>
        <div className="w-11">
          <img src={Logo} />
        </div>
      </div>
    </>
  )
}

export default Header
