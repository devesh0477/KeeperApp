import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footerfunc() {
  return (
    <footer>
      <p> Copyright ⓒ {year} </p>
    </footer>
  );
}

export default Footerfunc;
