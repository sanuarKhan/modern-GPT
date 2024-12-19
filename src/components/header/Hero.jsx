import Lottie from "lottie-react";
import faceAnimation from "../../face.json";
export default function Hero() {
  return (
    <div className="lg:flex container mx-auto  justify-between">
      <div className="lg:w-1/2">
        <h2 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-300 text-3xl lg:text-6xl bg-clip-text text-transparent lg:leading-snug">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h2>
        <p className="m-4 ml-0 text-primary-text mt-5">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="lg:pl-0 lg:p-10 mt-20 flex flex-col lg:flex-row">
          <input
            type="email"
            className=" bg-sky-950 text-cyan-900 p-4  pr-20 text-center my-5 lg:my-0"
            placeholder="Your Email Address"
          />
          <buttons className="bg-orange-600 rounded p-4  text-white  text-center">
            Get Started
          </buttons>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center lg:mt-32 mt-10 ">
        <div className="flex lg:justify-end lg:items-center lg:absolute lg:ml-20 lg:-mt-28">
          <Lottie
            className="w-full"
            animationData={faceAnimation}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
}
