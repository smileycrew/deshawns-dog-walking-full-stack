import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import { Walkers } from "./Walkers/Walkers";
import { Cities } from "./Cities/Cities";
import { DogDetail } from "./Dogs/DogDetail";
import { AddDog } from "./Dogs/AddDog";
import { ManageWalkerCities } from "./Walkers/ManageWalkerCities";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/walkers">
          <Route index element={<Walkers />} />
          <Route path=":walkerId/manage-cities" element={<ManageWalkerCities />} />

        </Route>
        <Route path="/cities" element={<Cities />} />
        <Route path="/dog/:dogId" element={<DogDetail />} />
        <Route path="/dog/add" element={<AddDog />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
