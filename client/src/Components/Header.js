import styled, { keyframes } from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Head>
      <BigScreen>
        <TheLink to="/">Home</TheLink>
        <TheLink to="/About">About</TheLink>
        <TheLink to="/ FAQs">FAQs</TheLink>
        <TheLink to="/Contact">Contact Us</TheLink>
      </BigScreen>
      <Div> Call/Text Today! (123) 456-7890 | office@landwiz.com</Div>
      <Div>
        <a href="https://www.facebook.com" target="_blank">
          <FaFacebook
            style={{ height: "30px", width: "30px", marginTop: "2px" }}
          ></FaFacebook>
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <AiFillInstagram
            style={{ height: "34px", width: "34px" }}
          ></AiFillInstagram>
        </a>
        <a href="https://twitter.com/?lang=en" target="_blank">
          <FaTwitter
            style={{ height: "30px", width: "30px", marginTop: "3px" }}
          ></FaTwitter>
        </a>
        <a href="https://outlook.live.com/owa/" target="_blank">
          <GrMail
            style={{ height: "30px", width: "30px", marginTop: "3px" }}
          ></GrMail>
        </a>
      </Div>
    </Head>
  );
};

export default Header;

const TheLink = styled(NavLink)``;

const BigScreen = styled.div`
  @media (min-width: 415px) {
    display: flex;
    justify-content: space-evenly;
  }
`;
const Div = styled.div`
  display: none;

  @media (max-width: 414px) {
    display: flex;
    justify-content: space-evenly;
    font-size: 15px;
    color: white;
    width: 100%;

    a {
      color: white;
    }
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
