import React from "react";

export default function items(props) {
  const { title, img, propertyData, customerData, bookingData } = props;

  return (
    <div className="itemDash">
      <p className="titleItemDashBoard">{title}</p>
      <div className="viewItemDashBoard">
        <img src={img} alt="img" className="imgItemDashBoard" />
        {title === "Sells" ? (
          <p className="textItemDashBoard">{bookingData.length}</p>
        ) : title === "Property" ? (
          <p className="textItemDashBoard">{propertyData.length}</p>
        ) : title === "Bookings" ? (
          <p className="textItemDashBoard">{bookingData.length}</p>
        ) : (
          <p className="textItemDashBoard">{customerData.length}</p>
        )}
      </div>
    </div>
  );
}
