import { useState, useEffect } from "react";
import { getProducts } from "../services/apiFacade";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product: { id: string; name: string; price: number; weight: number }) => (
                    <li key={product.id}>
                        {product.name} - ${product.price} - {product.weight}kg
                    </li>
                ))}
            </ul>
        </div>
    );
}
