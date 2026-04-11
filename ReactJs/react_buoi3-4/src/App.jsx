import { useEffect, useState, useRef, useMemo } from "react";
import "./App.css";

function App() {
  console.log("App render");

  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const inputRef = useRef(null);

 
  useEffect(() => {
    inputRef.current.focus();
  }, []);

 
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/hotels_20.json");

        if (!res.ok) {
          throw new Error("Cannot load data");
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  
  const cuisineOptions = useMemo(() => {
    return [...new Set(data.flatMap((hotel) => hotel.cuisine))];
  }, [data]);

  
  const statusOptions = useMemo(() => {
    return [...new Set(data.map((hotel) => hotel.status))];
  }, [data]);

  
  const filteredData = useMemo(() => {
    console.time("filter");

    const result = data.filter((hotel) => {
      const cuisineMatch = cuisineFilter
        ? hotel.cuisine.includes(cuisineFilter)
        : true;

      const statusMatch = statusFilter
        ? hotel.status === statusFilter
        : true;

      return cuisineMatch && statusMatch;
    });

    console.timeEnd("filter");
    return result;
  }, [data, cuisineFilter, statusFilter]);

 
  const result = useMemo(() => {
    const id = parseInt(userId);

    if (userId !== "" && !isNaN(id)) {
      return data.find((item) => item.id === id);
    }
    return null;
  }, [userId, data]);

  return (
    <div className="App">
      {/* ⭐ INPUT SEARCH ID */}
      <input
        ref={inputRef}
        type="number"
        placeholder="Nhập Hotel ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <hr />

      {/* ⭐ FILTER CUISINE */}
      <select
        value={cuisineFilter}
        onChange={(e) => setCuisineFilter(e.target.value)}
      >
        <option value="">All cuisine</option>
        {cuisineOptions.map((cuisine, index) => (
          <option key={index} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </select>

      {/* ⭐ FILTER STATUS */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">All status</option>
        {statusOptions.map((status, index) => (
          <option key={index} value={status}>
            {status}
          </option>
        ))}
      </select>

      <hr />

     
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : userId ? (
        result ? (
          <div>
            <h2>{result.name}</h2>
            <p>{result.address}</p>
            <p>{result.cuisine.join(", ")}</p>
            <p>Status: {result.status}</p>
          </div>
        ) : (
          <p style={{ color: "red" }}>Hotel not found</p>
        )
      ) : (
        filteredData.map((hotel) => (
          <div key={hotel.id}>
            <h2>{hotel.name}</h2>
            <p>{hotel.address}</p>
            <p>{hotel.cuisine.join(", ")}</p>
            <p>Status: {hotel.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
