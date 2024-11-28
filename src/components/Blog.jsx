import blogBigImg from "./../assets/blog-big.png";
import imgSm1 from "../assets/blog-sm-1.png";
import imgSm2 from "../assets/blog-sm-2.png";
import imgSm3 from "../assets/blog-sm-3.png";
import imgSm4 from "../assets/blog-sm-4.png";

import BlogCard from "./BlogCard";
export default function Blog() {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl pb-2 font-bold bg-gradient-to-r from-fuchsia-400 via-fuchsia-300 to-yellow-600 bg-clip-text text-transparent">
        A lot is happening, <br /> We are blogging about it.
      </h2>
      <div className="lg:flex justify-between gap-10 mt-20">
        <div className="lg:w-2/4  text-white lg:mr-24 mb-20 lg:mb-0">
          <div className="bg-blue-950 lg:w-96">
            <img className="lg:w-96" src={blogBigImg} alt="blog-big" />
            <div className="p-5">
              <span className="text-sm">may 18, 2024</span>
              <h2 className="font-bold mt-5 lg:mb-80 mb-40">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </h2>
              <p>Read Full Article</p>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4">
          <BlogCard img={imgSm1} />
          <BlogCard img={imgSm2} />
        </div>
        <div className="lg:w-3/4">
          <BlogCard img={imgSm3} />
          <BlogCard img={imgSm4} />
        </div>
      </div>
    </div>
  );
}
