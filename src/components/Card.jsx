import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} alt={props.alt} />
        {/*如何将该图像属性传递给新建的Avatar组件 */}
      </div>
      <div className="bottom">
        <Info tel={props.tel} email={props.email} />
      </div>
    </div>
  );
}

export default Card;
