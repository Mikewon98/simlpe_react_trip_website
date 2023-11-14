import React from "react";
import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can dicover unique destinations using Google Maps.</p>
      <div className='tripcard'>
        <TripData
          image={Trip1}
          heading='Trip in Indonisia'
          text=' Ullamco non aliquip eiusmod nostrud quis elit cillum veniam enim laboris nisi reprehenderit. Voluptate aliquip incididunt cillum ametvoluptate minim laboris dolor '
        />
        <TripData
          image={Trip2}
          heading='Trip in Malayisia'
          text=' Ullamco non aliquip eiusmod nostrud quis elit cillum veniam enim laboris nisi reprehenderit. Voluptate aliquip incididunt cillum ametvoluptate minim laboris dolor'
        />
        <TripData
          image={Trip3}
          heading='Trip in France'
          text=' Ullamco non aliquip eiusmod nostrud quis elit cillum veniam enim laboris nisi reprehenderit. Voluptate aliquip incididunt cillum ametvoluptate minim laboris dolor'
        />
      </div>
    </div>
  );
};

export default Trip;
