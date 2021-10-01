import React from 'react';
import {BiTimer, BiMoney} from 'react-icons/bi';
import { RiCameraLensFill, RiTeamFill } from 'react-icons/ri'
import camera1 from "../img/camera.jpg";
import {Description, Image, About} from '../styles';
import styled from 'styled-components';

const ServicesSection = () =>{
    return (
        <Services>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <BiTimer></BiTimer>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem import</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <BiMoney></BiMoney>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem import</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <RiCameraLensFill></RiCameraLensFill>
                            <h3>Pro Grade Gear</h3>
                        </div>
                        <p>Lorem import</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <RiTeamFill/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem import</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={camera1} alt=""/>
            </Image>
        </Services>
    )
}
const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding:2rem 0rem 4rem 0rem;
    }
`;
const Cards = styled.div`
    display:flex;
    flex-warp:warp;
`;
const Card = styled.div`
    flex-basis:20rem;
    .icon{
        display:flex;
        align-items:center;
        h3{
            margin-left:1rem;
            background:white;
            color: black;
            padding: 1rem;
        }
    }
`;
export default ServicesSection;