import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';

function Blog() {
    return (
        <div className='gpt__blog section__padding' id='blog'>
            <div className='gpt__blog-heading'>
                <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
            </div>
            <div className='gpt__blog-container'>
                <div className='gpt__blog-container__group1'>
                    <Article imageUrl={ blog01 } date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
                <div className='gpt__blog-container__group2'>
                    <Article imageUrl={ blog02 } date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imageUrl={ blog03 } date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imageUrl={ blog04 } date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imageUrl={ blog05 } date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
            </div>
        </div>
    );
};

export default Blog;