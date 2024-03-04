import './Product.css'

function Product(props)
{
    return (
        <div className='card-product'>
            <div>
                <img src={props.image}></img>
            </div>
            <div>
                <p>Name: {props.name}</p>
            </div>
            <div>
                <p>Cost: {props.cost}</p>
            </div>
        </div>
    );
}

export default Product;