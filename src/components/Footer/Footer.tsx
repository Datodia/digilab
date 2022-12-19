import styled from "styled-components"

export const Footer = () => {
    return (
        <Container>
            <Logo src="assets/logo.svg" />
            <Wrapper>
                <Block>
                    <Title>overview</Title>
                    <Link>Overview</Link>
                    <Link>Landings</Link>
                    <Link>Company</Link>
                    <Link>Pricing</Link>
                    <Link>CMS Pages</Link>
                    <Link>Accounts</Link>
                    <Link>Buy for figma</Link>
                </Block>
                <Block>
                    <Title>pages</Title>
                    <Link>Landing 1</Link>
                    <Link>Landing 2</Link>
                    <Link>Landing 3</Link>
                    <Link>Company 1</Link>
                    <Link>Company 2</Link>
                    <Link>Company 3</Link>
                    <Link>Blog 1</Link>
                    <Link>Blog 2</Link>
                    <Link>Contact 1</Link>
                    <Link>Contact 2</Link>
                    <Link>Contact 3</Link>
                </Block>
                <Block>
                    <Title>pages</Title>
                    <Link>Case Studies</Link>
                    <Link>Carrers</Link>
                    <Link>Pricing 1</Link>
                    <Link>Pricing 2</Link>
                    <Link>Pricing 3</Link>
                    <Link>Login</Link>
                    <Link>Register</Link>
                    <Link>Forgot Password</Link>
                    <Link>Blog Post</Link>
                    <Link>Team Member</Link>
                    <Link>Case Study</Link>
                    <Link>Job Post</Link>
                </Block>
                <SearchDiv>
                    <InputDiv>
                        <Input placeholder="Email Address" />
                        <Button>Get Started</Button>
                    </InputDiv>
                    <WebflowDiv>
                        <WebflowItem>
                            <WebflowTitle>OPUS FOR WEBFLOW</WebflowTitle>
                            <WebflowDesc>Lorem Ipsum</WebflowDesc>
                        </WebflowItem>
                        <WebflowItem>
                            <WebflowTitle>OPUS FOR Figma</WebflowTitle>
                            <WebflowDesc>Lorem Ipsum</WebflowDesc>
                        </WebflowItem>
                    </WebflowDiv>
                    <Rights>
                        © Template by <span style={{ color: '#1355FF' }}>Lorem</span> - Powered by <span style={{ color: '#1355FF' }}>ipsum</span>
                    </Rights>
                </SearchDiv>
            </Wrapper>
            <LicenceDiv>
                <Licence>Style Guide</Licence>
                <Licence>Licence</Licence>
                <Licence>Changelog</Licence>
            </LicenceDiv>
        </Container>

    )
}

const Container = styled.div`
    width: 330px;
    margin:  auto;
    @media screen and (min-width: 1000px) {
        width: 980px;
    }
`
const Wrapper = styled.div`
    @media screen and (min-width: 1000px) {
        display: flex;
        justify-content: space-between;
    }
`
const Logo = styled.img`
    
`
const Block = styled.div`
    margin-top: 40px;
`
const Title = styled.h3`
    font-size: 12px;
    letter-spacing: 1.5px;
    font-weight: 700;
    color: #B6BCCE;
    text-transform: uppercase;
`
const Link = styled.h4`
    font-size: 14px;
    color: #061237;
    font-weight: 500;
    margin: 16px 0;
    cursor: pointer;
`

const SearchDiv = styled.div`
    margin-top: 30px;
`
const InputDiv = styled.div`
    width: 300px;
    height: 48px;
    display: flex;
    @media screen and (min-width: 1000px) {
        width: 430px;
    }
`
const Input = styled.input`
    width: 55%;
    height: 100%;
    padding: 0 20px;
    @media screen and (min-width: 1000px) {
        width: 70%;
    }
`
const Button = styled.div`
    background-color: #1355FF;
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    @media screen and (min-width: 1000px) {
        width: 30%;
    }
`

const WebflowDiv = styled.div`
    margin-top: 35px;
    @media screen and (min-width: 1000px) {
        display: flex;
        justify-content: center;
        gap: 100px
    }
`
const WebflowItem = styled.div`
    margin-bottom: 30px;
`
const WebflowTitle = styled.h3`
    font-size: 12px;
    margin: 11px 0;
    font-weight: 700;
    color: #B6BCCE;
    letter-spacing: 1.5px;
`
const WebflowDesc = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color:#1355FF;
`

const Rights = styled.h4`
    font-size: 16px;
    font-weight: 400;
    color:#B6BCCE;
`

const LicenceDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 22px;
    border-top: 1px solid gray;
    padding-top: 20px;
    margin: 30px 0;
`

const Licence = styled.h5`
    font-size: 14px;
    font-weight: 400;
    color:#67718E;
    cursor: pointer;
`