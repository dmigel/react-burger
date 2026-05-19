import {
  ADD_BUN,
  ADD_INGREDIENT,
  GET_INGREDIENTS,
  LOADING_ERROR,
  LOADING_FINISH,
  LOADING_START,
  MAKE_ORDER,
  SET_BURGER_PRICE,
} from '@/context/actions.js';

function ingredientsReducer(state, action) {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload.filter((item) => item.type !== 'bun'),
        buns: action.payload?.filter((item) => item.type === 'bun'),
      };
    case LOADING_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOADING_FINISH:
      return {
        ...state,
        loading: false,
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        activeIngredients: [...state.activeIngredients, action.payload],
      };
    case ADD_BUN:
      return {
        ...state,
        activeBun: action.payload,
      };
    case SET_BURGER_PRICE:
      return {
        ...state,
        totalPrice:
          (state.activeBun?.price || 0) +
          state.activeIngredients.reduce((sum, item) => sum + item.price, 0),
      };
    case MAKE_ORDER:
      return {
        ...state,
        orderNumber: action.payload,
      };
    default:
      return state;
  }
}

export default ingredientsReducer;
