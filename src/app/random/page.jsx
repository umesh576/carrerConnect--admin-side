"use client";
import React, { useState } from "react";

const Dialogbox = () => {
  const [show, setshow] = useState(false);
  //   const openDialog = () => {
  //     show ? "block" : "hidden";
  //   };
  return (
    <div className="text-white">
      <button
        id="openBtn"
        onClick={() => {
          setshow(!show);
        }}
      >
        Open dialog box
      </button>
      <div className={show ? "block" : "hidden"}>
        <div>
          <span>*</span>
          <br />
          <input type="text" name="date" id="box" placeholder="Entername" />
          <br />

          <button>submit</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogbox;
