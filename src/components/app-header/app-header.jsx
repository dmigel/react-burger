import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from '@krgaa/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

import styles from './app-header.module.css';

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.menu} p-4`}>
        <div className={styles.menu_part_left}>
          <NavLink
            to="/"
            className={`p-5 text text_type_main-default ${styles.link} ${styles.link_active}`}
          >
            <BurgerIcon type="primary" />
            Конструктор
          </NavLink>
          <NavLink
            to="/feed"
            className={`p-5 text text_type_main-default ${styles.link} ml-2`}
          >
            <ListIcon type="secondary" />
            Лента
          </NavLink>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.menu_part_right}>
          <NavLink
            to="/profile"
            className={`p-5 mr-4 text text_type_main-default ${styles.link} ${styles.link_position_last}`}
          >
            <ProfileIcon type="secondary" />
            Личный кабинет
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
