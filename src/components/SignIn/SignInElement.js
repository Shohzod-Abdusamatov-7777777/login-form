import { Link } from "react-router-dom";
import styled from "styled-components";
import eyeclose from "../../images/eye_close.gif";
import eyeshow from "../../images/eye_show.jpg";
import oneopen from "../../images/one_open.gif";

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #010606;
  height: 100vh;
  width: 100%;
`;
export const SignLink = styled(Link)`
  color: #000;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  cursor: pointer;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.3rem;
  padding: 0 1rem;
  text-decoration: none;
`;
export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #dcfcf7;
  height: 500px;
  width: 400px;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  animation: sign 0.5s ease;
  @keyframes sign {
    0% {
      height: 0px;
      width: 0px;
    }
    100% {
      width: 400px;
      height: 500px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 60%;
    @keyframes sign {
      0% {
        height: 0px;
        width: 0px;
      }
      100% {
        width: 60%;
        height: 500px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    width: 80%;
    @keyframes sign {
      0% {
        height: 0px;
        width: 0px;
      }
      100% {
        width: 80%;
        height: 500px;
      }
    }
  }
`;
export const SignInForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  font-weight: bolder;
  font-family: sans-serif;
  margin-bottom: 1rem;
`;
export const SignImg = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: block;
  margin-top: -1rem;
  margin-bottom: 2rem;
  border: 4px solid #ccc;

  background: url(${({ pass, eye }) => (pass && eye ? oneopen : eyeshow)})
    center;
  background: url(${({ pass, eye }) => (pass && !eye ? eyeclose : eyeshow)})
    center;
  background-size: cover;
`;

export const Password = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Email = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SignInput = styled.input`
  outline: none;
  font-size: 1rem;
  height: 2.4rem;
  border-radius: 4px;
  border: 1px solid #888;
  padding-left: 5px;
`;

export const EyeIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 5px;
  bottom: 0;
  position: absolute;
  right: 0;
  color: #000;
  background: #fff;
  font-size: 1rem;
  height: 2.4rem;
  border-radius: 4px;
  border: 1px solid #888;
  cursor: pointer;
  color: ${({ eye }) => (eye ? "#174fcd" : "#111")};
`;
export const SignInBtn = styled.button`
  margin-top: 1rem;
  outline: none;
  border-radius: 4px;
  border: none;
  width: 80%;
  height: 2.3rem;
  background: #01bfdc;
  cursor: pointer;
  font-weight: bolder;
  font-size: 1rem;
  box-shadow: 0 5px 15px #01bfdc;
  transition: all 0.2s ease-in-out;
  margin-bottom: 1rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: lime;
    box-shadow: 0 5px 15px lime;
  }
`;
export const SignFooter = styled.footer`
  display: flex;
  align-items: center;
  background: #cbc;
  width: 100%;
  justify-content: space-around;
  bottom: 0;
  height: 60px;
  position: absolute;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;
export const Btn = styled.button`
  border: none;
  background: #001fff;
  cursor: pointer;
  font-weight: bolder;
  font-size: 1rem;
  height: 2rem;
  padding: 0 0.9rem;
  border-radius: 5px;
  font-family: sans-serif;
  box-shadow: 0 2px 15px blue;
  transition: all 0.2s ease-in-out;
  outline: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: lime;
    box-shadow: 0 2px 15px lime;
  }
`;
export const ForgetLink = styled(Link)`
  color: #000;
  font-weight: bolder;
  &:hover {
    color: blue;
  }
`;
