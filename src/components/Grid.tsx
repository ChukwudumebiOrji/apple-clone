import React from "react"
import { BsApple, BsArrowUpRight } from "react-icons/bs"
import ProductDesc from "./ProductDesc"
import ProductLink from "./ProductLink"

const Grid = () => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 bg-white md:px-4 py-4">
        {/* APPLE WATCH  */}
        <ProductDesc
          secondHeading={
            <h2 className="flex items-center justify-center text-[32px] font-semibold tracking-[-0.002em] uppercase">
              <BsApple />
              watch
            </h2>
          }
          productHeading="ultra"
          productText="Adventure awaits"
          productStyle="bg-grid-item-1-bg grid-box"
          productHeadingStyle="uppercase text-grid-item-1-text text-xs  tracking-widest"
          productTextStyle="text-lg mt-[5px] font-normal tracking-[0.009em]"
          linksStyle="text-lg flex justify-center gap-8 mt-3 tracking-[.012em] text-blue-link"
        >
          <ProductLink linkName="Learn more" />
          <ProductLink linkName="Buy" />
        </ProductDesc>

        {/* FITNESS+  */}
        <ProductDesc
          secondHeading={
            <h2 className="flex items-center justify-center text-[32px] font-semibold tracking-[-0.002em] uppercase">
              <BsApple />
              Fitness+
            </h2>
          }
          productText="Welcome to the year of you."
          secondText="Now all you need is iPhone."
          productStyle="bg-grid-item-2-bg grid-box"
          productHeadingStyle="uppercase text-grid-item-1-text text-xs  tracking-widest"
          productTextStyle="text-[18px] mt-[5px] font-normal tracking-[0.009em]"
          secondTextStyle="text-[18px] mt-[5px] font-normal tracking-[0.009em]"
          linksStyle="text-lg flex justify-center gap-8 mt-3 tracking-[.012em] text-blue-link"
        >
          <ProductLink linkName="Learn more" />
          <ProductLink
            linkName={
              <>
                Try it free<sup>1</sup>
              </>
            }
            linkIcon={<BsArrowUpRight />}
          />
        </ProductDesc>

        {/* GIFT  */}
        <ProductDesc
          productHeading="A gift for every wish."
          productText="Find something for everyone"
          secondText="this Lunar New Year."
          productStyle="bg-grid-item-3-bg grid-box"
          productHeadingStyle="text-[32px] font-semibold tracking-[-0.002em] text-white"
          productTextStyle="text-[18px] mt-[5px] font-normal tracking-[0.009em] text-white"
          secondTextStyle="text-[18px] mt-[5px] font-normal tracking-[0.009em] text-white"
          linksStyle="text-lg flex justify-center gap-8 mt-3 tracking-[.012em] text-white"
        >
          <ProductLink linkName="Shop the gift guide" />
        </ProductDesc>

        {/* IPAD  */}
        <ProductDesc
          productHeading="iPad"
          productText="Loveable. Drawable. Magical."
          productStyle="bg-grid-item-4-bg grid-box"
          productHeadingStyle="text-[32px] font-semibold tracking-[-0.002em] text-black"
          productTextStyle="text-[18px] mt-[5px] font-normal tracking-[0.009em] text-black"
          linksStyle="text-lg flex justify-center gap-8 mt-3 tracking-[.012em] text-blue-link"
        >
          <ProductLink linkName="Learn more" />
          <ProductLink linkName="Buy" />
        </ProductDesc>

        {/* AIRPODS PRO  */}
        <ProductDesc
          productHeading="AirPods Pro"
          productText="Rebuilt from the sound up."
          productStyle="bg-black grid-box"
          productHeadingStyle="text-[32px] font-semibold tracking-[-0.002em] text-white"
          productTextStyle="text-[18px] mt-[5px] font-normal tracking-[0.009em] text-white"
          linksStyle="text-lg flex justify-center gap-8 mt-3 tracking-[.012em] text-blue-link"
        >
          <ProductLink linkName="Learn more" />
          <ProductLink linkName="Buy" />
        </ProductDesc>

        {/* APPLE TV  */}
        <ProductDesc
          secondHeading={
            <h2 className="flex items-center justify-center text-[32px] font-semibold tracking-[-0.002em] uppercase">
              <BsApple />
              tv <span className="clip-text ml-2"> 4k</span>
            </h2>
          }
          productText="The Apple experience."
          secondText="Cinematic in every sense"
          productStyle="bg-grid-item-2-bg grid-box"
          secondHeadingStyle="uppercase text-grid-item-1-text text-xs  tracking-widest"
          productTextStyle="text-[18px] mt-[5px] font-normal tracking-[0.009em]"
          secondTextStyle="text-[18px] mt-[5px] font-normal tracking-[0.009em]"
          linksStyle="text-lg flex justify-center gap-8 mt-3 tracking-[.012em] text-blue-link"
        >
          <ProductLink linkName="Learn more" />
          <ProductLink linkName="Buy" />
        </ProductDesc>
      </div>
    </>
  )
}

export default Grid
