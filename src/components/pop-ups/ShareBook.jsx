import React from "react";

import { StyledPopup } from "../../styles/PopupStyles";
import styled from "styled-components";

// redux
import { useDispatch } from "react-redux";
import { toggleIsShareBook } from "../../states/books";

// components
import Uploader from "../Uploader";

//icons
import { AiOutlineClose } from "react-icons/ai";

const ShareBook = () => {
  const dispatch = useDispatch();

  return (
    <StyledAsk>
      <div className="container">
        <button
          className="light-btn close"
          onClick={() => dispatch(toggleIsShareBook())}
        >
          <AiOutlineClose />
        </button>
        <h3>Share a Book</h3>
        <form className="flex-col">
          <div className="flex">
            <input name="title" type="text" placeholder="Book title" />
            <input name="author" type="text" placeholder="Book Author" />
          </div>
          <div className="flex">
            <select name="condition">
              <option disabled selected value="">
                Book Condition
              </option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="bad">Bad</option>
            </select>
            <input
              name="genre"
              type="text"
              placeholder="Genre separated by comma"
            />
          </div>
          <input type="date" name="published" id="" />
          <textarea
            rows={7}
            id="description"
            type="text"
            placeholder="Description"
          />
          <Uploader />
          <button className="purple-btn">Share Book</button>
        </form>
      </div>
    </StyledAsk>
  );
};

const StyledAsk = styled(StyledPopup)`
  .container {
    min-width: 40vw;
    height: fit-content !important;
    overflow: hidden;
  
    label{
        display: block;
    }
  form * {
    width: 100%;
  }
  form {
    margin-top: 2rem;
  }
`;

export default ShareBook;
