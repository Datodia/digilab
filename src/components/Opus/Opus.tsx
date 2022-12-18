import styled from "styled-components"

export const Opus = () => {
    return (
        <Wrapper>
            <MakeDiv>
                <OpusRec></OpusRec>
                <Title>
                    Make your site better with Opus
                </Title>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Cras eget consectetur eros.
                    Aliquam erat volutpat. Praesent pulvinar arcu non
                    lectus dapibus, a pulvinar mauris aliquam.
                </Desc>
                <Button>Learn More</Button>
            </MakeDiv>

            <BuildDiv>
                <BuildRec></BuildRec>

                <UIBlock>
                    <Img src="assets/cursor.svg" />
                    <UITitle>
                        Build or Customize a Website in Minutes
                    </UITitle>
                </UIBlock>
                <UIBlock>
                    <Img src="assets/UI.svg" />
                    <UITitle>
                        Our UI Kit was made for creativity.
                    </UITitle>
                </UIBlock>
                <BuildLittleRec></BuildLittleRec>
            </BuildDiv>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 330px;
    margin: auto;
    border: 2px solid red;
    margin-top: 130px;
    @media screen and (min-width: 1000px) {
        width: 980px;
        display: flex;
        justify-content: space-between;
    }
`

const MakeDiv = styled.div`
    @media screen and (min-width: 1000px) {
        width: 500px;
    }
`
const OpusRec = styled.div`
    width: 64px;
    height: 64px;
    background-color: #F7F9FC;
`

const Title = styled.h1`
    font-size: 48px;
    font-weight: 700;
    color: #061237;
    letter-spacing: -1.44px;
    margin-top: 30px;
    @media screen and (min-width: 1000px) {
        width: 440px;
    }
`
const Desc = styled.p`
    font-size: 16px;
    color: #37456C;
    font-weight: 400;
    line-height: 32px;
    margin-top: 10px;
    @media screen and (min-width: 1000px) {
        transform: translateX(40px)
    }
`

const Button = styled.div`
    width: 157px;
    height: 48px;
    background-color: #1355FF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: white;
    margin-top: 45px;
    cursor: pointer;
    @media screen and (min-width: 1000px) {
        transform: translateX(40px)
    }
`

const BuildDiv = styled.div`
    position: relative;
`

const UIBlock = styled.div`
    width: 330px;
    border: 1px solid blue;
    height: 170px;
    padding: 35px 25px;
    margin-top: 30px;
    background-color: white;
    @media screen and (min-width: 1000px) {
        transform: translateX(-40px)
    }
`
const Img = styled.img`
`
const UITitle = styled.h2`
    font-size: 24px;
    color: #061237;
    font-weight: 700;
`

const BuildRec = styled.div`
    width: 245px;
    height: 400px;
    background-color: #F2F3F8;
    position: absolute;
    z-index: -1;
    transform: translateX(86px);
    @media screen and (min-width: 1000px) {
        transform: translate(85px, 28px);
    }
`
const BuildLittleRec = styled.div`
    width: 71px;
    height: 71px;
    background-color: #F2F3F8;
    margin: 26px 0 0 14px;
`