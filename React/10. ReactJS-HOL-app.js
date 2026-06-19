import React from "react";

function App() {
  const office = {
    name: "Sky Tower Office",
    rent: 55000,
    address: "Mumbai"
  };

  const offices = [
    {
      name: "Sky Tower",
      rent: 55000,
      address: "Mumbai"
    },
    {
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "Business Hub",
      rent: 45000,
      address: "Delhi"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Office Space Rental App</h1>

      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
        alt="Office Space"
        width="400"
      />

      <h2>Featured Office</h2>
      <p><b>Name:</b> {office.name}</p>
      <p
        style={{
          color: office.rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> ₹{office.rent}
      </p>
      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {offices.map((item, index) => (
        <div key={index}>
          <p><b>Name:</b> {item.name}</p>

          <p
            style={{
              color: item.rent < 60000 ? "red" : "green"
            }}
          >
            <b>Rent:</b> ₹{item.rent}
          </p>

          <p><b>Address:</b> {item.address}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;



