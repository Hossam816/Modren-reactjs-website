import React from 'react';
import './header.css';
import People from '../../assets/people.png';
import Ai from '../../assets/ai.png';

function Header() {
    return (
        <div className='gpt__header section__padding' id='home'>
            <div className='gpt__header-content'>
                <h1 className='gradient__text'>
                    Let's build Somthing Amazing With GPT OpenAI
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quas asperiores minus sapiente iste eligendi accusantium obcaecati ut optio ad maiores, aspernatur nobis soluta, quos velit recusandae quia culpa odit?</p>
                <div className='gpt__header-content__input'>
                    <input type="email" placeholder='Your Email Adress' />
                    <button type="button">Get Started</button>
                </div>
                <div className='gpt__header-content__people'>
                    <img src={ People } alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className='gpt__header-image'>
                <img src={ Ai } alt="ai" />
            </div>
        </div>
    );
}

export default Header;