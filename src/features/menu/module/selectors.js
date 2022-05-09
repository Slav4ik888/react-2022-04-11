import { selectRestaurantById } from '../../restaurant/module/selectors';


export const selectProductModuleState = (state) => state.product;

export const selectProductById = (state, productId) =>
  selectProductModuleState(state).entities[productId];

export const selectProductNameById = (state, productId) =>
  selectProductModuleState(state).entities[productId]?.name;

export const selectProductIds = (state) => selectProductModuleState(state).ids;

export const selectIsProductsLoading = (state) =>
  selectProductModuleState(state).isLoading;

export const selectProductIdsByRestaurantId = (state, restaurantId) =>
  selectRestaurantById(state, { restaurantId })?.menu;
  