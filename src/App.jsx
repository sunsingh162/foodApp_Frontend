import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Body from "./components/Body";
import Home from "./components/Home";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/getRes/:restaurantId" element={<Product />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
