import * as React from "react";
import "./Loader.css";

const Loader = (): JSX.Element => {
  return (
    <div>
      <div className="jumping-dots-loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="moving-gradient"></div>
    </div>
  );
};

export default Loader;
