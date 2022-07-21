import { Climate } from "../types/Climate";
import { useState,useEffect } from "react";
import { api } from "../api/api";
const useClimate=()=>{
    const [Climate, setClimate] = useState<Climate>();
    const [IsLoading, setIsLoading] = useState(false);
    const [Latitud, setLatitud] = useState<number>(0);
    const [Longitud, setLongitud] = useState<number>(0);

    useEffect(()=>{
      if (navigator.geolocation) { //check if geolocation is available
        navigator.geolocation.getCurrentPosition(function(position){
          setLatitud(position?.coords.latitude);
          setLongitud(position?.coords.longitude);
        });   
        }
    },[])

    const handleResponse = async () => {     
      //setIsLoading(false);
      const { response, error } = await api.getClimate(Latitud, Longitud);
      if (error) {
        console.log(error);
      } else {
        //setIsLoading(true);
        setClimate(response);
      }
    };
  
    const getAllClimate = () => {
      handleResponse();
    };
  
    return { getAllClimate, Climate,Longitud,Latitud, setClimate };
}
export {useClimate}