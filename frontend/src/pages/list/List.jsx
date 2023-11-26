import React, { useState } from 'react';
import './list.css';
import ProfileNav from '../../components/profileNav/ProfileNav';

// Mock data for hotels
const mockHotels = [
  {
    _id: "1",
    name: "Ocean View Retreat",
    type: "Resort",
    city: "Miami",
    address: "123 Beach Ave, Miami, FL",
    distance: "500m from beach",
    title: "Luxury resort with ocean view",
    photos: [
      "/images/room-img1.jpeg",
      "/images/room-img2.jpeg",
      // more photo URLs
    ],
    desc: "A luxurious resort offering stunning ocean views and top-notch amenities.",
    rating: 4.5,
    rooms: ["Deluxe Room", "Standard Room", "Suite"],
    cheapestPrice: 250,
    featured: true,
  },
  {
    _id: "2",
    name: "City Lights",
    type: "Hotel",
    city: "New York",
    address: "456 Urban St, New York, NY",
    distance: "300m from Central Park",
    title: "Modern hotel in the heart of the city",
    photos: [
      "/images/room-img2.jpeg",
      "/images/city-hotel-img2.jpeg",
      // more photo URLs
    ],
    desc: "Experience the vibrant city life with our modern amenities and close proximity to major attractions.",
    rating: 4.3,
    rooms: ["City View Room", "Executive Suite", "Penthouse Suite"],
    cheapestPrice: 300,
    featured: false,
  }

];


const HotelList = () => {
  const [activeHotel, setActiveHotel] = useState(null);

  const toggleAccordion = (hotelId) => {
    setActiveHotel(activeHotel === hotelId ? null : hotelId);
  };

  const handleAddHotel = () => {
    // Logic to handle adding a new hotel
    console.log("Add Hotel button clicked");
  };

  return (
    <>
      <ProfileNav />

      <div className="hotelList">
        <div className="addHotelButtonContainer">
          <button className="addHotelButton" onClick={handleAddHotel}>Add a Hotel</button>
        </div>
        <div>
          {mockHotels.map(hotel => (
            <div className={`hotelCard ${activeHotel === hotel._id ? 'show' : ''}`} key={hotel._id} onClick={() => toggleAccordion(hotel._id)}>
              <div className="hotelCardHeader">
                {hotel.name} - {hotel.type}
              </div>
              <img src={hotel.photos[0]} alt={`${hotel.name}`} className="hotelImage" />
              <div className="hotelCardBody">
                <h3 className="hotelTitle">{hotel.title}</h3>
                <p className="hotelDesc">{hotel.desc}</p>
                <div className="hotelInfo">
                  <p className="hotelLocation">
                    <span className="infoLabel">Location:</span> {hotel.city}, {hotel.address}
                  </p>
                  <p className="hotelDistance">
                    <span className="infoLabel">Distance:</span> {hotel.distance} from main attractions
                  </p>
                  <p className="hotelRating">
                    <span className="infoLabel">Rating:</span> {hotel.rating} / 5
                  </p>
                  <p className="hotelPrice">
                    <span className="infoLabel">Price:</span> Starting at ${hotel.cheapestPrice} per night
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HotelList;