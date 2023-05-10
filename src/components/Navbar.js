import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <>
      <nav className="h-16 py-3 px-2 flex justify-between items-center">
        <h1 className="font-bold text-lg ml-2 text-white">Doe+</h1>
        <div className="flex items-center space-x-2">
          <p className="mr-1 font-semibold text-sm text-white">Login</p>
          <FontAwesomeIcon className="w-5 h-5 text-white" icon={faUser} />
        </div>
      </nav>
    </>
  );
}
