import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';

import Order from '@components/order/order.jsx';
import { useModal } from '@hooks/useModal.jsx';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ ingredients }) => {
  const { openModal, Modal } = useModal();

  return (
    <section className={`${styles.burger_constructor} pl-4 pr-4`}>
      <div className={`${styles.burger_buns}`}>
        <ConstructorElement
          isLocked
          type={'top'}
          text={ingredients[0].name + ' (верх)'}
          price={ingredients[0].price}
          thumbnail={ingredients[0].image}
        />
      </div>
      <ul className={`${styles.ingredients_list} custom-scroll`}>
        {ingredients
          .filter((item) => item.type !== 'bun')
          .map((item) => (
            <li className={`${styles.ingredients_list_item}`} key={item._id}>
              <DragIcon type={'primary'} />
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </li>
          ))}
      </ul>
      <div className={styles.burger_buns}>
        <ConstructorElement
          isLocked
          type={'bottom'}
          text={ingredients[0].name + ' (низ)'}
          price={ingredients[0].price}
          thumbnail={ingredients[0].image}
        />
      </div>
      <div className={`${styles.burger_order} mt-8`}>
        <div className={`${styles.burger_price} mr-10`}>
          <p className={'text text_type_digits-medium'}>610</p>
          <CurrencyIcon type={'primary'} />
        </div>
        <Button type={'primary'} onClick={openModal} size={'large'}>
          Оформить заказ
        </Button>

        <Modal>
          <Order />
        </Modal>
      </div>
    </section>
  );
};
