import React from 'react'
import styled from 'styled-components'

const ProfileComponent = ({name}) => {
  return (
    <StyledProfile className="flex">
      <div className={`icon color${Math.floor(Math.random() * 13)}`}>
        {name.charAt(0)}
      </div>
      <h4>{name}</h4>
    </StyledProfile>
  );
}


const StyledProfile = styled.div`
  width: 100%;
  .icon {
    font-size: 1rem;
    padding: 1rem;
    border-radius: 50%;
    color: white;
  }
  .color1 {
    background-color: #19A7CE;
  }
  .color2 {
    background-color: #ce6419;
  }
  .color3 {
    background-color: #858b10;
  }
  .color4 {
    background-color: #35af0d;
  }
  .color5 {
    background-color: #2b19ce;
  }
  .color6 {
    background-color: #721888;
  }
  .color7 {
    background-color: var(--primary);
  }
  .color8 {
    background-color: #700e35;
  }
  .color9 {
    background-color: #4f934c;
  }
  .color10 {
    background-color: #ce198c;
  }
  .color11 {
    background-color: #9219ce;
  }
  .color12 {
    background-color: #7d9032;
  }
  .color13 {
    background-color: #124654;
  }
`;
export default ProfileComponent