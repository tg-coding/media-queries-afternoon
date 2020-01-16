import React, {Component} from 'react';
import Header from './Header'

class HeroContent extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    

    render(){
        return(
            <div className='hero-container'>
                <Header/>
                <div className='hero-content'>
                    <h2>Welcome To Our Studio!</h2>
                    <h1>IT'S NICE TO MEET YOU</h1>
                    <button id='hero-btn'>TELL ME MORE</button>
                </div>
            </div>
        )
    }



}

export default HeroContent