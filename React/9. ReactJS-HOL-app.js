import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat", score: 90 },
    { name: "Rohit", score: 85 },
    { name: "Gill", score: 65 },
    { name: "Rahul", score: 72 },
    { name: "Pant", score: 55 },
    { name: "Hardik", score: 88 },
    { name: "Jadeja", score: 60 },
    { name: "Ashwin", score: 75 },
    { name: "Shami", score: 50 },
    { name: "Bumrah", score: 95 },
    { name: "Siraj", score: 68 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IndianPlayers() {
  const team = [
    "Virat",
    "Rohit",
    "Gill",
    "Rahul",
    "Pant",
    "Hardik",
    "Jadeja",
    "Ashwin"
  ];

  const oddPlayers = team.filter((_, index) => index % 2 === 0);
  const evenPlayers = team.filter((_, index) => index % 2 !== 0);

  const T20Players = ["Virat", "Rohit", "Hardik"];
  const RanjiPlayers = ["Pujara", "Rahane", "Saha"];

  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged T20 and Ranji Trophy Players</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const flag = true; // change to false for IndianPlayers output

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cricket App</h1>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
