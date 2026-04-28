import styles from './opened-ingredient.module.css';

const OpenedIngredient = ({ image, title, fat, calories, proteins, carbohydrates }) => {
  return (
    <div className={styles.openedIngredient}>
      <img className="mb-4" src={image} alt={title} />
      <p className="text text_type_main-medium mb-8">{title}</p>
      <ul className={styles.ingredietnStat}>
        <li className={styles.ingredietnStat_item}>
          <span className="text text_type_main-default text_color_inactive">
            Калории, ккал
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {calories}
          </span>
        </li>
        <li className={styles.ingredietnStat_item}>
          <span className="text text_type_main-default text_color_inactive">
            Белки, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {proteins}
          </span>
        </li>
        <li className={styles.ingredietnStat_item}>
          <span className="text text_type_main-default text_color_inactive">
            Жиры, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {fat}
          </span>
        </li>
        <li className={styles.ingredietnStat_item}>
          <span className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {carbohydrates}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default OpenedIngredient;
