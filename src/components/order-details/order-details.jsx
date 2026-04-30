import { DoneOrderIcon } from '../assets/images/images.jsx';

import styles from './order-details.module.css';

const OrderDetails = () => {
  return (
    <div className={`${styles.order}`}>
      <p className={`text text_type_digits-large mb-8 ${styles.orderNumber}`}>034536</p>
      <p className="text text_type_main-medium pb-15">идентификатор заказа</p>
      <div className="mb-15">
        <DoneOrderIcon />
      </div>
      <section>
        <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </section>
    </div>
  );
};

export default OrderDetails;
