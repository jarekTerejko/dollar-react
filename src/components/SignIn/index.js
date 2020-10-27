import React from 'react'
import {SignInContainer, SignInFormWrapper, Logo, SignInForm, SignInH1, SignInLabel, SignInInput, SignInButton, ForgotText} from './SignInElements'

const SignIn = () => {
    return (
        <SignInContainer>
            <SignInFormWrapper>
                <Logo to="/">dollar</Logo>
                    <SignInForm>
                        <SignInH1>Sign in to your account</SignInH1>
                        <SignInLabel >Email</SignInLabel>
                        <SignInInput type="email" ></SignInInput>
                        <SignInLabel >Password</SignInLabel>
                        <SignInInput type="password" ></SignInInput>
                        <SignInButton type="submit" >Continue</SignInButton>
                        <ForgotText to="/">Forgot password?</ForgotText>
                    </SignInForm>
            </SignInFormWrapper>
        </SignInContainer>
    )
}

export default SignIn
