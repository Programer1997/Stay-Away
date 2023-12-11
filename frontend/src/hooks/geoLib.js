const axios = require('axios');

const getLocation = async (address) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: address,
        key: 'TU_API_KEY' // Reemplaza 'TU_API_KEY' con tu clave de API de Google Maps
      }
    });

    if (response.data.results.length > 0) {
      const location = response.data.results[0].geometry.location;
      console.log(`Latitud: ${location.lat}, Longitud: ${location.lng}`);
      return location;
    } else {
      console.error('No se encontraron resultados para la dirección proporcionada.');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener coordenadas:', error);
    return null;
  }
};

// Llama a la función con la dirección que deseas convertir
getLocation('144 luscumbe street, Hamilton');
