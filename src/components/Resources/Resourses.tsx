import styled from "styled-components"

export const Resourses = () => {
    return (
        <Wrapper>
            <Head>
                <Title>Resourses</Title>
                <Button>Get Started</Button>
            </Head>
            <Body>
                <Item>
                    <Img src="assets/item1.svg" />
                    <ItemTitle>
                        A high-converting, high-performing template
                    </ItemTitle>
                    <ItemDesc>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</ItemDesc>
                    <ItemBtn>Read Article</ItemBtn>
                </Item>
                <Item>
                    <Img src="assets/item2.svg" />
                    <ItemTitle>
                        With a clean, minimal and professional look
                    </ItemTitle>
                    <ItemDesc>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</ItemDesc>
                    <ItemBtn>Read Article</ItemBtn>
                </Item>
                <Item>
                    <Img src="assets/item3.svg" />
                    <ItemTitle>
                        With a clean, minimal and professional look
                    </ItemTitle>
                    <ItemDesc>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</ItemDesc>
                    <ItemBtn>Read Article</ItemBtn>
                </Item>
            </Body>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 330px;
    margin: auto;
    border: 1px solid blue;
    @media screen and (min-width: 1000px) {
        width: 980px;
    }
`

const Head = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    gap: 15px;
    @media screen and (min-width: 1000px) {
        flex-direction: row;
        gap: 450px;
    }
`
const Title = styled.h2`
    font-size: 48px;
    font-weight: 700;
    color: #061237;
    letter-spacing: -1.44px;
`

const Button = styled.div`
    width: 142px;
    height: 52px;
    background-color: #1355FF;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
`

const Body = styled.div`
    margin-top: 50px;
    @media screen and (min-width: 1000px) {
        display: flex;
        justify-content: space-between;
    }
`
const Item = styled.div`
    margin-bottom: 80px;
    @media screen and (min-width: 1000px) {
        width: 280px;
    }
`
const Img = styled.img`
    width: 100%;
`
const ItemTitle = styled.h2`
    font-size: 23px;
    font-weight: 700;
    color: #061237;
    margin: 20px 0;
`
const ItemDesc = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: #37456C;
    font-weight: 400;
`
const ItemBtn = styled.div`
    width: 146px;
    height: 52px;
    background-color:#F7F9FC;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-top: 20px;
`