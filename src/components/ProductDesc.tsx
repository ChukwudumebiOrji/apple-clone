import React from "react"

const ProductDesc = ({
  productStyle,
  children,
  productImg,
  productHeading,
  productHeadingStyle,
  secondHeading,
  productText,
  productTextStyle,
  secondText,
  secondTextStyle,
  linksStyle,
}: any) => {
  return (
    <div className={productStyle}>
      {!!secondHeading && <>{secondHeading}</>}
      <h2 className={productHeadingStyle}>{productHeading}</h2>
      <p className={productTextStyle}>{productText}</p>
      {!!secondText && <p className={secondTextStyle}>{secondText}</p>}
      <ul className={linksStyle}>{children}</ul>
      <img src={productImg} alt="" className="" />
    </div>
  )
}

export default ProductDesc
