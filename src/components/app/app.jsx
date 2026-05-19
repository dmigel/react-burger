import { Preloader } from '@krgaa/react-developer-burger-ui-components';
import { useContext } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import IngredientsContext from '@/context/ingredients-context.js';
import { AppHeader } from '@components/app-header/app-header';
import { BurgerConstructor } from '@components/burger-constructor/burger-constructor';
import { BurgerIngredients } from '@components/burger-ingredients/burger-ingredients';

import styles from './app.module.css';

export const App = () => {
  const { state } = useContext(IngredientsContext);
  const { loading, error } = state;
  return (
    <>
      {loading ? (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      ) : error ? (
        'Error: ' + error
      ) : (
        <div className={styles.app}>
          <AppHeader />
          <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}>
            Соберите бургер
          </h1>
          <DndProvider backend={HTML5Backend}>
            <main className={`${styles.main} pl-5 pr-5`}>
              <BurgerIngredients />
              <BurgerConstructor />
            </main>
          </DndProvider>
        </div>
      )}
    </>
  );
};
