import './Product.css';

export default function Product({product}) {

    return (
        <div className='product-card'>
            <div className="header">
                <div className="picture">
                    <img src={product.images[0]} />
                </div>
                <div className="name">{product.nom}</div>
            </div>
            <div className="content">
                <div className="description">{product.description}</div>
                <div className="price">{product.prix}€</div>
            </div>
        </div>
    )
}