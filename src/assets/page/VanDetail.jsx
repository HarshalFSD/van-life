import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./VanDetail.css";

const VanDetail = () => {
  const [van, setVan] = useState(null);
  const params = useParams();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(`/api/vans/${params.id}`);
        const data = await res.json();
        setVan(data.vans);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);

  console.log(van);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
