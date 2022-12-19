import styled from "styled-components"
export const Trust = () => {
    return (
        <Wrapper>
            <Title>Trusted and loved by the world’s best teams</Title>
            <Brands>
                <BrandItem src="assets/wetrabsfer.svg" />
                <BrandItem src="assets/stamps.svg" />
                <BrandItem src="assets/manter.svg" />
                <BrandItem src="assets/sugarcane.svg" />
            </Brands>
            <Statistic>
                <StatItem>
                    <Number>99.95%</Number>
                    <StatName>Accuracy rate</StatName>
                    <StatDesc>in fulfilling orders</StatDesc>
                </StatItem>
                <StatItem>
                    <Number>5,000+</Number>
                    <StatName>Ecommerce businesses</StatName>
                    <StatDesc>Partner with Opus</StatDesc>
                </StatItem>
                <StatItem>
                    <Number>99.96%</Number>
                    <StatName>Of orders ship on time</StatName>
                    <StatDesc>within SLA</StatDesc>
                </StatItem>
                <StatItem>
                    <Number><span style={{ color: 'gray' }}>#</span>1</Number>
                    <StatName>Best Fulfillment Technology</StatName>
                    <StatDesc>by AdWeek's Retail Awards</StatDesc>
                </StatItem>
            </Statistic>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 375px;
    margin: auto;
    margin-top: 40px;
    @media screen and (min-width: 1000px) {
        width: 980px;
        margin-top: 100px;
    }
`

const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    color: #061237;
    text-align: center;
`

const Brands = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1000px) {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 50px;
    }
`
const BrandItem = styled.img`
    cursor: pointer;
    &:hover{
            transform: scale(1.1);
            filter: brightness(50%);
            transition: .3s;
        }

`

const Statistic = styled.div`
    margin-top: 100px;
    @media screen and (min-width: 1000px) {
        display: flex;
        justify-content: space-around;
    }
`
const StatItem = styled.div`
    text-align: center;
    margin-bottom: 70px;
    &:hover{
            transform: scale(1.1);
            transition: .3s;
        }
`

const Number = styled.h2`
    font-size: 37px;
    color: #061237;
    font-weight: 700;
`

const StatName = styled.h3`
    font-size: 16px;
    font-weight: 500;
    color: #061237;
    margin: 10px 0;
`

const StatDesc = styled.p`
    font-size: 16px;
    font-weight: 400;
    color:#67718E;
`