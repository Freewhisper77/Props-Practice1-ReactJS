import React from "react";

function Info(props) {
  // 利用React DevTools 检查props名是否一致
  return <p className="info">{props.detailInfo}</p>;
}

export default Info;
