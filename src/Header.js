import React from "react";
import styled from "styled-components";
import logo from "./assets/it.png";

const Header = () => {
  return (
    <Head>
      <div>
        <img src={logo} width='60px' alt='Logo' />
      </div>
      <div>El crucigrama</div>
      <div>EVSports</div>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  height: 50px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  div:last-child {
    font-style: italic;
    color: #766800;
  }
`;
