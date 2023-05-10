import React from "react";

import { StyledPopup } from "../../styles/PopupStyles";
import styled from "styled-components";

// redux
import { useSelector } from "react-redux";

//icons
import { AiOutlineClose } from "react-icons/ai";
import Biders from "../Biders";

const BidingPopup = ({ setIsPopup }) => {
  const book = useSelector((state) => state.books.bidingDetails);
  return (
    <StyledAsk>
      <div className="container">
        <button className="light-btn close" onClick={() => setIsPopup(false)}>
          <AiOutlineClose />
        </button>
        <h2>{book?.title}</h2>
        <div className="flex book">
          <div className="image">
            <img src={book.coverImageUrl} alt={book.title} />
          </div>
          <div className="details flex-col">
            <h3>
              Author: <span>{book.author}</span>
            </h3>
            <h3>Condition: {book.condition}</h3>
            <div className="genere flex">
              <h3>Genere:</h3>
              {book.genre.map((genre, index) => (
                <button key={index} className="tag-btn">
                  {genre}
                </button>
              ))}
            </div>
            <h3>Description</h3>
            <p>{book.description}</p>
            <button className="purple-btn">Edit</button>
          </div>
        </div>
        <Biders biders={book?.biders}/>
      </div>
    </StyledAsk>
  );
};

const StyledAsk = styled(StyledPopup)`
  .container {
    width: 50vw !important;
    height: 70vh;
    overflow-y: scroll;
    padding: 1.5rem;
  }
  .book {
    margin: 2rem 0rem;
  }
  .image {
    height: 30vh;
    width: 30vw;
    img {
      height: 100%;
    }
  }

  form * {
    width: 100%;
  }
  form {
    margin-top: 2rem;
  }
`;

export default BidingPopup;
