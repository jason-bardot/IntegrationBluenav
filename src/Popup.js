import React, { Component } from "react";
import "./Popup.css"

class Popup extends Component {

    state = {
        img_src: ["https://images.prismic.io/bluenav/7ef2174a-cc4b-4da3-a2b4-9ab70b5c5ce9_e582bdc650d8cafd391b07c96477c7d6a00507bf1394053ec51cfedf857ac088.jpg?auto=compress,format",
            "https://images.prismic.io/bluenav/f4cfe059-20be-4889-8cc2-0e2f971cc215_image+5.jpg?auto=compress,format",
            "https://images.prismic.io/bluenav/0edf31ac-03c8-4594-bfa4-489c66b3cd10_Image8.jpg?auto=compress,format"],
        h_trois: ["Turbine fixe","Turbine rétractable","Turbine inboard"],
        h_quatre: ["BLUESPIN fixe","BLUESPIN rétractable","BLUESPIN inboard"],
        p_text:[
        <p>Le BlueSpin est un système d’hybridation complet prêt à être installé pour bateaux neufs ou d'occasions.

        Ce système de propulsion électrique est capable de s’intégrer à un bateau déjà équipé d’un moteur thermique, afin de former avec ce moteur un système de propulsion hybride. Il peut fonctionner sélectivement dans un mode thermique ou dans un mode électrique, sans nécessiter de modifications importantes de la structure du bateau.

        Le BlueSpin conserve à la fois les avantages de la vitesse élevée des moteurs thermiques et de la navigation propre et silencieuse des moteurs électriques, sans modifier des éléments essentiels de la structure du bateau comme l’emplacement du moteur thermique.

        Les manœuvres sont également facilitées par l’orientation possible de la poussée. L’intégration du BlueSpin permet une navigation silencieuse à basse vitesse.

        Elle s’effectuera au bénéfice des sites marins protégés et des littoraux, qui pourront profiter d’une diminution de la nuisance sonore, de la pollution de l’air et de l’eau engendrées par les bateaux.
        </p>,
        <p>Le BlueSpin est un système de propulsion électrique capable de s’intégrer à un bateau déjà équipé d’un moteur thermique, afin de former avec ce moteur un système de propulsion hybride. Il peut fonctionner sélectivement dans un mode thermique ou dans un mode électrique, sans nécessiter de modifications importantes de la structure du bateau.

            Le BlueSpin conserve à la fois les avantages de la vitesse élevée des moteurs thermiques et de la navigation propre et silencieuse des moteurs électriques, sans modifier des éléments essentiels de la structure du bateau comme l’emplacement du moteur thermique.
            
            La turbine propulsive de BlueSpin est rétractable verticalement, et elle est giratoire.
            
            Le bateau pourra ainsi naviguer en mode thermique lorsque la propulsion électrique est en position rétractée, ou en mode électrique lorsque la propulsion électrique est en mode immergée. La giration et les manœuvres sont également facilitées par l’orientation possible de la poussée. L’intégration du BlueSpin permet une navigation silencieuse à basse vitesse.
            
            Elle s’effectuera au bénéfice des sites marins protégés et des littoraux, qui pourront profiter d’une diminution de la nuisance sonore, de la pollution de l’air et de l’eau engendrées par les bateaux.
        </p>,
        <p>Le BlueSpin est un système d’hybridation complet prêt à être installé, pour bateaux neufs ou existants.
            
        Ce système de propulsion électrique rétractable, peut même s’intégrer à un bateau déjà équipé d’un moteur thermique, afin de former avec ce moteur un système de propulsion hybride. Il peut fonctionner sélectivement dans un mode thermique ou dans un mode électrique, sans nécessiter de modifications importantes de la structure du bateau.

        Les manœuvres sont également facilitées par l’orientation possible de la poussée.
        
        L’intégration du BlueSpin permet une navigation silencieuse au bénéfice des sites marins protégés et des littoraux, qui pourront profiter d’une diminution de la nuisance sonore, de la pollution de l’air et de l’eau engendrées par les bateaux.
        </p>]
    }

    handleClick = () => {
        console.log(this.props);
        this.props.toggle();
    };

    getsrc = () => {
        const num = this.props.num;

        if (num === 1) {
            return ""
        }
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">

                    <div className="modal-left">
                        <img width="630" height="472" src={this.state.img_src[this.props.num-1]} />
                    </div>
                    <div className="modal-right">
                        <div className="close">
                        <span  onClick={this.handleClick}>
                            &times;
                        </span>
                        </div>
                        <h3>{this.state.h_trois[this.props.num-1]}</h3>
                        <h4>{this.state.h_quatre[this.props.num-1]}</h4>
                        {this.state.p_text[this.props.num-1]}
                    </div>
                </div>
            </div>
        );
    }

}

export default Popup