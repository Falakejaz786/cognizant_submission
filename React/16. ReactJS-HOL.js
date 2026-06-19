import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change (controlled component)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation logic
  const validate = () => {
    let tempErrors = {};

    // Name validation
    if (formData.name.length < 5) {
      tempErrors.name = "Name must be at least 5 characters";
    }

    // Email validation
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      tempErrors.email = "Email must contain @ and .";
    }

    // Password validation
    if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters";
    }

    setErrors(tempErrors);

    // if no errors
    return Object.keys(tempErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Registration Successful!");

      // clear form
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      setErrors({});
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mail Register Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email:</label>
          <br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
