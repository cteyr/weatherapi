import { Climate } from "../types/Climate";

const BASE_API_URL="https://api.weatherapi.com/v1/forecast.json";

const request = async (
    latitud: number,
    longitud:number,
    method: Method = "GET"
  ): Promise<IResponse> => {
    try {
      const response = await fetch(`${BASE_API_URL}?key=a07fe9802c304f82862213829221907&q=${latitud},${longitud}`, {
        method,
        headers: { "Content-Type": "application/json" },
      });
      const responseBody = await response.json();

      return {response:responseBody, error:null};
    } catch (error) {
      return  {response:null, error} ;
    }
  };
  
  const getClimate = (latitud:number,longitud:number) => {
    return request(latitud,longitud);
  };

  type IResponse =
   { response: Climate; error: null }
  |{ response: null; error: Error };
  
  const api = { getClimate };
  
  type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  

export {api}