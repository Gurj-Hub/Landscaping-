import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <Foot>
      <Icons>
        <Circle>
          <FaFacebook style={{ height: "30px", width: "30px" }}></FaFacebook>
        </Circle>
        <Circle>
          <AiFillInstagram
            style={{ height: "34px", width: "34px" }}
          ></AiFillInstagram>
        </Circle>
        <Circle>
          <FaTwitter style={{ height: "30px", width: "30px" }}></FaTwitter>
        </Circle>
        <Circle>
          <GrMail style={{ height: "30px", width: "30px" }}></GrMail>
        </Circle>
      </Icons>
      <Copyright>
        © 2022 · ALL RIGHTS RESERVED. BHANDAL LANDSCAPING{" "}
        <a href="https://en.wikipedia.org/wiki/Privacy_policy" target="_blank">
          PRIVACY POLICY
        </a>{" "}
        ·{" "}
        <a
          href="https://www.termsfeed.com/blog/examples-user-agreements/"
          target="_blank"
        >
          USER AGREEMENT
        </a>
      </Copyright>
    </Foot>
  );
};

export default Footer;

const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
`;
const Copyright = styled.div`
  font-size: 14px;
  /* font-weight: 700; */
  width: 100%;
  text-align: center;
  color: white;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: red;
    }
  }

  @media (max-width: 414px) {
    font-size: 14px;
    width: 100%;
    text-align: center;
    color: white;

    a {
      color: white;
      text-decoration: none;

      &:hover {
        color: red;
      }
    }
  }
`;
const Icons = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-evenly;
  @media (max-width: 414px) {
    display: none;
  }
`;
const Foot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80px;
  background-color: #0339fc;

  @media (max-width: 414px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80px;
  }
`;
