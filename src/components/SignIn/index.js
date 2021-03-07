import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SignInForm,
  SignInContainer,
  SignInWrapper,
  SignImg,
  SignInBtn,
  SignInput,
  EyeIcon,
  Email,
  Password,
  SignLink,
  ForgetLink,
  SignFooter,
  Btn,
} from "./SignInElement";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

const SignIn = () => {
  const [eye, setEye] = useState(false);
  const handleEye = () => {
    setEye(!eye);
  };
  const [pass, setPass] = useState(false);
  const handlePass = () => {
    setPass(!pass);
  };
  return (
    <>
      <SignInContainer>
        <SignInWrapper>
          <SignLink to="/">
            <h4>SHOHZOD.UZ</h4>
            <FaTimes />
          </SignLink>

          <SignImg pass={pass} eye={eye}></SignImg>
          <SignInForm>
            <Email>
              <label for="email">Email</label>
              <SignInput
                type="email"
                name="email"
                id="email"
                placeholder="email@domain.com"
              />
              <br />
            </Email>
            <Password onMouseEnter={handlePass} onMouseLeave={handlePass}>
              <label for="pass">Password</label>
              <SignInput
                type={eye ? "text" : "password"}
                name="pass"
                id="pass"
              />
              <EyeIcon onClick={handleEye} eye={eye}>
                {eye ? <FaEye /> : <FaEyeSlash />}
              </EyeIcon>
            </Password>
          </SignInForm>
          <SignInBtn type="submit">Sign In</SignInBtn>
          <div style={{ alignSelf: "flex-start", marginLeft: "10%" }}>
            <input type="checkbox" />
            <span> Remember me</span>
          </div>
          <SignFooter>
            <Btn>
              <Link style={{ textDecoration: "none", color: "#000" }} to="/">
                Cancel
              </Link>
            </Btn>
            <ForgetLink>
              Forgot <i> password?</i>
            </ForgetLink>
          </SignFooter>
        </SignInWrapper>
      </SignInContainer>
    </>
  );
};

export default SignIn;
