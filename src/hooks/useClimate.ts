import { useState, useEffect } from "react";

import { Climate } from "../types/Climate";
import { api } from "../api/api";

const useClimate = () => {
  const [Climate, setClimate] = useState<Climate>();
  // const [IsLoading, setIsLoading] = useState(false);
  const [Latitud, setLatitud] = useState<number>(0);
  const [Longitud, setLongitud] = useState<number>(0);

  useEffect(() => {
    if (navigator.geolocation) {
      //check if geolocation is available
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitud(position?.coords.latitude);
        setLongitud(position?.coords.longitude);
      });
    }
  }, []);

  useEffect(() => {
    if (Latitud && Longitud) {
      api
        .getClimate(Latitud, Longitud)
        .then(({ response }) => {
          setClimate(response);
        })
        .catch(({ error }) => {
          console.error(error);
        });
    }
  }, [Latitud, Longitud]);

  return { Climate, Longitud, Latitud, setClimate };
};

export { useClimate };