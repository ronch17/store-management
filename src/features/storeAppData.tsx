import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define a type for the slice state
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Customer {
  id: number;
  fname: string;
  lname: string;
  city: string;
}

interface Purchase {
  id: number;
  customerId: number;
  productId: number;
  date: Date;
}

interface StoreState {
  products: Product[];
  customers: Customer[];
  purchases: Purchase[];
}

// Define the initial state using that type
const initialState: StoreState = {
  products: [
    {
      id: 0,
      name: "Drums",
      price: 500,
      quantity: 1,
    },
  ],
  customers: [
    {
      id: 0,
      fname: "Ron",
      lname: "Dayn",
      city: "Tel Aviv",
    },
  ],
  purchases: [
    {
      id: 0,
      customerId: 0,
      productId: 0,
      date: new Date(),
    },
  ],
};

export const storeSlice = createSlice({
  name: "stores",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.purchases[0].id += action.payload;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
// export const { increment } = storeSlice.actions;

// // Other code such as selectors can use the imported `RootState` type

export default storeSlice.reducer;
