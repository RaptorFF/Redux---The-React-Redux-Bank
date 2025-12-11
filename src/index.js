import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerAccount from "../src/features/accounts/accountSlice";
import reducerCustomer from "../src/features/customers/customerSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  account: reducerAccount,
  customer: reducerCustomer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
