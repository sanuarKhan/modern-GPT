import Divider from "./Divider";

export default function Card(props) {
  const data = props;

  return (
    <div className="card lg:w-1/3 pr-10 mb-10">
      <Divider />

      <h3 className="text-white text-1xl mb-8"> {data.title}</h3>
      <p className="text-primary-text">{data.text}</p>
    </div>
  );
}
