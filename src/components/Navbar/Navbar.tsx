import { useState } from "react"
import styled from "styled-components"

export default function Navbar() {

    const [show, setShow] = useState(false)


    return (
        <>
            <Wrapper>
                <Logo src="assets/logo.svg" />
                <Overview>
                    <Item>OverView</Item>
                    <Item>Pages</Item>
                    <Item>Template</Item>
                </Overview>
                <Contact>Contact</Contact>
                <BrgDiv onClick={() => { setShow(!show) }}>
                    <BrgIcon src="assets/brg.svg" />
                </BrgDiv>
            </Wrapper>
            {show ?
                <Brg>
                    <BrgTextDiv>
                        <BrgItem>Overview</BrgItem>
                        <BrgItem>Pages</BrgItem>
                        <BrgItem>Template</BrgItem>
                    </BrgTextDiv>
                    <BrgContact>Contact</BrgContact>
                </Brg> : null}
        </>
    )
}

const Wrapper = styled.div`
    width: 375px;
    height: 100px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    @media screen and (min-width: 1000px) {
        width: 980px;
        height: 130px;
    }
`

const Logo = styled.img`
    cursor: pointer;
    @media screen and (min-width: 1000px){
        &:hover{
            transform: scale(1.1);
            transition: .3s;
        }
    }
`

const Overview = styled.ul`
    display: none;
    @media screen and (min-width: 1000px) {
        list-style:  none;
        display: flex;
        gap: 45px;
    }
`

const Item = styled.li`
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    @media screen and (min-width: 1000px){
        &:hover{
            transform: scale(1.1);
            transition: .3s;
            font-weight: 700;
        }
    }
`

const Contact = styled.div`
    display: none;
    @media screen and (min-width: 1000px) {
        width: 108px;
        height: 44px;
        background-color: #1355FF;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        &:hover{
            transform: scale(1.1);
            background-color: blue;
            transition: .3s;
        }
    }
   
`

const BrgDiv = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 1000px) {
        display: none;
    }
`

const Brg = styled.div`
    width: 375px;
    margin: auto;
    height: 270px;

    @media screen and (min-width: 1000px) {
        display: none;
    }
`
const BrgTextDiv = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding-top: 20px;
`

const BrgItem = styled.li`
    width: 100%;
    text-align: center;
    padding-bottom: 25px;
    border-bottom: 1px solid gray;
`

const BrgContact = styled.div`
    width: 120px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1355FF;
    color: white;
    margin:auto;
    margin-top: 10px;
`

const BrgIcon = styled.img`
    
`