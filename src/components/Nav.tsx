import React from "react"
import { BsApple, BsSearch, BsBag } from "react-icons/bs"

const Nav = () => {
  return (
    <ul className=" w-full flex justify-center items-center gap-10 h-11 text-xs bg-black text-nav-link fixed left-0 top-0 z-20">
      <li>
        <a href="">
          <BsApple />
        </a>
      </li>
      <li>
        <a href="">Store</a>
      </li>
      <li>
        <a href="">Mac</a>
      </li>
      <li>
        <a href="">iPad</a>
      </li>
      <li>
        <a href="">iPhone</a>
      </li>
      <li>
        <a href="">Watch</a>
      </li>
      <li>
        <a href="">AirPods</a>
      </li>
      <li>
        <a href="">TV & Home</a>
      </li>
      <li>
        <a href="">Only on Apple</a>
      </li>
      <li>
        <a href="">Accessories</a>
      </li>
      <li>
        <a href="">Support</a>
      </li>
      <li>
        <a href="">
          <BsSearch />
        </a>
      </li>
      <li>
        <a href="">
          <BsBag />
        </a>
      </li>
    </ul>
  )
}

export default Nav
