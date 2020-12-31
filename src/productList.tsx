import React, { FunctionComponent, useState } from 'react';
import { Header } from './header';
import { Order, Product } from './data/entities';
import { CategoryList } from './categoryList';
import { ProductItem } from './productItem';

interface Props {
  products: Product[];
  categories: string[];
  order: Order;
  addToOrder: (product: Product, quantity: number) => void;
}

export const ProductList: FunctionComponent<Props> = (props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getProducts = (products: Product[]): Product[] => {
    return products.filter(
      (product: Product) =>
        selectedCategory === 'All' || product.category === selectedCategory
    );
  };

  return (
    <div>
      <Header order={props.order} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 p-2">
            <CategoryList
              categories={props.categories}
              selected={selectedCategory}
              selectCategory={setSelectedCategory}
            />
          </div>
          <div className="col-9 p-2">
            <div className="card-deck">
              {getProducts(props.products).map((product) => {
                return (
                  <ProductItem
                    key={product.id}
                    product={product}
                    callback={props.addToOrder}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
