import React from "react"

const Footer = () => {
  return (
    <div className="bg-footer-bg flex items-center flex-col">
      <div className="text-footer-text-color text-xs pt-4 pb-3 container ">
        <ol className="list-decimal ml-4  mb-[9.6px]">
          <li>
            Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3
            or later paired with iPhone 6s or later. New subscribers only.
            £9.99/month after trial. Plan automatically renews until cancelled.
            <a href="" className="text-footer-link-color">
              Terms
            </a>{" "}
            apply.
          </li>
        </ol>
        <p className=" mb-[9.6px]">
          A subscription is required for Apple Fitness+.
        </p>
        <p className=" mb-[9.6px]">
          Apple Fitness+ requires iPhone 8 or later with iOS 16.1 or later.
        </p>
        <p className=" mb-[9.6px]">
          Apple Fitness+ requires Apple Watch Series 3 or later. Available when
          paired with iPhone 6s or later with iOS 14.3 or later.
        </p>
        <p className=" mb-[9.6px]">
          Fitness app on Apple TV requires tvOS 14.3 or later.
        </p>
        <p className=" mb-[9.6px]">
          Fitness app on iPad requires iPadOS 14.3 or later.
        </p>
        <p className=" mb-[9.6px]">
          To get the newest features, make sure your devices are using the
          latest software versions.
        </p>
      </div>
      <hr />
      <nav className="w-full container flex justify-between">
        <div>
          <h2>Shop and Learn</h2>
          <ul></ul>
        </div>
        <div>
          <div>
            <h2>Services</h2>
            <ul></ul>
          </div>
          <div>
            <h2>Account</h2>
            <ul></ul>
          </div>
        </div>
        <div>
          <h2>Apple Store</h2>
          <ul></ul>
        </div>
        <div>
          <div>
            <h2>For Business.</h2>
            <ul>
              <li>
                <a href="">Apple and Business</a>
              </li>
              <li>
                <a href="">Shop for Business</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>For Education.</h2>
            <ul>
              <li>
                <a href="">Apple and Education</a>
              </li>
              <li>
                <a href="">Shop for University</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>For Healthcare.</h2>
            <ul></ul>
          </div>
        </div>
        <div>
          <div>
            <h2>Apple Values</h2>
            <ul>
              <li>
                <a href="">Accessibility</a>
              </li>
              <li>
                <a href="">Education</a>
              </li>
              <li>
                <a href="">Environment</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Supplier Responsibility</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>About Apple</h2>
            <ul>
              <li>
                <a href="">Newsroom</a>
              </li>
              <li>
                <a href="">Apple Leadership</a>
              </li>
              <li>
                <a href="">Career Opportunities</a>
              </li>
              <li>
                <a href="">Warranty</a>
              </li>
              <li>
                <a href="">Investors</a>
              </li>
              <li>
                <a href="">Ethics & Compliance</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">European Job Creation</a>
              </li>
              <li>
                <a href="">Contact Apple</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div></div>
    </div>
  )
}

export default Footer
