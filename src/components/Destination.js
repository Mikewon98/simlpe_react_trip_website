import React from "react";
import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destination</h1>
      <p>Tours give you the oppourtunity to see a lot, within a time frame</p>

      <DestinationData
        cName='first-des'
        heading='Taal Volacano, Batangas'
        text=' Ullamco non aliquip eiusmod nostrud quis elit cillum veniam enim
          laboris nisi reprehenderit. Voluptate aliquip incididunt cillum amet
          voluptate minim laboris dolor id. Enim incididunt velit mollit
          consectetur aliquip. Lorem consequat veniam cillum eiusmod velit esse
          reprehenderit do ex incididunt officia ad. Qui velit labore est duis
          id dolor. Eu cillum aliqua officia commodo eiusmod veniam ea.'
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        cName='first-des-reverse'
        heading='Mt.Daguldul, Batangas'
        text=' Ullamco non aliquip eiusmod nostrud quis elit cillum veniam enim
          laboris nisi reprehenderit. Voluptate aliquip incididunt cillum amet
          voluptate minim laboris dolor id. Enim incididunt velit mollit
          consectetur aliquip. Lorem consequat veniam cillum eiusmod velit esse
          reprehenderit do ex incididunt officia ad. Qui velit labore est duis
          id dolor. Eu cillum aliqua officia commodo eiusmod veniam ea.'
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
