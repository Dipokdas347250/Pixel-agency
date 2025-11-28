import React from 'react'

const Container = ({children ,className}) => {
  return (
    <div className={` container max-w-[1130px] mx-auto px-2.5 ${className} `}>{children}</div>
  )
}

export default Container