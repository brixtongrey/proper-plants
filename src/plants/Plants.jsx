function Plants () {
    return (
        <li className="plants">
            <figure>{Plants.image}</figure>
            <h3>{Plants.name}</h3>
            <button>Add to Cart</button>
        </li>
    )
}

export default Plants;