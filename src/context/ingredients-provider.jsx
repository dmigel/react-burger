import { useEffect, useReducer } from 'react';

import {
  GET_INGREDIENTS,
  LOADING_ERROR,
  LOADING_FINISH,
  LOADING_START,
} from '@/context/actions.js';
import IngredientsContext from '@/context/ingredients-context.js';
import ingredientsReducer from '@/context/ingredients-reducer.js';
import initialState from '@/context/initial-state.js';
import { getIngredients } from '@utils/api.js';

function IngredientsProvider({ children }) {
  const [state, dispatch] = useReducer(ingredientsReducer, initialState);

  useEffect(() => {
    dispatch({ type: LOADING_START });
    getIngredients()
      .then((data) => {
        dispatch({ type: GET_INGREDIENTS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: LOADING_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: LOADING_FINISH });
      });
  }, []);

  const value = {
    state,
    dispatch,
  };

  return (
    <IngredientsContext.Provider value={value}>{children}</IngredientsContext.Provider>
  );
}

export default IngredientsProvider;
