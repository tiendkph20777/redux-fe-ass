import { configureStore } from '@reduxjs/toolkit';
import { categoryAPI } from './services/category.service';
<<<<<<< HEAD
import { productAPI } from './services/product.service'; // Assuming you already have this imported
import { userAPI } from './services/user.service';
=======
import productAPI from './services/product.service';
import cartApi from './services/cart.service';
// Assuming you already have this imported
>>>>>>> 3e4ba079c0318e0b853e590065135485f6d7ceff

export const store = configureStore({
  reducer: {
    products: productAPI.reducer,
    categories: categoryAPI.reducer,
<<<<<<< HEAD
    users: userAPI.reducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(productAPI.middleware, categoryAPI.middleware, userAPI.middleware),

=======
    cart: cartApi.reducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(productAPI.middleware, categoryAPI.middleware, cartApi.middleware),
>>>>>>> 3e4ba079c0318e0b853e590065135485f6d7ceff
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
