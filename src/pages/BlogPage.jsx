import React from "react";

// components
import Blogs from "../components/Blogs";
import SearchBar from "../components/SearchBar";

// popup
import CreatePost from "../components/pop-ups/CreatePost";

// redux
import { useSelector, useDispatch } from "react-redux";
import { toggleCreatePost } from "../states/blogs";

// styles
import styled from "styled-components";

const BlogPage = () => {
  const dispatch = useDispatch();
  const { isCreatePost } = useSelector((state) => state.blogs);
  return (
    <StyledBlogPage>
      {isCreatePost && <CreatePost />}
      <header>
        <SearchBar></SearchBar>
        <button
          className="purple-btn"
          onClick={() => dispatch(toggleCreatePost())}
        >
          Create a Post
        </button>
      </header>
      <div className="flex blogs">
        <div className="container">
          <Blogs/>
        </div>
        <div className="container">
          <Blogs />
        </div>
      </div>
    </StyledBlogPage>
  );
};

const StyledBlogPage = styled.div`
  padding: 2rem;
  width: 100%;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  .blogs .container{
    flex: 1;
    height: 80vh;
    margin: 0 auto;
  }
`;
export default BlogPage;
