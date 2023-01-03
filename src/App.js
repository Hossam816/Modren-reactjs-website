import React from "react";
import './app.css';
import { Footer, Blog, Possibility, Features, GPT, Header } from './containers';
import { CTA, Brand, Navbar } from './components';



function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <GPT />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
}

export default App;
