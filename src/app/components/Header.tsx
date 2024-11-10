import { RiContactsLine } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import Wrapper from './Wrapper';
export default function Header () {
    return (
      <Wrapper>
        <>
      <nav className="flex justify-between items-center py-4 bg-white shadow-md">
        <div className="flex items-center space-x-8">
        <h1 className="text-lg font-bold">GreenMind</h1>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Contact</a> </div>
          <div className="flex items-center gap-6  xl:hidden">
          <BsCart />
          <RiContactsLine />
          <RxDividerVertical />
          <BiMenuAltRight /></div>

          
       
      </nav></>
      </Wrapper>
    )
  }
  