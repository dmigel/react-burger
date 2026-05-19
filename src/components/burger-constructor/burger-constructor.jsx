import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';
import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { useDrop } from 'react-dnd';

import {
  MAKE_ORDER,
  ADD_INGREDIENT,
  ADD_BUN,
  SET_BURGER_PRICE,
} from '@/context/actions.js';
import IngredientsContext from '@/context/ingredients-context.js';
import OrderDetails from '@components/order-details/order-details.jsx';
import { useModal } from '@hooks/useModal.jsx';
import { createOrder } from '@utils/api.js';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = () => {
  const { openModal, Modal } = useModal();
  const { state, dispatch } = useContext(IngredientsContext);
  const { totalPrice, orderNumber, activeIngredients, activeBun } = state;
  function makeOrder() {
    const bunId = activeBun?._id;
    const ingredientIds = activeIngredients.map((item) => item._id);
    const orderIds = [bunId, ...ingredientIds, bunId];
    createOrder(orderIds).then((data) => {
      dispatch({ type: MAKE_ORDER, payload: data.order.number });
      openModal();
    });
  }

  const [, dropRef] = useDrop({
    accept: ['ingredient', 'bun'],
    drop(item, monitor) {
      const type = monitor.getItemType();
      if (type === 'ingredient') {
        dispatch({
          type: ADD_INGREDIENT,
          payload: {
            ...item,
            constructorId: nanoid(),
          },
        });
      }
      if (type === 'bun') {
        dispatch({
          type: ADD_BUN,
          payload: item,
        });
      }
      dispatch({ type: SET_BURGER_PRICE });
    },
  });

  return (
    <section className={`${styles.burger_constructor} pl-4 pr-4`}>
      <div ref={dropRef} className={styles.burger_section}>
        <div className={`${styles.burger_buns}`}>
          {Object.keys(activeBun).length > 0 ? (
            <ConstructorElement
              isLocked
              type={'top'}
              text={activeBun?.name + ' (верх)'}
              price={activeBun?.price}
              thumbnail={activeBun?.image}
            />
          ) : (
            <div
              className={`${styles.noBuns} ${styles.noBunsTop} text text_type_main-default`}
            >
              Выберите булки
            </div>
          )}
        </div>
        <div className={`${styles.burger_buns}`}>
          {activeIngredients.length === 0 ? (
            <div className={`${styles.noBuns} text text_type_main-default`}>
              Выберите начинку
            </div>
          ) : (
            <ul className={`${styles.ingredients_list} custom-scroll`}>
              {activeIngredients.map((item) => (
                <li className={`${styles.ingredients_list_item}`} key={nanoid()}>
                  <DragIcon type={'primary'} />
                  <ConstructorElement
                    text={item?.name}
                    price={item?.price}
                    thumbnail={item?.image}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={`${styles.burger_buns}`}>
          {Object.keys(activeBun).length > 0 ? (
            <ConstructorElement
              isLocked
              type={'bottom'}
              text={activeBun?.name + ' (низ)'}
              price={activeBun?.price}
              thumbnail={activeBun?.image}
            />
          ) : (
            <div
              className={`${styles.noBuns} ${styles.noBunsBottom} text text_type_main-default`}
            >
              Выберите булки
            </div>
          )}
        </div>
      </div>
      <div className={`${styles.burger_order} mt-8`}>
        <div className={`${styles.burger_price} mr-10`}>
          <p className={'text text_type_digits-medium'}>{totalPrice}</p>
          <CurrencyIcon type={'primary'} />
        </div>
        <Button
          disabled={
            activeIngredients.length === 0 || Object.keys(activeBun).length === 0
          }
          type={'primary'}
          onClick={makeOrder}
          size={'large'}
        >
          Оформить заказ
        </Button>
        <Modal>
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      </div>
    </section>
  );
};
