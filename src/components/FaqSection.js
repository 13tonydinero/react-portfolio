import React from 'react';
import {About} from '../styles';
import styled from 'styled-components';


const FaqSection = () => {
    return(
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem Ipsum</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime assumenda, quos dolore amet, exercitationem aperiam voluptate, architecto pariatur saepe laudantium in officia! Similique temporibus magnam soluta maxime quidem omnis.</p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>What Products do you offer?</h4>
                <div className="answer">
                    <p>Lorem Ipsum</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime assumenda, quos dolore amet, exercitationem aperiam voluptate, architecto pariatur saepe laudantium in officia! Similique temporibus magnam soluta maxime quidem omnis.</p>
                </div>
            </div>
            <div className="faq-line"></div>

            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem Ipsum</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime assumenda, quos dolore amet, exercitationem aperiam voluptate, architecto pariatur saepe laudantium in officia! Similique temporibus magnam soluta maxime quidem omnis.</p>
                </div>
            </div>
            <div className="faq-line"></div>

            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem Ipsum</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime assumenda, quos dolore amet, exercitationem aperiam voluptate, architecto pariatur saepe laudantium in officia! Similique temporibus magnam soluta maxime quidem omnis.</p>
                </div>
            </div>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 3rem 0rem;
        font-weight: 100;

        p {
            padding: 1rem 0rem;
        }
    }
`;


export default FaqSection;