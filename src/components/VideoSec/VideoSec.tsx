import styled from "styled-components"

export const VideoSec = () => {
    return (
        <Wrapper>
            <VideoRec>
                <VideoTitle>Video Title</VideoTitle>
            </VideoRec>
            <Title>Inform users with video sections</Title>
            <VideoDiv>
                <Video src="https://www.youtube.com/embed/aqz-KE-bpKQ" title="Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></Video>
            </VideoDiv>
            <VideoDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.
            </VideoDesc>
            <VideoRec2></VideoRec2>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 330px;
    margin: auto;
    @media screen and (min-width: 1000px) {
        width: 980px;
    }
`

const VideoRec = styled.div`
    width: 64px;
    height: 64px;
    background-color: #F7F9FC;
    position: relative;
`
const VideoTitle = styled.h3`
    font-size: 14px;
    font-weight: 700;
    color: #67718E;
    position: absolute;
    letter-spacing: 2px;
    width: 100px;
    transform: translate(42px, 23px);
`

const Title = styled.h1`
    font-size: 48px;
    color: #061237;
    font-weight: 700;
    margin-top: 31px;
    letter-spacing: -1.4px;
`

const VideoDiv = styled.div`
    margin-top: 50px;
    width: 330px;
    height: 300px;
    @media screen and (min-width: 1000px) {
        width: 900px;
        height: 500px;
    }
`
const Video = styled.iframe`
    width: 100%;
    height: 100%;
`

const VideoDesc = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 36px;
    margin-top: 30px;
    color: #37456C;
    text-align: justify;
    @media screen and (min-width: 1000px) {
        padding: 0 80px 0 297px;  
    }
`

const VideoRec2 = styled.div`
    width: 92px;
    height: 92px;
    background-color: #F2F3F8;
    transform: translate(-90px, -140px);
    display: none;
    @media screen and (min-width: 1000px) {
        display: flex;
    }
`