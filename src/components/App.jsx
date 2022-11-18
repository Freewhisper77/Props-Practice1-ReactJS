import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

const imgAlt = "avatar_img";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar
        img={
          "https://media.gettyimages.com/id/1170383972/photo/taylor-swift-attends-the-2019-mtv-video-music-awards-at-prudential-center-on-august-26-2019.jpg?s=612x612&w=gi&k=20&c=5gtR_5WjtnQPWM6RDELGRlDlycdHz7h67ABJYHPaATQ="
        }
      />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        alt={imgAlt}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        alt={imgAlt}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        alt={imgAlt}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
