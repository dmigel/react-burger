import { Counter, CurrencyIcon } from '@krgaa/react-developer-burger-ui-components';
import { useCallback } from 'react';
import { useDrag } from 'react-dnd';

import styles from './burger-element.module.css';

const BurgerElement = ({ showIngredient, setIngredient, item }) => {
  const openIngredient = useCallback((ingredient) => {
    setIngredient(ingredient);
    showIngredient();
  }, []);

  const [, dragRef] = useDrag({
    type: item.type !== 'bun' ? 'ingredient' : 'bun',
    item: item,
  });

  return (
    <li
      ref={dragRef}
      key={item._id}
      className={`${styles.ingredient}`}
      onClick={() => openIngredient(item)}
    >
      {Boolean(Math.round(Math.random())) && <Counter count={1} size="default" />}
      <img className="pl-4 pr-4 pb-1" src={item.image} alt={item.name} />
      <div className={`pb-1 ${styles.price}`}>
        <p className="text text_type_digits-default">{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default`}>{item.name}</p>
    </li>
  );
};

export default BurgerElement;
