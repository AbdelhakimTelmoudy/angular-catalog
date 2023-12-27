import {Product} from "./product.model";

export interface ProductsApiResponse {
  body: {
    products: Product[]; // Assuming 'products' is the property containing the array
  };
  // other properties of the HttpResponse if needed
}
