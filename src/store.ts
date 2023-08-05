import { configureStore } from '@reduxjs/toolkit';
import { categoryAPI } from './services/category.service';
import productAPI from './services/product.service'; // Assuming you already have this imported

export const store = configureStore({
  reducer: {
    products: productAPI.reducer,
    categories: categoryAPI.reducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(productAPI.middleware, categoryAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
