import { useState } from "react";
import { PLANTS } from "./data/data";
import PlantsGrid from "./plants/PlantsGrid";

function App() {
  const [cart, setCart] = useState();
  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <PlantsGrid plants={PLANTS} />
      </main>
    </>
  );
}

export default App;
