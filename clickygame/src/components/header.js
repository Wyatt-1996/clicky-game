import React from 'react';

class Header extends React.Component {
    render() {
        return (

            <div className="header">
                <h1 className="title">
                    <span role="img" aria-label="croc">🐊 </span>
                    Dino Click
                </h1>
                <h1 className="info second">{this.props.status}</h1>
                <h1 className="score second">Score: {this.props.score} | Top Score: {this.props.topScore}</h1>
            </div>
        );
    }
}

export default Header;