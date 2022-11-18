import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

const imgAlt = "avatar_img";

function createCard(contact) {
  // 当createCard函数被调用时，传进来的是contacts数组中的一个对象，而不是整个数组
  return (
    <Card
      name={contact.name}
      img={contact.imgURL}
      alt={imgAlt}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar
        img={
          "https://media.gettyimages.com/id/1170383972/photo/taylor-swift-attends-the-2019-mtv-video-music-awards-at-prudential-center-on-august-26-2019.jpg?s=612x612&w=gi&k=20&c=5gtR_5WjtnQPWM6RDELGRlDlycdHz7h67ABJYHPaATQ="
        }
      />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
