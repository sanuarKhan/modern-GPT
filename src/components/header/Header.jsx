import Hero from "./Hero";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="w-full mb-10">
      <Nav />
      <Hero />
    </div>
  );
}
