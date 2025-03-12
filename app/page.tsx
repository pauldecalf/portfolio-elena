import React from "react";
import NavBar from "../components/navBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full justify-start items-center bg-gradient-to-br from-blue-200 to-purple-300">
      <NavBar />
      <div className="w-11/12 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Box 1 */}
        <div className="bg-white rounded-2xl shadow-md h-40"></div>
        {/* Box 2 */}
        <div className="bg-white rounded-2xl shadow-md h-40"></div>
        {/* Box 3 */}
        <div className="bg-white rounded-2xl shadow-md h-40"></div>
        {/* Box 4 */}
        <div className="bg-white rounded-2xl shadow-md h-40"></div>
      </div>
    </div>
  );
}
