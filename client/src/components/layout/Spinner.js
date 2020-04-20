import React from "react";
import spinner from "./spinner.gif";

export default () => (
  <section className='container container-center'>
    <img
      src={spinner}
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
      }}
      alt='Loading...'
    />
  </section>
);
