import React from 'react'

const TextDescription = (props) => {
  return (
    <div className="text-center px-6 mx-auto w-auto sm:px-1 sm:w-[500px] md:w-[600px] lg:w-[900px] lg:px-9 lg:mb-13">
      <p className="text-xs  sm:text-xs lg:text-base">{props.content}</p>
    </div>
  )
}

export default TextDescription
