import { Tab } from '@krgaa/react-developer-burger-ui-components';
import { useCallback, useMemo, useState } from 'react';

import IngredientDetails from '@components/ingredient-details/ingredient-details.jsx';
import IngredientsGroup from '@components/ingredients-group/ingredients-group.jsx';
import { useModal } from '@hooks/useModal.jsx';

import styles from './burger-ingredients.module.css';

export const BurgerIngredients = ({ ingredients }) => {
  const { openModal, closeModal, Modal } = useModal();
  const [ingredient, setIngredient] = useState(null);
  const handleCloseIngredientModal = useCallback(() => {
    setIngredient(null);
    closeModal();
  }, [closeModal]);
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
    <>
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
        <div className={`custom-scroll ${styles.groups}`}>
          <IngredientsGroup
            showIngredient={openModal}
            title={'Булки'}
            ingredients={buns}
            setIngredient={setIngredient}
          />
          <IngredientsGroup
            showIngredient={openModal}
            title={'Начинки'}
            ingredients={fillings}
            setIngredient={setIngredient}
          />
          <IngredientsGroup
            showIngredient={openModal}
            title={'Соусы'}
            ingredients={sauces}
            setIngredient={setIngredient}
          />
        </div>
      </section>
      <Modal title="Детали ингредиента" onClose={handleCloseIngredientModal}>
        <IngredientDetails ingredient={ingredient} />
      </Modal>
    </>
  );
};
