export default function BlogCard(props) {
  const data = props;
  console.log(data);
  return (
    <div>
      <div className=" text-white mb-10">
        <img className="w-100" src={data.img} alt="blog-big" />
        <div className="p-5 bg-blue-950">
          <span className="text-sm"> may 18, 2024</span>
          <h2 className="font-bold mt-5 mb-16">
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </h2>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
}
