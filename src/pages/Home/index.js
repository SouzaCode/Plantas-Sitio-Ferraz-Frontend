import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";
import api from "../../services/api";

import default_plant_image from '../../assets/default_plant.jpg';

export default function Home() {

    return (
        <div className="home-container">
            <div className="results-box-header-container">
                <div className="search">
                    <p className="home-title">Busca por Filtro</p>
                    <button className="home-search-button">Ver Lista de espécies</button>
                </div>

                <div className="filtros-container">



                    <form className="filtro-container">
                        <input className="input-filtro" type="text" placeholder="Filtro Usuário" />
                    </form>
                    <form className="filtro-container">
                        <input className="input-filtro" type="text" placeholder="Filtro Especie" />
                    </form>

                </div>
            </div>
            <div className="results-container">
                <div className="home-plant-details-container">
                    <div className="plant-image-container">
                        <img className="plant-image-home" src={default_plant_image} alt="" />
                    </div>
                    <div className="plant-info-container">
                        <p>Araucaria</p>
                        <p>rodrigo</p>
                        <p>abc</p>
                        <div className="plant-status-container"><p>Vivo</p>
                            <p>12/10/2021</p>
                        </div>

                    </div>
                </div>
                <div className="home-plant-details-container">
                    <div className="plant-image-container">
                        <img className="plant-image-home" src={default_plant_image} alt="" />
                    </div>
                    <div className="plant-info-container">
                        <p>Araucaria</p>
                        <p>rodrigo</p>
                        <p>abc</p>
                        <div className="plant-status-container"><p>Vivo</p>
                            <p>12/10/2021</p>
                        </div>

                    </div>
                </div>
                <div className="home-plant-details-container">
                    <div className="plant-image-container">
                        <img className="plant-image-home" src={default_plant_image} alt="" />
                    </div>
                    <div className="plant-info-container">
                        <p>Araucaria</p>
                        <p>rodrigo</p>
                        <p>abc</p>
                        <div className="plant-status-container"><p>Vivo</p>
                            <p>12/10/2021</p>
                        </div>

                    </div>
                </div>
                <div className="home-plant-details-container">
                    <div className="plant-image-container">
                        <img className="plant-image-home" src={default_plant_image} alt="" />
                    </div>
                    <div className="plant-info-container">
                        <p>Araucaria</p>
                        <p>rodrigo</p>
                        <p>abc</p>
                        <div className="plant-status-container"><p>Vivo</p>
                            <p>12/10/2021</p>
                        </div>

                    </div>
                </div>
                <div className="home-plant-details-container">
                    <div className="plant-image-container">
                        <img className="plant-image-home" src={default_plant_image} alt="" />
                    </div>
                    <div className="plant-info-container">
                        <p>Araucaria</p>
                        <p>rodrigo</p>
                        <p>abc</p>
                        <div className="plant-status-container"><p>Vivo</p>
                            <p>12/10/2021</p>
                        </div>

                    </div>
                </div>
                <div className="home-plant-details-container">
                    <div className="plant-image-container">
                        <img className="plant-image-home" src={default_plant_image} alt="" />
                    </div>
                    <div className="plant-info-container">
                        <p>Araucaria</p>
                        <p>rodrigo</p>
                        <p>abc</p>
                        <div className="plant-status-container"><p>Vivo</p>
                            <p>12/10/2021</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}