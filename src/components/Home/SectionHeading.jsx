import React from "react";

function SectionHeading({ secHead, secSubHead }) {
  return (
    <>
      <div className="title">
        <h2 className="fw-700 sec-head">{secHead}</h2>
        <p className="head-para para-c para-f">{secSubHead}</p>
      </div>
    </>
  );
}

export default SectionHeading;
