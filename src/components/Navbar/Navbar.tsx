import styled from "styled-components"

export default function Navbar() {
    return (
        <Wrapper>
            <Logo src="assets/logo.svg" />
            <BrgDiv>
                <BrgIcon src="assets/brg.svg" />
            </BrgDiv>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 375px;
    height: 100px;
    margin: auto;
    border: 2px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.img`
    
`

const BrgDiv = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
`
const BrgIcon = styled.img`
    
`