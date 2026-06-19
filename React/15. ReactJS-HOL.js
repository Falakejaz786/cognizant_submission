import React, { useState } from "react";

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  // Generate reference number
  const generateRefNo = () => {
    return "TKT-" + Math.floor(Math.random() * 1000000);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    const refNo = generateRefNo();

    alert(
      `Complaint Submitted Successfully!\n\nEmployee: ${employeeName}\nComplaint: ${complaint}\nReference No: ${refNo}`
    );

    // clear form after submit
    setEmployeeName("");
    setComplaint("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Complaint Register</h1>

      <form onSubmit={handleSubmit}>
        {/* Employee Name Input */}
        <div>
          <label>Employee Name:</label>
          <br />
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Enter employee name"
            required
          />
        </div>

        <br />

        {/* Complaint Textarea */}
        <div>
          <label>Complaint:</label>
          <br />
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Enter your complaint"
            rows="5"
            cols="30"
            required
          />
        </div>

        <br />

        {/* Submit Button */}
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
