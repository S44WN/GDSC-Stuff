import React from "react";
import Collapse from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordionltem = ({ open, toggle, title, desc }) => {
  return (
    <div
      className="grid grid-cols-6 gap-4 items-center shadow-lg hover:shadow-2xl  bg-orange-200 rounded-xl py-2 px-4 transform transition-all hover:-translate-y-2 duration-300"
      onClick={toggle}
    >
      <p className="col-start-1 col-end-6 font-semibold">{title}</p>
      <div className="col-start-6 col-end-7">
        {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>

      <Collapse isOpened={open}>
        <p className="col-start-1 col-end-6 text-gray-500">{desc}</p>
      </Collapse>
    </div>
  );
};

export default Accordionltem;
