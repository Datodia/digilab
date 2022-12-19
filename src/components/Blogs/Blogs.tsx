import styled from "styled-components"
export const Blogs = () => {
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
                    <Img style={{ filter: "brightness(0)", marginLeft: "18%" }} src="assets/stamps.svg" />
                    <Title style={{ fontSize: 24, textAlign: 'center' }}>
                        The Opus UI Kit lets you showcase your work in style. It's helped take our business online
                    </Title>
                    <Name>ALEXA F.</Name>
                    <Position>designer <span style={{ color: '#1355FF' }}>@STAMPS</span></Position>
                    <Buttons>
                        <Img style={{ cursor: 'pointer' }} src="assets/arrow.svg" />
                        <Img style={{ cursor: 'pointer', transform: 'rotate(180deg)' }} src="assets/arrow.svg" />
                    </Buttons>
                </TxtDiv>
                <Img style={{ width: 330 }} src="assets/women3.svg" />
            </Blog>
        </Wrapper >
    )
}

const Wrapper = styled.div`
    width: 330px;
    margin: auto;
    border: 1px solid green;
    @media screen and (min-width: 1000px) {
        width: 980px;
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
`

const Img = styled.img`
    
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