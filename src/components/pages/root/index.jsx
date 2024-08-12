import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { navbar } from "../../utils";
import Navbar from "../Navabar/index"; // Pathni to'g'ri tekshiring
import LogIN from "../../LogIn/idnex"; // Pathni to'g'ri tekshiring

function Root() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Birinchi sahifa - LogIN */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogIN />} />

        {/* Home sahifasi va boshqa sahifalar */}
        {navbar.map(({ id, path, component }) => (
          <Route key={id} path={path} element={component} />
        ))}
      </Routes>
    </>
  );
}

export default Root;
