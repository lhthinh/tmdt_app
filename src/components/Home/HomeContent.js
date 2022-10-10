import React, { useState } from "react";

export default function HomeContent() {
  var [show, isShow] = useState(false);
  return (
    <div>
      <button onClick={() => isShow(false)}>Show</button>
      <button
        onClick={function () {
          isShow(true);
        }}
      >
        Unshow
      </button>

      <div hidden={show}>You see me</div>
    </div>
  );
}
