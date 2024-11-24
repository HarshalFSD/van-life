import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Van.css";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch("/api/vans");
        const data = await res.json();
        setVans(data.vans);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, 
        priced at $${van.price} per day`}
      >
        <img src={van.imageUrl} />
        <div className="van-info">
          <p>{van.name}</p>
          <p>
            ${van.price} <span>/day/</span>{" "}
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van option</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
