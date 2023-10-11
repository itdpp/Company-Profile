import React from 'react'

const TitleTop = (props) => {
  return (
    <div className="text-left sm:pl-14 md:pl-18 lg:pl-20 xl:pl-[100px] 2xl:pl-[200px]">
    <h2 className="text-[32px] sm:text-[38px] font-medium p-4 lg:text-[44px] xl:py-5">
      {props.content}
    </h2>
  </div>
  )
}

export default TitleTop
