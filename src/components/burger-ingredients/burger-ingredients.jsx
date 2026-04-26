import { Tab } from '@krgaa/react-developer-burger-ui-components';
import { useMemo } from 'react';

import IngredientsGroup from '@components/ingredients-group/ingredients-group.jsx';

import styles from './burger-ingredients.module.css';

export const BurgerIngredients = ({ ingredients }) => {
  const buns = useMemo(() => {
    return ingredients.filter((item) => item.type === 'bun');
  }, [ingredients]);

  const fillings = useMemo(
    () => ingredients.filter((item) => item.type === 'main'),
    [ingredients]
  );

  const sauces = useMemo(
    () => ingredients.filter((item) => item.type === 'sauce'),
    [ingredients]
  );

  return (
    <section className={styles.burger_ingredients}>
      <nav>
        <ul className={styles.menu}>
          <Tab
            value="bun"
            active={true}
            onClick={() => {
              /* TODO */
            }}
          >
            Булки
          </Tab>
          <Tab
            value="main"
            active={false}
            onClick={() => {
              /* TODO */
            }}
          >
            Начинки
          </Tab>
          <Tab
            value="sauce"
            active={false}
            onClick={() => {
              /* TODO */
            }}
          >
            Соусы
          </Tab>
        </ul>
      </nav>
      <div id={'scrollbar3'} className={`custom-scroll ${styles.groups}`}>
        <IngredientsGroup title={'Булки'} ingredients={buns} />
        <IngredientsGroup title={'Начинки'} ingredients={fillings} />
        <IngredientsGroup title={'Соусы'} ingredients={sauces} />
      </div>
    </section>
  );
};
