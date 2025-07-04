import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Shopcontext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";

function Searchbar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(Shopcontext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-5 my-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
}

export default Searchbar;
