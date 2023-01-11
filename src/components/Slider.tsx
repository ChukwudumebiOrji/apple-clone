import React, { useEffect, useState } from "react"
import Slide from "./Slide"
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md"

const Slider = () => {
  let currentIndex = 0
  const [slidesArr, setSlidesArr] = useState<any[]>([])
  let timeout: number | undefined

  useEffect(() => {
    const slides = Array.from(document.querySelectorAll(".slide"))
    setSlidesArr(slides)
    playSlider() // PLAY THE SLIDER ON INIT
  }, [])

  // PLAY THE SLIDER ON BUTTON CLICK
  const playSlider = () => {}

  // STOP THE SLIDER ON BUTTON CLICK
  const stopSlider = () => {}

  const slidePrev = () => {
    const sliderEl = document.querySelector(".slider") as HTMLDivElement
    const slidesEls = document.querySelectorAll(".slide")

    // CHANGE THE INDEX ON CLICK
    if (currentIndex - 1 === -1) currentIndex = slidesEls.length - 1
    else currentIndex--

    // STYLE TO CHANGE THE POSITION OF THE SLIDER
    sliderEl.style.translate = `calc(-${currentIndex} * (var(--slide-width) + var(--slider-gap)))`
  }

  const slideNext = () => {
    const sliderEl = document.querySelector(".slider") as HTMLDivElement
    const slidesEls = document.querySelectorAll(".slide")

    // CHANGE THE INDEX ON CLICK
    if (currentIndex + 1 === slidesEls.length) {
      currentIndex = 0
    } else {
      currentIndex++
    }

    // STYLE TO CHANGE THE POSITION OF THE SLIDER

    sliderEl.style.transform = `translateX(calc(-${currentIndex} * (var(--slide-width) + var(--slider-gap))))`
  }

  const slideToTarget = (el: any) => {
    const pagesArr = Array.from(document.querySelectorAll(".page"))
    // CHANGE CURRENT SLIDE THEN SLIDE
    currentIndex = el.dataset.index - 1
    slideNext()

    pagesArr.forEach(
      (el: any) => (el.style.backgroundColor = "rgba(0, 0, 0, 0.16)")
    )
    const clickedPage = pagesArr[el.dataset.index] as HTMLDivElement
    clickedPage.style.backgroundColor = "rgba(0, 0, 0, 0.56)"
  }

  return (
    // CONTAINER
    <>
      <div className="slider-container">
        {/* LEFT BUTTON  */}
        <div className="navigation left-navigation" onClick={slidePrev}>
          <MdOutlineArrowBackIosNew />
        </div>

        {/* SLIDER  */}
        <div className="slider">
          <Slide
            index={0}
            bgImg="https://is1-ssl.mzstatic.com/image/thumb/gkWjLqLfF8Pahc6a6Udtxg/1378x774.jpg"
            currentSlide
          />
          <Slide
            index={1}
            bgImg="https://is1-ssl.mzstatic.com/image/thumb/NuIOgsGJ11I4jRoa7-GbSA/1378x774.jpg"
          />
          <Slide
            index={2}
            bgImg="https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/1378x774.jpg"
          />
          <Slide
            index={3}
            bgImg="https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/1378x774.jpg"
          />
          <Slide
            index={4}
            bgImg="https://is1-ssl.mzstatic.com/image/thumb/XoJp7FzEyuPeFp3nZZMHJw/1378x774.jpg"
          />
          <Slide
            index={5}
            bgImg="https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1378x774.jpg"
          />
          <Slide
            index={6}
            bgImg="https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/1378x774.jpg"
          />
        </div>

        {/* RIGHT BUTTON  */}
        <div className="navigation right-navigation" onClick={slideNext}>
          <MdOutlineArrowForwardIos />
        </div>
      </div>
      {/* PAGINATION BAR  */}
      <div className="pagination">
        {slidesArr.map((el, i) => (
          <div
            className="page"
            data-index={i}
            key={i}
            onClick={() => {
              slideToTarget(el)
            }}
          ></div>
        ))}
      </div>
    </>
  )
}

export default Slider
