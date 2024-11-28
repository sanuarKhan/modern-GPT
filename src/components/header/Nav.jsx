import logo from "../../assets/logo.png";
export default function Nav() {
  return (
    <div className="lg:flex sm:block justify-between container mx-auto mb-20 pt-16">
      <ul className="text-white lg:flex  sm:block items-center">
        <li className="m-3">
          <img src={logo} alt="" />
        </li>
        <li className="m-3">Home</li>
        <li className="m-3">What is GPT?</li>
        <li className="m-3">Open AI</li>
        <li className="m-3">Case Studies</li>
        <li className="m-3">Library</li>
      </ul>
      <div className="flex items-center">
        <button className="text-white p-10">Sign in</button>
        <button className="text-white  bg-orange-600 rounded pl-10 pr-10 pt-3 pb-3">
          Sign up
        </button>
      </div>
    </div>
  );
}
