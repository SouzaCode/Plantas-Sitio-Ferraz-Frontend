import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import Header from "../../components/Header";

import "./styles.css";

import user_default_image from "../../assets/user_default.jpg";
import default_plant_img from "../../assets/default_plant.jpg";


export default function PlantDetails(props) {
    const id = props.match.params.id;
    return (
        <>
            <Header></Header>
            <div className="plant-details-container">
                <div className="plant-code-container"><p>abc</p></div>
                <div className="plant-basic-info-container">
                    <div className="plant-images-container">
                        <img className="plant-image-details" src={default_plant_img} alt="" />
                    </div>
                    <div className="plant-text-descriptions-container">
                        <div className="plant-name-container">
                            <p>Nome Científico</p>
                            <p><b><i>Araucária Angustifolia</i></b></p>
                        </div>
                        <p>Plantado em 12/10/2021</p>
                        <div className="planter-info-container">
                            <div className="planter-image-container"><img className="planter-image" src={user_default_image} alt="" /></div>
                            <p>Rodrigo Ferraz Souza</p>
                        </div>
                        <div className="plant-common-names-container">
                            <p>Também é conhecida como:</p>
                            <p className="common-names-text"><i>Araucaria, pinheiro do paraná</i></p>
                        </div>
                        <div className="observation-container">
                            <p>Observações</p>
                            <p className="observations-text">É uma planta Macho</p>
                        </div>
                        <div className="plant-buttons-container" >
                            <div className="morreu-btn btn-div">Morreu?</div>
                            <div className="edit-plant-btn btn-div" >Editar</div>
                        </div>
                    </div>
                </div>
                <div className="info-selector-container">
                    <div className="button-gps-container">Mostrar Localização</div>
                    <div className="button-diary-container">Mostrar Diário</div>
                </div>
                <div className="additional-info-container">
                    <p>Colocar ou o gps ou o diário aqui</p>
                </div>
            </div>
        </>
    )
}