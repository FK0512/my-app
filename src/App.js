import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [department, setDepartment] = useState("Marketing");
  const [query, setQuery] = useState("");

  const handleLogin = () => {
    if (username === "user123" && password === "pass123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
    setQuery(
      e.target.value === "Sales"
        ? "Enter your sales query here..."
        : "Enter your marketing query here..."
    );
  };

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    card: {
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      padding: "30px",
      maxWidth: "400px",
      margin: "auto",
    },
    title: {
      color: "#333",
    },
    input: {
      width: "90%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    button: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
    },
    dropdown: {
      width: "95%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    chatbotContainer: {
      marginTop: "20px",
    },
    placeholderText: {
      width: "90%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      {!isLoggedIn ? (
        <div style={styles.card}>
          <h1 style={styles.title}>Login</h1>
          <input
            type="text"
            placeholder="Username"
            style={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button style={styles.button} onClick={handleLogin}>
            Login
          </button>
        </div>
      ) : (
        <div style={styles.card}>
          <h1 style={styles.title}>AI Chatbot</h1>
          <select
            value={department}
            onChange={handleDepartmentChange}
            style={styles.dropdown}
          >
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
          <div style={styles.chatbotContainer}>
            <input
              type="text"
              placeholder={query || "Enter your query here..."}
              style={styles.placeholderText}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
