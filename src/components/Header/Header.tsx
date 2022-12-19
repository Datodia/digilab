import styled, { keyframes } from "styled-components"
import { Keyframes } from "styled-components"

export const Header = () => {
    return (
        <Wrapper>
            <TopRec></TopRec>
            <RightDiv></RightDiv>
            <DarkContainer>
                <LitteRec></LitteRec>
                <Texts>
                    <Title>
                        Built for enterprise businesses
                    </Title>
                    <Desc>
                        Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.
                    </Desc>
                    <ContactDiv>
                        <Contact>
                            Contact Us
                            <ContactImg src="assets/contact.svg" />
                        </Contact>
                        <Explore>Explore</Explore>
                    </ContactDiv>
                    <Circle src="assets/circle.svg" />
                </Texts>
                <ManDiv>
                    <ManBlueRec />
                    <Man src="assets/headerImg.svg" />
                    <ManDesc>
                        <About>
                            I felt like I couldn’t grow until I moved to Opus. Now I am encouraged to sell more with them.
                        </About>
                        <NameDiv>
                            <LeftDiv>
                                <Name>Frank Dublin</Name>
                                <Position>CEO <span style={{ color: '#1355FF' }} >@stamps</span></Position>
                            </LeftDiv>
                            <img src="assets/qoute.svg" />
                        </NameDiv>
                    </ManDesc>
                </ManDiv>
            </DarkContainer>
            <ScrollDiv>
                <Scroll>
                    <ImgScroll src="assets/scroll.svg" />
                    <ScrollTxt>SCROLL FOR MORE</ScrollTxt>
                </Scroll>
                <BlueScrol></BlueScrol>
            </ScrollDiv>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 375px;
    margin: auto;
    @media screen and (min-width: 1000px) {
        width: 980px;
    }
`

const rotate = keyframes`
    to{
        transform: rotate(360deg)
    }
`
const TopRec = styled.div`
    width: 64px;
    height: 64px;
    background-color: #1355FF;
    animation: ${rotate} 6s linear infinite;
`

const DarkContainer = styled.div`
    width: 100%;
    background-color: #061237;
    @media screen and (min-width: 1000px) {
        display: flex;
        height: 572px;
    }
`
const LitteRec = styled.div`
    background-color: #1355FF;
    width: 32px;
    height: 32px;
    transform: translateX(64px);
    
`

const Texts = styled.div`
    @media screen and (min-width: 1000px) {
    padding-left: 25px;
    transform: translateY(80px);
    }
`

const Title = styled.h1`
    font-size: 54px;
    color: white;
    font-weight: 700;
    text-align: center;
    margin-top: 48px;
    @media screen and (min-width: 1000px) {
        text-align: start;
        width: 330px;
    }
`
const Desc = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: white;
    width: 330px;
    margin: auto;
    margin-top: 15px;
    text-align: center;
    line-height: 36px;
    @media screen and (min-width: 1000px) {
        text-align: start;
    }
`

const ContactDiv = styled.div`
    width: 200px;
    margin: auto;
    @media screen and (min-width: 1000px) {
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }
`

const Contact = styled.div`
    width: 155px;
    height: 52px;
    background-color: #1355FF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 51px;
    color: white;
    gap: 15px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    @media screen and (min-width: 1000px) {
        margin-top: 20px;
        &:hover{
            transform: scale(1.1);
            background-color: #132eff;
            transition: .3s;
        }
    }
`
const ContactImg = styled.img`
    cursor: pointer;
`

const Explore = styled.h2`
    color: white;
    font-size: 14px;
    font-weight: 400;
    margin-top: 19px;
    text-align: center;
    cursor: pointer;
    @media screen and (min-width: 1000px) {
        &:hover{
            transform: scale(1.1);
            color: #c6c6c6;
            font-weight: 700;
            transition: .3s;
        }
    }
`

const ManDiv = styled.div`
    width: 330px;
    margin: auto;
    margin-top: 17px;
    @media screen and (min-width: 1000px) {
        width: 360px;
        transform: translateY(77px);  
    }
    
`
const ManBlueRec = styled.div`
    width: 24px;
    height: 24px;
    background-color: #0133B7;
    transform: translateX(329px);
    @media screen and (min-width: 1000px) {
        width: 48px;
        height: 48px;
        transform: translateX(358px);

    }

`

const Man = styled.img`
    width: 100%;
`

const Circle = styled.img`
    display: none;
    @media screen and (min-width: 1000px) {
        display: flex; 
        transform: translate(290px, -369px);
    }
`

const RightDiv = styled.div`
    display: none;
    width: 400px;
    height: 490px;
    background-color: #1355FF;
    position: absolute;
    transform: translate(620px, -66px);
    @media screen and (min-width: 1000px) {
        display: flex; 
    }
`

const ManDesc = styled.div`
    background-color: white;
    width: 290px;
    height: 230px;
    position: absolute;
    transform: translate(120px, -231px);
    display: none;
    padding: 14px 40px;
    @media screen and (min-width: 1000px) {
        display: flex; 
        flex-direction: column;
    }
`

const About = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #37456C;
    line-height: 32px;
`

const NameDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`
const LeftDiv = styled.div`
    
`

const Name = styled.h3`
    color: #333333;
    font-size: 24px;
    font-weight: 700;
`

const Position = styled.h4`
    font-size: 16px;
    font-weight: 500;
    color: #67718E;
`

const ScrollDiv = styled.div`
    height: 116px;
    width: 800px;
    margin: auto;
    display: none;
    @media screen and (min-width: 1000px) {
        display: flex; 
    }
`

const Scroll = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
const BlueScrol = styled.div`
    width: 59%;
    background-color: #1355FF;
`

const ImgScroll = styled.img`

`
const ScrollTxt = styled.h4`
    font-size: 14px;
    color: #B6BCCE;
    font-weight: 700;
    letter-spacing: 1.5px
` 
