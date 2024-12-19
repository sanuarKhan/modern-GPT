const data = [
  { img: "/assets/google.png" },
  { img: "/assets/slack.png" },
  { img: "/assets/atlassian.png" },
  { img: "/assets/dropbox.png" },
  { img: "/assets/shopify.png" },
];

export default function Sponsors() {
  return (
    <div className="flex flex-col lg:flex-row container mx-auto lg:p-14 justify-center">
      {data.map((item, index) => (
        <img
          className="lg:mr-10  lg:m-0 m-12"
          key={index}
          src={item.img}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
}
