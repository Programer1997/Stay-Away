import React, { useState } from "react";
import axios from "axios";

const NewPropertyForm = (props) => {
  const { setShowForm } = props;
  const [propertyData, setPropertyData] = useState({
    title: "",
    description: "",
    price: "",
    address: "",
    city: "",
    photos: [], // save photos here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    const formData = new FormData();
    files.forEach((file, i) => {
      formData.append(`photo${i}`, file);
    });

    // Realizar la petición a tu servidor aquí para subir las fotos
    // Por ejemplo:
    // axios.post('/api/upload-photos', formData).then((response) => {
    //   // Guardar las rutas de las fotos en el state de la propiedad
    //   setPropertyData({ ...propertyData, photos: response.data.photoUrls });
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar la petición POST al servidor para guardar la propiedad
    // Por ejemplo:
    // axios.post('/api/properties', propertyData).then((response) => {
    //   console.log(response.data); // Datos de la propiedad guardada
    // }).catch((error) => {
    //   console.error(error);
    // });
    console.log("handle submit working on");
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={propertyData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={propertyData.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={propertyData.price}
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
      <input type="file" name="photos" multiple onChange={handlePhotoChange} />
      <button type="submit">Save Property</button>
    </form>
  );
};

export default NewPropertyForm;
