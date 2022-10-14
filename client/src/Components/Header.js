import styled, { keyframes } from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  return (
    <Head>
      <Div> Call/Text Today! (123) 456-7890 | office@landwiz.com</Div>
      <Div>
        <a href="https://www.facebook.com" target="_blank">
          <FaFacebook style={{ height: "30px", width: "30px" }}></FaFacebook>
        </a>
        <AiFillInstagram
          style={{ height: "34px", width: "34px" }}
        ></AiFillInstagram>
        <FaTwitter style={{ height: "30px", width: "30px" }}></FaTwitter>
        <GrMail style={{ height: "30px", width: "30px" }}></GrMail>
      </Div>
    </Head>
  );
};

export default Header;

const RedirectToSocial = styled.a`
  /* text-decoration: none; */
  list-style-type: none;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 15px;
  color: white;
  width: 100%;

  a {
    color: white;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50px;
  border: 2px solid blue;
  background-color: green;

  @media (max-width: 414px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    border: 2px solid blue;
    background-color: green;
  }
`;
