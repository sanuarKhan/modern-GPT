import Lottie from "lottie-react";
import faceAnimation from "../../assets/face.json";
export default function Hero() {
  return (
    <div className="lg:flex container mx-auto">
      <div className="lg:w-1/2">
        <h2 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-300 text-6xl bg-clip-text text-transparent leading-snug">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h2>
        <p className="m-4 ml-0 text-primary-text">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="lg:pl-0 lg:p-10 mt-20">
          <input
            type="email"
            className=" bg-sky-950 text-cyan-900 p-4  pr-20"
            placeholder="Your Email Address"
          />
          <buttons className="bg-orange-600 rounded p-4">Get Started</buttons>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center mt-32">
        <Lottie className="w-1/2" animationData={faceAnimation} loop={true} />
      </div>
    </div>
  );
}
