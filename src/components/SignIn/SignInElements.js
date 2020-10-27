import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignInContainer = styled.div`
  min-height: 100vh;
  background-color: #cd6133;
`;

export const SignInFormWrapper = styled.div`
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
`;

export const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const SignInForm = styled.form`
  background: #010101;
  max-width: 500px;
  width: 100%;
  padding: 80px 40px;
  color: #fff;
  border-radius: 5px;

  @media screen and (max-width: 400px) {
      padding: 50px 20px
  }
`;

export const SignInH1 = styled.h1`
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

export const SignInLabel = styled.label`
  margin-bottom: 8px;
  display: block;
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const SignInInput = styled.input`
  padding: 16px;
  margin-bottom: 30px;
  border: none;
  display: block;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  font-family: "Encode Sans Semi Expanded", sans-serif;
`;

export const SignInButton = styled.button`
  background: #cd6133;
  border: none;
  cursor: pointer;
  color: #fff;
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 18px;
  border-radius: 5px;
  margin-bottom: 32px;
  margin-top: 50px;
  font-family: "Encode Sans Semi Expanded", sans-serif;
  transition: 0.3s;
  font-weight: 700;
  letter-spacing: 1px;

  &:hover {
    background: #fff;
    color: #cd6133;
  }
`;

export const ForgotText = styled(Link)`
  text-align: center;
  margin-top: 20px;
  text-decoration: none;
  color: #fff;
  font-size: 14px;
`;
