import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            showDropdown: false
        }
    }

    toggleDropdown = () => {
        this.setState({showDropdown: !this.state.showDropdown})
    }


    render(){
        return(
                <header>
                    <div className='header-container'>
                        <div id='logo-text'>Start Bootstrap</div>
                        
                        <nav id ='desktop-nav'>
                            <a>SERVICES</a>
                            <a>PORTFOLIO</a>
                            <a>ABOUT</a>
                            <a>TEAM</a>
                            <a>CONTACT</a>
                        </nav>

                        <button id ='mobile-nav' onClick={this.toggleDropdown}>
                            MENU &#9776;
                        </button>
                        
                        {this.state.showDropdown
                        ?  (<nav class='dropdown-container'>
                                <div id='dropdown-nav'>
                                    <a>SERVICES</a>
                                    <a>PORTFOLIO</a>
                                    <a>ABOUT</a>
                                    <a>TEAM</a>
                                    <a>CONTACT</a>
                                </div>
                            </nav>)
                        : null}
                    </div>
                </header>
        )
    }



}

export default Header