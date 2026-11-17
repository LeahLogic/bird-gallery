
import { useState } from "react";
import { data } from "./data";
import Birds from "./Birds";
import "./App.css";

function App() {
  const [birds, setBirds] = useState(data);

  return (
    <div>
      <h1>Bird Gallery</h1>
      <Birds birds={birds} />
    </div>
  );
}

export default App;
