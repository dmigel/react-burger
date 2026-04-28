import { Counter, CurrencyIcon } from '@krgaa/react-developer-burger-ui-components';
import { useCallback } from 'react';

import styles from './ingredients-group.module.css';

const IngredientsGroup = ({
  title,
  ingredients,
  showIngredient,
  setOpenedIngredient,
}) => {
  const openIngredient = useCallback((ingredient) => {
    setOpenedIngredient(ingredient);
    showIngredient();
  }, []);

  return (
    <section>
      <h3 className="text text_type_main-medium mt-10 mb-6">{title}</h3>
      <ul className={`pl-4 pr-4 ${styles.list}`}>
        {ingredients.map((item) => {
          return (
            <li
              key={item._id}
              className={`${styles.ingredient}`}
              onClick={() => openIngredient(item)}
            >
              {Boolean(Math.round(Math.random())) && (
                <Counter count={1} size="default" />
              )}
              <img className="pl-4 pr-4 pb-1" src={item.image} alt={item.name} />
              <div className={`pb-1 ${styles.price}`}>
                <p className="text text_type_digits-default">{item.price}</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className={`text text_type_main-default`}>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default IngredientsGroup;
