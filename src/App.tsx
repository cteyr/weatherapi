import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { WeatherForecastContainer } from "./containers/WeatherForecastContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<WeatherForecastContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export { App };
