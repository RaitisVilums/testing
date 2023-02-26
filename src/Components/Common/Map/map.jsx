import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

function Map({ address }) {
  const [loading, setLoading] = useState(true);
  // useMap hook to set the view of the map
  //   const map = useMap();
  useEffect(() => {
    const params = new URLSearchParams({
      q: address,
      format: "jsonv2",
    });

    fetch(`https://nominatim.openstreetmap.org/search?${params}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);

        if (data.length === 0) {
          console.log(`No results found for address: ${address}`);
          return;
        }

        const { lat, lon } = data[0];

        map.setView([lat, lon], 13);
      })
      .catch((error) => {
        console.error(`Failed to fetch address: ${address}`, error);
      });
  }, [address]);

  return (
    <MapContainer
      id="map"
      style={{ height: "300px", width: "100%" }}
      center={[0, 0]}
      zoom={13}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[0, 0]} />
    </MapContainer>
  );
}

export default Map;
