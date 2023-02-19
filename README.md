# Distance Calculator API
This project is a simple API that calculates the distance between two locations using the Google Maps Directions API and generates a map of the distance using the Google Maps Static API.

## Technologies Used
  * Node.js
  * Express
  * Axios


## Getting Started

1. Clone the respository
``` bash
git clone https://github.com/YOUR-USERNAME/Google-Map-Distance-Backend.git


```
2.Install dependencies:
```bash
cd Google-Map-Distance-Backend
npm install
```
3. Set the GOOGLE_MAPS_API_KEY environment variable to your Google Maps API key:
``` js
export MAPS_KEY=YOUR_API_KEY
```
4. Start the server:
``` js
npm start
```
5. The server is now running on http://localhost:5000.

## Endpoints

#### GET /distance

Calculates the distance between two locations and generates a map of the distance.

#### Parameters:
  * 'from' (required) - The starting location
  * 'to' (required) - The ending location

#### Response:
``` json
{
  "distance": "23.4 km",
  "mapUrl": "https://www.google.com/maps/embed/v1/directions?origin=${from}&destination=${to}&key=YOUR_API_KEY"
}
```
The 'distance' field contains the calculated distance between the two locations, and the 'mapUrl' field contains the URL of the map image.

## Contributing

Contributions are welcome! To contribute to the project, please fork the repository and submit a pull request.
