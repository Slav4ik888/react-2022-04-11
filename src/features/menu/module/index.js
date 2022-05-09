import { createSlice } from "@reduxjs/toolkit";
import updateArrByArrSimple from './utils/update-arr-by-arr-simple/index';


export const productSlice = createSlice({
  name: "product",
  initialState: {
    entities: {},
    ids: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    failLoading: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    finishLoading: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;

      state.ids = updateArrByArrSimple(state.ids, payload.map(({ id }) => id));
      state.entities = {
        ...state.entities,
        ...payload.reduce((acc, entity) => {
          acc[entity.id] = entity;
          return acc;
        }, {})
      };
    },
  },
});
