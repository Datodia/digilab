import styled from "styled-components"

export const Work = () => {
    return (
        <Container>
            <Wrapper>
                <Header>
                    <Title>Ways to work with us</Title>
                    <Button>Get Started</Button>
                </Header>
                <BlogDiv>
                    <Blog>

                        <Img src='assets/blog1.svg' />
                        <Rec1></Rec1>
                        <Rec2></Rec2>
                        <BlogTitle>Project Management</BlogTitle>
                        <BlogDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</BlogDesc>
                    </Blog>
                    <Blog>
                        <Img src='assets/blog2.svg' />
                        <Rec3></Rec3>
                        <BlogTitle>Advanced Analytics</BlogTitle>
                        <BlogDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</BlogDesc>
                    </Blog>
                    <Blog>
                        <Img src='assets/blog3.svg' />
                        <Rec4></Rec4>
                        <BlogTitle>Marketing & Dashboard</BlogTitle>
                        <BlogDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</BlogDesc>
                    </Blog>
                </BlogDiv>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 100wv;
    background-color: #061237;

`

const Wrapper = styled.div`
    width: 330px;
    margin:auto;
    background-color: #061237;
    @media screen and (min-width: 1000px) {
        width: 990px;
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 95px;
    @media screen and (min-width: 1000px) {
       flex-direction: row;
       gap: 300px;
    }
`
const Title = styled.div`
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -1.44px;
    color: white;
    text-align: center;
`
const Button = styled.div`
    width: 142px;
    height: 52px;
    background-color: #1355FF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: 15px;
    &:hover{
            transform: translateY(-10px);
            transition: .3s;
            font-weight: 700;
        }
`

const BlogDiv = styled.div`
    margin-top: 60px;
    @media screen and (min-width: 1000px) {
        display: flex;
    }
`
const Blog = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover{
            transform: scale(1.1);
            transition: .3s;
            font-weight: 700;
        }
`
const Img = styled.img`
    width: 280px;
`
const BlogTitle = styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: white;
    margin-top: 30px;
    margin-bottom: 12px;
`
const BlogDesc = styled.p`
    font-size: 16px;
    color: #B6BCCE;
    line-height: 32px;
    font-weight: 400;
    margin-bottom: 80px;
`

const Rec1 = styled.div`
    width: 32px;
    height: 32px;
    background-color:#18264E;
    transform: translate(155px, -252px);
    position: absolute;
`

const Rec2 = styled.div`
    width: 64px;
    height: 64px;
    background-color: #1355FF;
    position: absolute;
    top: 0px;
    left: 240px;
    
`
const Rec3 = styled.div`
    width: 64px;
    height: 64px;
    background-color: #B9ECFF;
    position: absolute;
    top: 185px;
    left: 3px;
`

const Rec4 = styled.div`
    width: 32px;
    height: 32px;
    background-color: #1355FF;
    position: absolute;
    transform: translate(156px, -120px);    
`