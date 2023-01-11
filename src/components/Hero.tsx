import React from "react"
import { BsApple } from "react-icons/bs"
import ProductDesc from "./ProductDesc"
import ProductLink from "./ProductLink"
import heroImg from "../assets/hero-img.png"

const Hero = () => {
  return (
    <>
      {/* 14 PRO  */}
      <ProductDesc
        productText="Pro. Beyond."
        productHeading="iPhone 14 Pro"
        productStyle="text-center pt-[61px] bg-black text-neutral-50"
        productHeadingStyle="text-[48px] font-semibold tracking-[-0.002em]"
        productTextStyle="text-2xl mt-[5px] font-normal tracking-[0.009em]"
        linksStyle="flex justify-center gap-8 mt-3 text-xl tracking-[.012em] text-blue-link"
      >
        <ProductLink linkName="Learn more" />
        <ProductLink linkName="Buy" />
      </ProductDesc>

      {/* 14  */}
      <ProductDesc
        productText="Big and bigger."
        productHeading="iPhone 14"
        productStyle="text-center pt-[61px] bg-neutral-50 text-black"
        productHeadingStyle="text-[48px] font-semibold tracking-[-0.002em]"
        productTextStyle="text-2xl mt-[5px] font-normal tracking-[0.009em]"
        linksStyle="flex justify-center gap-8 mt-3 text-xl tracking-[.012em] text-blue-link"
      >
        <ProductLink linkName="Learn more" />
        <ProductLink linkName="Buy" />
      </ProductDesc>

      {/* APPLE WATCH  */}
      <ProductDesc
        productText="A healthy leap ahead."
        productHeading="series 8"
        secondHeading={
          <h2 className=" text-white flex items-center justify-center text-[48px] font-semibold tracking-[-0.002em] uppercase">
            <BsApple />
            watch
          </h2>
        }
        productStyle="text-center pt-[61px] bg-black text-neutral-50"
        productHeadingStyle="uppercase text-apple-watch-red tracking-widest"
        productTextStyle="text-2xl mt-[5px] font-normal tracking-[0.009em]"
        linksStyle="flex justify-center gap-8 mt-3 text-xl tracking-[.012em] text-blue-link"
      >
        <ProductLink linkName="Learn more" />
        <ProductLink linkName="Buy" />
      </ProductDesc>
    </>
  )
}

export default Hero
