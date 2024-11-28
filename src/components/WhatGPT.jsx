import Card from "./Card";

export default function WhatGPT() {
  return (
    <div
      className="bg-gradient-131
     container mx-auto p-12 mb-32 mt-20"
    >
      <div className="lg:flex pt-10 mb-10">
        <h2 className="w-1/3 text-white what-gpt pb-10">What is GPT-3</h2>
        <p className="w-4/5 mr-10 text-primary-text">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className="lg:flex justify-between mt-20 mb-20">
        <h2 className="text-2xl w-80 bg-gradient-to-r mb-10 lg:mb-0 from-fuchsia-400 via-fuchsia-300 to-yellow-600 bg-clip-text text-transparent">
          The possibilities are beyond your imagination
        </h2>
        <p className="bg-gradient-to-r from-fuchsia-400 via-fuchsia-300 to-yellow-600 bg-clip-text text-transparent">
          Explore The Library
        </p>
      </div>
      <div className="lg:flex">
        <Card
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate
        heard oh ought."
        />
        <Card
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Card
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
}
