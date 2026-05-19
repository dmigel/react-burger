import BurgerElement from '@components/burger-element/burger-element.jsx';

import styles from './ingredients-group.module.css';

const IngredientsGroup = ({ title, ingredients, showIngredient, setIngredient }) => {
  return (
    <section>
      <h3 className="text text_type_main-medium mt-10 mb-6">{title}</h3>
      <ul className={`pl-4 pr-4 ${styles.list}`}>
        {ingredients.map((item) => {
          return (
            <BurgerElement
              showIngredient={showIngredient}
              setIngredient={setIngredient}
              item={item}
              key={item._id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default IngredientsGroup;
