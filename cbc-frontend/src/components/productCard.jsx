export default function ProductCard(props){
    console.log(props)
    return(
        <div>
            <h1>{props.name}
                Product one
            </h1>
            <h2>
                price: $100
            </h2>
            <button>
                add to cart
            </button>
        </div>
    )
}                          