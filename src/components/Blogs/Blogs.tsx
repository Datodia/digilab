import { useState } from "react"
import styled, { keyframes } from "styled-components"
export const Blogs = () => {
    const [num, setNum] = useState<number>(1)

    const prev = () => {
        setNum(num => num - 1)
        if (num === 1) {
            setNum(3)
        }
    }
    const next = () => {
        setNum(num => num + 1)
        if (num === 3) {
            setNum(1)
        }
    }

    return (
        <Wrapper>
            <Blog>
                <TxtDiv>
                    <Feature></Feature>
                    <FeatureTxt>FEATURES</FeatureTxt>
                    <Title>You’re not just doing business. You’re doing life.
                    </Title>
                    <Tasks>
                        <Task>
                            <Img src="assets/done.svg" />
                            <TaskTitle>Responsive Components</TaskTitle>
                        </Task>
                        <Task>
                            <Img src="assets/done.svg" />
                            <TaskTitle>Over 50 Sections</TaskTitle>
                        </Task>
                        <Task>
                            <Img src="assets/done.svg" />
                            <TaskTitle>Handcrafted Pages</TaskTitle>
                        </Task>
                    </Tasks>
                </TxtDiv>
                <Img src="assets/women1.svg" />
            </Blog>

            <Blog>
                <TxtDiv style={{ order: 2 }}>
                    <Feature></Feature>
                    <FeatureTxt>OUR KNOWLEDGE</FeatureTxt>
                    <Title>
                        A UI Kit that's Modern & Elegant
                    </Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.
                    </Desc>
                    <ImgDiv></ImgDiv>
                </TxtDiv>
                <Img style={{ marginTop: '25px', marginLeft: 25, order: 1 }} src="assets/women2.svg" />
            </Blog>

            <Blog>
                <TxtDiv>
                    {num === 1 && <Img style={{ filter: "brightness(0)", marginLeft: "18%" }} src="assets/stamps.svg" />}
                    {num === 2 && <Img style={{ filter: "brightness(0)", marginLeft: "18%" }} src="assets/manter.svg" />}
                    {num === 3 && <Img style={{ filter: "brightness(0)", marginLeft: "18%" }} src="assets/sugarcane.svg" />}
                    {num === 1 && <Title style={{ fontSize: 24, textAlign: 'center' }}>
                        The Opus UI Kit lets you showcase your work in style. It's helped take our business online
                    </Title>}
                    {num === 2 && <Title style={{ fontSize: 24, textAlign: 'center' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.
                    </Title>}
                    {num === 3 && <Title style={{ fontSize: 24, textAlign: 'center' }}>
                        A UI Kit that's Modern & ElegantA UI Kit that's Modern & ElegantA UI Kit that's Modern & Elegant
                    </Title>}
                    {num === 1 && <Name>ALEXA F.</Name>}
                    {num === 2 && <Name>JESSICA B.</Name>}
                    {num === 3 && <Name>VANNESA L.</Name>}
                    {num === 1 && <Position>designer <span style={{ color: '#1355FF' }}>@STAMPS</span></Position>}
                    {num === 2 && <Position>developer <span style={{ color: '#1355FF' }}>@Manter</span></Position>}
                    {num === 3 && <Position>HR <span style={{ color: '#1355FF' }}>@sugarcane</span></Position>}
                    <Buttons>
                        <BtnImg onClick={prev} src="assets/arrow.svg" />
                        <BtnImg onClick={next} src="assets/next.svg" />
                    </Buttons>
                </TxtDiv>
                {num === 1 && <Img style={{ width: 330 }} src="assets/women3.svg" />}
                {num === 2 && <Img style={{ width: 330 }} src="assets/women1.svg" />}
                {num === 3 && <Img style={{ width: 330 }} src="assets/women2.svg" />}
            </Blog>
        </Wrapper >
    )
}

const Wrapper = styled.div`
    width: 330px;
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

const Blog = styled.div`
    margin-bottom: 40px;
    @media screen and (min-width: 1000px) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 120px;
    }
`

const TxtDiv = styled.div`
    @media screen and (min-width: 1000px) {
        width: 450px;
    }
`
const Feature = styled.div`
    width: 64px;
    height: 64px;
    background-color: #F7F9FC;
    animation: ${rotate} 5s linear infinite;
    background-color: #ada8a8;
`
const FeatureTxt = styled.p`
    font-size: 14px;
    color: #67718E;
    font-weight: 700;
    letter-spacing: 1.5px;
    transform: translate(32px, -40px);
`
const Title = styled.h2`
    font-size: 48px;
    color: #061237;
    letter-spacing: -1.44px;
    line-height: 50px;
`

const Tasks = styled.div`
    margin: 30px 0;
`

const Task = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 16px;
    &:hover{
            transform: scale(1.1);
            transition: .3s;
        }
`

const Img = styled.img`
    @media screen and (min-width: 1000px){
        &:hover{
            transform: scale(1.2);
            transition: .3s;
        }
    }
`
const TaskTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    color: #061237;
`

const Desc = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #37456C;
    margin: 30px 0;
    line-height: 32px;
`

const ImgDiv = styled.div`
    width: 245px;
    height: 328px;
    background-color: #F5FCFF;
    position: absolute;
    z-index: -1;
    @media screen and (min-width: 1000px){
        transform: translate(-530px, -302px);
    }
`

const Name = styled.h3`
    font-size: 16px;
    font-weight: 700;
    color: #061237;
    text-align: center;
    margin-top: 30px;
`

const Position = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: #67718E;
    text-transform: uppercase;
    text-align: center;
    margin-top: 6px;
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 20px;
`

const BtnImg = styled.img`
    cursor: pointer;
    @media screen and (min-width: 1000px){
        &:hover{
            transform: scale(1.2);
            filter: brightness(50%);
            transition: .3s;
        }
    }
`