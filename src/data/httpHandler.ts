import Axios from 'axios';
import { Order, Product } from './entities';

// These commented out portions are for a localhost variant- though some things (like images) are not used
// const protocol = 'http';
// const hostname = 'localhost';
// const port = 4600;

const urls = {
  // products: `${protocol}://${hostname}:${port}/products`,
  // orders: `${protocol}://${hostname}:${port}/orders`,
  products: '/api/products',
  orders: '/api/orders'
};

export class HttpHandler {
  loadProducts(callback: (products: Product[]) => void): void {
    Axios.get(urls.products).then((res) => callback(res.data));
  }

  storeOrder(order: Order, callback: (id: number) => void): void {
    let orderData = {
      lines: [...order.orderLines.values()].map((ol) => ({
        productId: ol.product.id,
        productName: ol.product.name,
        quantity: ol.quantity,
        total: ol.total
      })),
    };
    Axios.post(urls.orders, orderData).then((res) => callback(res.data.id));
  }
}
