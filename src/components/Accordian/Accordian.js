import React, { useState } from "react";
import Accordionltem from "./AccordianItem";

const accordianData = [
  {
    title: "Title 1",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum. ",
  },
  {
    title: "Title 2",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum. ",
  },
  {
    title: "Title 3",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum. ",
  },
  {
    title: "Title 4",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum. ",
  },
  {
    title: "Title 5",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum. ",
  },
  {
    title: "Title 6",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum. ",
  },
];

const Accordian = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  return (
    <section className="mx-auto max-w-7xl lg:px-8">
      <div className="w-5/6 sm:w-4/5 flex flex-col gap-y-6 mx-auto justify-center align-center my-10 ">
        {accordianData.map((data, index) => {
          return (
            <Accordionltem
              key={index}
              open={index === open}
              toggle={() => toggle(index)}
              title={data.title}
              desc={data.desc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Accordian;
