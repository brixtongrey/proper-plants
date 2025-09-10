function Plant ({ plant }) {
    return (
        <li className="plant">
            <figure>{plant.image}</figure>
            <h3>{plant.name}</h3>
            <button>Add to Cart</button>
        </li>
    )
}

export default Plant;