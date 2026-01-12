import { configureStore } from "@reduxjs/toolkit";

import reducerAccount from "../src/features/accounts/accountSlice";
import reducerCustomer from "../src/features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: reducerAccount,
    customer: reducerCustomer,
  },
});

export default store;
