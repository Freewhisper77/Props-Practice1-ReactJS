import React from "react";

function Info(props) {
  return (
    <>
      <p className="info">{props.tel}</p>
      <p className="info">{props.email}</p>
    </>
  );
}

export default Info;
