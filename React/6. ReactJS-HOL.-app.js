import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

const trainers = [
  {
    trainerId: 1,
    name: "John",
    email: "john@gmail.com",
    phone: "9876543210",
    technology: "React",
    skills: "React, JavaScript"
  },
  {
    trainerId: 2,
    name: "Alice",
    email: "alice@gmail.com",
    phone: "9876543211",
    technology: "Java",
    skills: "Spring Boot, Hibernate"
  }
];

function Home() {
  return <h2>Welcome to Trainer Management Portal</h2>;
}

function TrainersList() {
  return (
    <div>
      <h2>Trainer List</h2>
      <ul>
        {trainers.map((t) => (
          <li key={t.trainerId}>
            <Link to={`/trainer/${t.trainerId}`}>
              {t.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TrainerDetail() {
  const { id } = useParams();
  const trainer = trainers.find(
    (t) => t.trainerId === parseInt(id)
  );

  return (
    <div>
      <h2>Trainer Details</h2>
      <p>ID: {trainer.trainerId}</p>
      <p>Name: {trainer.name}</p>
      <p>Email: {trainer.email}</p>
      <p>Phone: {trainer.phone}</p>
      <p>Technology: {trainer.technology}</p>
      <p>Skills: {trainer.skills}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/trainers">Trainers</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<TrainersList />} />
        <Route path="/trainer/:id" element={<TrainerDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
Commands:

npx create-react-app TrainersApp
cd TrainersApp
npm install react-router-dom
npm start
*/
