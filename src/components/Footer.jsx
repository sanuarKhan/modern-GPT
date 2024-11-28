import FooterLink from "./FooterLink";
export default function Footer() {
  return (
    <div className=" text-center text-white container mx-auto pt-32">
      <h2 className="text-5xl lg:w-1/2 mx-auto pb-10 font-bold bg-gradient-to-r from-fuchsia-400 via-fuchsia-300 to-yellow-600 bg-clip-text text-transparent">
        Do you want to step in to the future before others
      </h2>
      <button className="border-2 p-4 mt-5 mb-32 leading-loose">
        Request Early Access
      </button>
      <FooterLink />
      <p className="mt-10 pb-10">© 2024 Modern-gpt. All rights reserved.</p>
    </div>
  );
}
