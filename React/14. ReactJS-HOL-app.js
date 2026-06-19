import React, { useState } from "react";
import EmployeesList from "./EmployeesList";
import ThemeContext from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: "20px" }}>
        <h1>Employee Management App</h1>

        {/* Toggle Theme */}
        <button onClick={() => setTheme("light")}>Light Theme</button>
        <button onClick={() => setTheme("dark")}>Dark Theme</button>

        <hr />

        {/* ❌ No props drilling anymore */}
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
