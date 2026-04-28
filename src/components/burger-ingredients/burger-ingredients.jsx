import { Tab } from '@krgaa/react-developer-burger-ui-components';
import { useCallback, useMemo, useState } from 'react';

import IngredientsGroup from '@components/ingredients-group/ingredients-group.jsx';
import OpenedIngredient from '@components/opened-ingredient/opened-ingredient.jsx';
import { useModal } from '@hooks/useModal.jsx';

import styles from './burger-ingredients.module.css';

export const BurgerIngredients = ({ ingredients }) => {
  const { openModal, closeModal, Modal } = useModal();
  const [openedIngredient, setOpenedIngredient] = useState(null);
  const handleCloseIngredientModal = useCallback(() => {
    setOpenedIngredient(null);
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
            setOpenedIngredient={setOpenedIngredient}
          />
          <IngredientsGroup
            showIngredient={openModal}
            title={'Начинки'}
            ingredients={fillings}
            setOpenedIngredient={setOpenedIngredient}
          />
          <IngredientsGroup
            showIngredient={openModal}
            title={'Соусы'}
            ingredients={sauces}
            setOpenedIngredient={setOpenedIngredient}
          />
        </div>
      </section>
      <Modal title="Детали ингредиента" onClose={handleCloseIngredientModal}>
        <OpenedIngredient
          image={openedIngredient?.image_large}
          title={openedIngredient?.name}
          fat={openedIngredient?.fat}
          calories={openedIngredient?.calories}
          proteins={openedIngredient?.proteins}
          carbohydrates={openedIngredient?.carbohydrates}
        />
      </Modal>
    </>
  );
};
