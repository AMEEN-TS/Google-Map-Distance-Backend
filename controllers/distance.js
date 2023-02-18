const axios = require('axios');
const { Client } = require('@googlemaps/google-maps-services-js');



module.exports.distace = async (req, res) => {
  try {
    const { from, to } = req.query;
    const client = new Client({});
    const response = await client.distancematrix({
      params: {
        origins: [from],
        destinations: [to],
        key: process.env.MAP_KEY,
      },
    });

    if (response.data.status === 'OK') {

      const distance = response.data.rows[0].elements[0].distance.text;
      const mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${from}&destination=${to}&key=${process.env.MAP_KEY}`;
      if (mapUrl) {
        res.json({ distance, mapUrl });
      }


    } else {
      res.status(400).json({ message: 'Invalid request' });
    }

  } catch {
    res.status(400).send(error);
  }
}