import React from "react";

function BasicEvent() {

  const handleclick = () => {
    alert("Button was click");
  };

  const handleMouseEnter = () => {
    console.log("mouse entered the button");
  };

  const handelMouseleave = () => {
    console.log("mouse leave the button");
  };

  const handleinputchange = (event) => {
    console.log("input value:", event.target.value);
  };

  return (
    <div>
      <h2>multiple event types</h2>

      <button
        onClick={handleclick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handelMouseleave}
        className="text-red-500 "
      >
        hover and click me!
      </button>

      <br />

      <input
        type="text"
        onChange={handleinputchange}
        placeholder="type something..."
      />
    </div>
  );
}

export default BasicEvent;