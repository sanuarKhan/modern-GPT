import { AiOutlineClose } from "react-icons/ai";
import logo from "/assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if the window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(true);
      }
      if (window.innerWidth < 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="lg:flex sm:block justify-between container mx-auto mb-20 pt-16 ">
      <ul className="text-white lg:flex  sm:block items-center relative">
        <li className="m-3">
          <img src={logo} alt="" />
        </li>
        {isMenuOpen && (
          <div className="lg:flex sm:block items-center">
            <li className="m-3 hover:text-purple-500">Home</li>
            <li className="m-3 hover:text-purple-500">What is GPT?</li>
            <li className="m-3 hover:text-purple-500">Open AI</li>
            <li className="m-3 hover:text-purple-500">Case Studies</li>
            <li className="m-3 hover:text-purple-500">Library</li>
          </div>
        )}
      </ul>
      {isMenuOpen ? (
        <div className="flex items-center ">
          <button className="text-white p-10 hover:text-purple-500">
            Sign in
          </button>
          <button className="text-white  bg-orange-600 hover:bg-purple-500 rounded pl-10 pr-10 pt-3 pb-3">
            Sign up
          </button>
          <AiOutlineClose
            className="text-white text-4xl absolute top-20 end-10 lg:hidden"
            onClick={toggleMenu}
          />
        </div>
      ) : (
        <AiOutlineMenu
          className="text-white text-4xl absolute top-20 end-10"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}
