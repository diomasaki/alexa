import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { dataSlider } from '../data'

const Container = styled.div`
height: 90vh;
width: 100%;
position: relative;
display: flex;
overflow: hidden;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: white;
opacity: 0.3;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin: auto;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
position: absolute;
cursor: pointer;
z-index: 2;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props => props.sliderIndex * -100}vw);
`

const Slide = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`

const Title = styled.h1`
font-size: 70px;
`

const Desc = styled.p`
font-size: 20px;
letter-spacing: 3px;
margin: 50px 0px;
font-weight: 700;
text-align: justify;
`

const Button = styled.button`
border: 1px solid black;
cursor: pointer;
padding: 5px;
font-size: 20px;
`

const ImgContainer = styled.div`
height: 100%;
flex: 1;
`

const Img = styled.img`
height: 80%;
`

const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2)
        } else {
            setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left"><ArrowLeft onClick={() => handleClick("left")} /></Arrow>
            <Wrapper sliderIndex={sliderIndex}>
                {dataSlider.map((item) => (
                    <Slide>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>See More</Button>
                        </InfoContainer>
                        <ImgContainer>
                            <Img src={item.img} />
                        </ImgContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right"><ArrowRight onClick={() => handleClick("right")} /></Arrow>
        </Container>
    )
}

export default Slider