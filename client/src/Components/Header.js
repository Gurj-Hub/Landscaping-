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
    </Head>
  );
};

export default Header;

const Div = styled.div`
  font-size: 15px;
  color: white;
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
