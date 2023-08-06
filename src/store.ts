import { configureStore } from '@reduxjs/toolkit';
import { categoryAPI } from './services/category.service';
import productAPI from './services/product.service';
import cartApi from './services/cart.service';
// Assuming you already have this imported

export const store = configureStore({
  reducer: {
    products: productAPI.reducer,
    categories: categoryAPI.reducer,
    cart: cartApi.reducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(productAPI.middleware, categoryAPI.middleware, cartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
