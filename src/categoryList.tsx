import React, { FunctionComponent } from 'react';

interface Props {
  selected: string;
  categories: string[];
  selectCategory: (category: string) => void;
}

export const CategoryList: FunctionComponent<Props> = (props) => {
  return (
    <div>
      {['All', ...props.categories].map((category) => {
        let btnClass =
          props.selected === category ? 'btn-primary' : 'btn-secondary';
        return (
          <button
            key={category}
            className={`btn btn-block ${btnClass}`}
            onClick={() => props.selectCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
