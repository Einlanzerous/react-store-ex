import React, { FunctionComponent, useState } from 'react';
import { Product } from './data/entities';

interface Props {
  product: Product;
  callback: (product: Product, quantity: number) => void;
}

// Used in class based component
// interface State {
//   quantity: number;
// }

export const ProductItem: FunctionComponent<Props> = (props) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="card m-1 p-1 bg-light border-info" style={{ width: '18rem' }}>
      <div className="card-header bg-secondary">
        <h4>{props.product.name}</h4>
      </div>
      <div className="card-img">
        <img
          className="card-img-top"
          alt="Product"
          height="150vh"
          src={`/assets/images/${props.product.img}.jpg`}
        />
      </div>
      <div className="card-subtitle">
        <span className="badge badge-fill badge-primary float">
          ${props.product.price.toFixed(2)}
        </span>
      </div>
      <div className="card-body">
        <div className="card-text bg-white p-1">
          {props.product.description}
        </div>
      </div>
      <div className="card-footer">
        <span className="badge badge-fill badge-primary float-right">
          <button
            className="btn btn-success btn-sm float-right"
            onClick={() => props.callback(props.product, quantity)}
          >
            Add to Cart
          </button>
          <select
            className="form-control-inline float-left m-1"
            onChange={(event) => setQuantity(Number(event.target.value))}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </span>
      </div>
    </div>
  );
};
