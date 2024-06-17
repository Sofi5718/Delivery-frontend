//import { Product } from "./entityFacade";

//Product fetches
async function getProducts() {
    return fetch("http://localhost:8080/api/products").then((res) => res.json());
}

export { getProducts };
