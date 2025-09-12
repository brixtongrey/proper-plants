import Plant from "./Plants";
import "./Plants.css";

function PlantsGrid({ plants, addToCart }) {
  return (
    <section className="plants-grid">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => {
          return <Plant key={plant.id} plant={plant} addToCart={addToCart}/>;
        })}
      </ul>
    </section>
  );
}

export default PlantsGrid;
