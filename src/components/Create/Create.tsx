import styled from "styled-components"

export const Create = () => {
    return (
        <Wrapper>
            <Pages>
                <Title>
                    Create pages using beautiful components.
                </Title>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </Desc>
                <Button>
                    Learn More
                </Button>
            </Pages>
            <Choose>
                <Block>
                    <ImgDiv>
                        <Img src="assets/sent.svg" />
                    </ImgDiv>
                    <TextDiv>
                        <TextTitle>Choose your sections</TextTitle>
                        <TextDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</TextDesc>
                    </TextDiv>
                </Block>
                <Block>
                    <ImgDiv>
                        <Img src="assets/img.svg" />
                    </ImgDiv>
                    <TextDiv>
                        <TextTitle>Add the images and text you need</TextTitle>
                        <TextDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</TextDesc>
                    </TextDiv>
                </Block>
            </Choose>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 330px;
    margin: auto;
    margin-top: 70px;
    @media screen and (min-width: 1000px) {
        width: 980px;
        display: flex;
        justify-content: space-between;
    }
`

const Choose = styled.div`
    margin-top: 30px;
    @media screen and (min-width: 1000px) {
        order: 1;
        display: flex;
        flex-direction: column;
    }
`
const Block = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 60px;
    @media screen and (min-width: 1000px) {
        gap: 30px;
        &:hover{
            transform: scale(1.1);
            transition: .3s;
            font-weight: 700;
        }
    }
`

const ImgDiv = styled.div`
    width: 64px;
    height: 64px;
    background-color: #1355FF;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    
`

const TextDiv = styled.div`
    width: 215px;
`

const TextTitle = styled.h2`
    font-size: 24px;
    color: #061237;
    font-weight: 700;
`
const TextDesc = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: #061237;
    font-weight: 400;
    margin-top: 13px;
`

const Pages = styled.div`
    @media screen and (min-width: 1000px) {
        order: 2;
        display: flex;
        flex-direction: column;
        width: 550px;
    }
`

const Title = styled.h2`
    font-size: 48px;
    color:#061237;
    font-weight: 700;
    @media screen and (min-width: 1000px) {
        margin-top: 20px;
    }
`
const Desc = styled.p`
    font-size: 16px;
    font-weight: 400;
    color:#37456C;
    line-height: 32px;
    margin-top: 30px;
    padding-left: 70px;
    @media screen and (min-width: 1000px) {
        margin-top: 50px;
    }
`

const Button = styled.div`
    width: 141px;
    height: 52px;
    background-color: #F7F9FC;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 70px;
    margin-top: 40px;
    cursor: pointer;
    @media screen and (min-width: 1000px) {
        margin-top: 80px;
        &:hover{
            transform: scale(1.1);
            transition: .3s;
            font-weight: 700;
            background-color: gray;
        }
    }
`