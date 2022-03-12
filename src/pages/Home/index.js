import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/Header";

import "./styles.css";
import api from "../../services/api";

import default_plant_image from '../../assets/default_plant.jpg';

export default function Home() {

    const [plantas, setPlantas] = useState([]);
    const history = useHistory();
    useEffect(async () => {
        const response = await api.get('/plants');
        console.log(response.data.Plants);
        setPlantas(response.data.Plants)
    }, []);
    function getFormattedDate(timestamp) {
        var date = new Date(timestamp * 1000);

        var month = date.getMonth() + 1;
        var day = date.getDate();

        month = (month < 10 ? "0" : "") + month;
        day = (day < 10 ? "0" : "") + day;

        var str = day + "/" + month + "/" + date.getFullYear();

        /*alert(str);*/

        return str;
    }

    return (
        <>
            <Header />
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
                    {plantas ? (plantas.map(planta => (
                        <div key={planta.Details.id_plant}
                            onClick={() => { history.push('/plant/' + (planta.Details.id_plant)) }}
                            className="home-plant-details-container">
                            <div className="plant-image-container">
                                <img className="plant-image-home" src={planta.Images.length ? "data:image/png;base64," + planta.Images[0].img_plant : default_plant_image} alt="" />
                            </div>
                            <div className="plant-info-container">
                                <p><i>{planta.Details.scientific_name}</i></p>
                                <p>{planta.Details.user_name}</p>
                                <p><b>{planta.Details.id_plant}</b></p>
                                {planta.Details.date_death ? (
                                    <div className="plant-status-container">
                                        <p className="morta-text">Morta</p>
                                        <p>{getFormattedDate(planta.Details.date_death)}</p>
                                    </div>
                                ) : (
                                    <div className="plant-status-container">
                                        <p className="viva-text">Vivo</p>
                                        <p>{planta.Details.day_planted != "" && planta.Details.day_planted != null ? planta.Details.day_planted + "/" : " "} {planta.Details.month_planted != "" && planta.Details.month_planted != null ? planta.Details.month_planted + "/" : " "}{planta.Details.year_planted != "" && planta.Details.year_planted != null ? planta.Details.year_planted : " "}</p>
                                    </div>
                                )}


                            </div>
                        </div>
                    ))) : (<p>nenhuma planta encontrada</p>)}



                </div>
            </div>
        </>
    )
}