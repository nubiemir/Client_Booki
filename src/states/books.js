import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  userBooks: [],
  bidingDetails: {},
  isShareBook: false,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setUserBooks: (state, action) => {
      state.userBooks = action.payload;
    },
    setBidingDetails: (state, action) => {
      state.bidingDetails = action.payload;
    },
    toggleIsShareBook: (state) => {
      state.isShareBook = !state.isShareBook;
    },
  },
});

export const { setBooks, setUserBooks, setBidingDetails, toggleIsShareBook } =
  booksSlice.actions;
export default booksSlice.reducer;
