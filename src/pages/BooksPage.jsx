import React, { useEffect } from "react";

// components
import SearchBar from "../components/SearchBar";
import Book from "../components/book";

//pages
import MyBooks from "./MyBooks";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setBooks, toggleIsShareBook } from "../states/books";

//styles
import styled from "styled-components";

//router
import { useLocation, useNavigate } from "react-router-dom";

// demo
import { bookData } from "../data/BookData";
import ShareBook from "../components/pop-ups/ShareBook";

const BooksPage = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBooks(bookData));
  }, [dispatch]);

  const { books, isShareBook } = useSelector((state) => state.books);

  return (
    <StyledBooksPage>
      {isShareBook && <ShareBook />}
      <header className="flex">
        <SearchBar />
        <button
          className="light-btn"
          onClick={() => dispatch(toggleIsShareBook())}
        >
          Share a Book
        </button>
        <button
          onClick={() => navigate("/books/my-books")}
          className="purple-btn"
        >
          My Books
        </button>
      </header>
      {location === "/books/my-books" && <MyBooks books={books} />}
      {location === "/books" && (
        <div className="container">
          <h2>Available Books</h2>
          <div className="books">
            {books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        </div>
      )}
    </StyledBooksPage>
  );
};

export const StyledBooksPage = styled.div`
  padding: 2rem;
  width: 100%;
  header {
    gap: 3rem;
  }
  .container {
    margin-top: 2rem;
    height: 85vh;
    width: 100%;
  }
  .books {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 2rem;
  }
  .back {
    cursor: pointer;
    color: var(--primary);
    transition: color 0.5s ease;
    margin-bottom: 3rem;
    &:hover {
      color: var(--secondary);
    }
  }
`;
export default BooksPage;
