import { AiOutlineShopping } from "react-icons/ai";
import Image from "next/image";

export default function () {
  return (
    <div className="navbar-container">
  
      <Image
        src="./litton-3.svg"
        alt="Picture of the author"
        width={80}
        height={80}
      />
      <AiOutlineShopping className="shopping-icon"/>
    </div>
  );
}
