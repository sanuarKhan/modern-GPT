import logo from "/assets/logo.png";
export default function FooterLink() {
  return (
    <div className="flex lg:mt-10 mb-20 justify-center">
      <div className="w-2/5 text-white">
        <img src={logo} alt="logo" />
        <p className="lg:w-1/2 m-5 ml-0 lg:text-start">
          Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
        </p>
      </div>
      <div className="lg:w-1/5 text-start hidden lg:block">
        <ul>
          <li className="font-bold p-5 text-xl">Links</li>
          <li className="p-5">Overons</li>
          <li className="p-5">Social Media</li>
          <li className="p-5">Counters</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
      <div className="lg:w-1/5 text-start hidden lg:block">
        <ul>
          <li className="font-bold p-5 text-xl">Company</li>
          <li className="p-5">Terms & Conditions</li>
          <li className="p-5">Privacy Policy</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
      <div className="lg:w-1/5 text-start hidden lg:block">
        <ul>
          <li className="font-bold p-5 text-xl">Get in touch</li>
          <li className="p-5 w-48">Crechterwoord K12 182 DK Alknjkcb</li>
          <li className="p-5">+880199451</li>
          <li className="p-5">khan@info.web</li>
        </ul>
      </div>
    </div>
  );
}
