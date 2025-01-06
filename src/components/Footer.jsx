import NavBar from "./NavBar";

import styled from "styled-components";
import { colorGrayDark, colorPrimario } from "../components/UI/variables";
import { useNavigate } from "react-router-dom";
import { Btn } from "./UI";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <FooterContainer>
        Desarrollado por jissbossh
      </FooterContainer>
    </>
  );
};
export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.25em;
  color: orange;
  justify-content: center;
  align-items: center;
  height: 10rem;
  background-color: ${colorGrayDark};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

