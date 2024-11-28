import { Typewriter } from "react-simple-typewriter";

export default function UnderContruction() {
  return (
    <div>
      <h2 className="bg-gradient-to-r from-orange-950 via-red-500 to-amber-950  text-transparent bg-clip-text text-4xl align-middle text-center p-10">
        you are{" "}
        <Typewriter
          words={["under construction...", "under construction..."]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={200}
          cursorColor="pink"
        />
      </h2>
    </div>
  );
}
