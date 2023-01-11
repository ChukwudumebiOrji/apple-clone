import { RxCaretRight } from "react-icons/rx"

const ProductLink = ({ linkName, linkIcon }: any) => {
  return (
    <li>
      <a href="" className="flex items-center justify-center gap-1 ">
        <span>{linkName}</span> {!!linkIcon ? linkIcon : <RxCaretRight />}
      </a>
    </li>
  )
}

export default ProductLink
