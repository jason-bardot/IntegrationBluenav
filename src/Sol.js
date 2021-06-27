import React, { Component } from "react";
import "./Sol.css"
import Popup from "./Popup.js"
import { Redirect } from "react-router-dom"

class Sol extends Component {

    state = {
        seen: false,
        col: 0,
        redirect: false,
        img_src: ["https://images.prismic.io/bluenav/6f6bd946-9643-4e97-8d33-774b30ec1f59_Sans+titre-2-.png",
            "https://images.prismic.io/bluenav/c33cb401-04f1-4c0b-8d23-f1c32f317860_Sans+titre-2.png?auto=compress,format",
            "https://images.prismic.io/bluenav/e3d35598-c70a-477e-8f77-6b5723ec99e5_Sans+titre-2--.png?auto=compress,format"],
        h_trois: ["Turbine fixe","Turbine rétractable","Turbine inboard"],
        h_quatre: ["BLUESPIN fixe","BLUESPIN rétractable","BLUESPIN inboard"],

    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }



    togglePop = (i) => {
        this.setState({
            seen: !this.state.seen,
            col: i
        });
    };


    render() {
        return (
            <div className="Main">
                {this.renderRedirect()}
                <div className="logo">
                    <img
                        className="img-logo"
                        onClick={this.setRedirect}
                        src="https://bluenav.fr/static/media/logo-blue.66bb24a1.svg"
                    />
                </div>
                <div className="tab-sol">
                    {[0,1,2].map(index => 
                        <div className="container-sol-item">
                        <div className="sol-item">
                            <div className="sol-title">
                                <h3>{this.state.h_trois[index]}</h3>
                                <h4>{this.state.h_quatre[index]}</h4>
                            </div>
                            <div >
                                <img className="sol-img" width="300" height="300"
                                    src={this.state.img_src[index]}
                                />
                            </div>

                            <div className="sol-button" onClick={() => this.togglePop(index+1)}>
                                <div className="plus" >
                                    +
                                </div>
                            </div>

                        </div>
                    </div>)}
                </div>

                {this.state.seen ? <Popup toggle={this.togglePop} num={this.state.col} /> : null}
            </div>
        );
    }
}

export default Sol;