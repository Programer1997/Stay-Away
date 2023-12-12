import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
//import { getLocation } from "../../hooks/geoLib";

const NewPropertyForm = (props) => {
  const { setShowForm, animation, setAnimation } = props;
  const { user } = useContext(AuthContext);
  //console.log(user);

  const [propertyData, setPropertyData] = useState({
    title: "",
    desc: "",
    cheapestPrice: "",
    address: "",
    rating: "5",
    city: "",
    photos: [], // save photos here
    user: user.details._id,
    location: {
      type: "Point",
      coordinates: [43.226, -79.875],
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  /*
  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    const formData = new FormData();
    files.forEach((file, i) => {
      formData.append(`photos`, file);
    });

    axios.post("/property/register", formData).then((response) => {
      setPropertyData({ ...propertyData, photos: response.data.photos });
    });
  };*/

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar la petición POST al servidor para guardar la propiedad
    // Por ejemplo:
    axios
      .post("/hotels/new", propertyData)
      .then((response) => {
        console.log("Property created:", response.data);
        setShowForm(false);
        setAnimation(false);
      })
      .catch((error) => {
        console.error("Error creating property: ", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`formNewProperty ${animation ? "active" : ""}`}
    >
      <legend>Lets to Set it ! your New Property</legend>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={propertyData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="desc"
        placeholder="Description"
        value={propertyData.desc}
        onChange={handleChange}
      />
      <input
        type="number"
        name="cheapestPrice"
        placeholder="Price"
        value={propertyData.cheapestPrice}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={propertyData.address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={propertyData.city}
        onChange={handleChange}
      />
      {/*<input className="fileButton" type="file" name="photos" multiple />*/}
      <button type="submit" className="btn btn-success">
        Save Property
      </button>
    </form>
  );
};

export default NewPropertyForm;
