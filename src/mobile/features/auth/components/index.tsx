import React, { useState, useEffect } from 'react'
import Login from './Login'

const Wrapper: React.FC<any> = (props) => {

  const hashes = ["#login"]

  const currentPage = hashes.find(
    hash => hash === props.history.location.hash
  )

  const [page, setPage] = useState(currentPage)

  useEffect(() => {
    setPage(currentPage)
  }, [])

  const renderComponent = () => {
    switch (props.history.location.hash) {
      case "#login":
        return <Login {...props} />
      default:
        props.history.push("/admin/auth#login")
    }
  }

  return (
    <>
      {renderComponent()}
    </>
  )
}

export default Wrapper
