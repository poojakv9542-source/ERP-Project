import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Not checked");

  const checkBackend = async () => {
    try {
      const response = await fetch("http://localhost:5000/status");
      const data = await response.json();

      setStatus(
        `Backend: ${data.backend} | Database: ${data.database}`
      );
    } catch (error) {
      console.error(error);
      setStatus("Backend connection failed");
    }
  };

  return (
    <div>
      <h1>ERP System</h1>

      <button onClick={checkBackend}>
        Check Backend Connection
      </button>

      <p>{status}</p>
    </div>
  );
}

export default App;