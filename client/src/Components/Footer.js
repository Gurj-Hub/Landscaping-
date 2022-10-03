import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Foot>
      <Icons>
        <FaFacebook style={{ height: "30px", width: "30px" }}></FaFacebook>
        <AiFillInstagram
          style={{ height: "34px", width: "34px" }}
        ></AiFillInstagram>
        <FaTwitter style={{ height: "30px", width: "30px" }}></FaTwitter>
      </Icons>
      <Copyright>
        © 2022 · ALL RIGHTS RESERVED. BHANDAL LANDSCAPING PRIVACY POLICY · USER
        AGREEMENT
      </Copyright>
    </Foot>
  );
};

export default Footer;

const Copyright = styled.div`
  font-size: 8px;
  font-weight: 700;
  width: 100%;
  text-align: center;
`;
const Icons = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-evenly;
`;
const Foot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80px;
  border: 2px solid green;
`;
