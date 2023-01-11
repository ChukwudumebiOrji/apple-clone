import React, { useState } from "react"

const Slide = ({ bgImg, slideText, index, currentSlide }: any) => {
  const [showContent, setShowContent] = useState(false)

  return (
    <div
      className="slide"
      data-index={index}
      style={{ backgroundImage: `url(${bgImg})` }}
      id={currentSlide && "current-slide"}
    >
      {slideText}
    </div>
  )
}

export default Slide
