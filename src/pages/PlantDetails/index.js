import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import Header from "../../components/Header";

import "./styles.css";

import user_default_image from "../../assets/user_default.jpg";
import default_plant_img from "../../assets/default_plant.jpg";


export default function PlantDetails(props) {
    const [additionalInfo, setAdditionalInfo] = useState(1)
    const [plantDetails, setPlantDetails] = useState({})
    const id = props.match.params.id;
    const history = useHistory();

    useEffect(async () => {
        try {
            const response = await api.get('/plants/' + id, {
                headers: {
                    token: localStorage.getItem("token")
                }
            });
            setPlantDetails(response.data.Response);
            console.log(response.data.Response);
        } catch (err) {
            alert(err.response.data.Error);
            if (err.response.status == 401) {
                history.push("/")
            }
        }

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
            <Header></Header>
            {plantDetails.Details ? (
                <div className="plant-details-container">
                    <div className="plant-code-container"><p>{plantDetails.Details.id_plant}</p></div>
                    <div className="plant-basic-info-container">
                        <div className="plant-images-container">
                            <img className="plant-image-details" src={default_plant_img} alt="" />
                        </div>
                        <div className="plant-text-descriptions-container">
                            <div className="plant-name-container">
                                <p>Nome Científico</p>
                                <p><b><i> {plantDetails.Details.scientific_name}</i></b></p>
                            </div>
                            <p>{plantDetails.Details.date_death ? "Planta declarada morta em: " + getFormattedDate(plantDetails.Details.date_death) : "Plantado em " + plantDetails.day_planted != "" && plantDetails.day_planted != null ? plantDetails.day_planted + "/" : "" + plantDetails.month_planted != "" && plantDetails.month_planted != null ? plantDetails.month_planted + "/" : "" + plantDetails.year_planted != "" && plantDetails.year_planted != null ? plantDetails.year_planted : ""}</p>
                            <div className="planter-info-container">
                                <div className="planter-image-container"><img className="planter-image" src={user_default_image} alt="" /></div>
                                <p>{plantDetails.Details.planter_name ? plantDetails.Details.planter_name : "Desconhecido"}</p>
                            </div>
                            <div className="plant-common-names-container">
                                <p>Também é conhecida como:</p>
                                <p className="common-names-text"><i>Araucaria, pinheiro do paraná</i></p>
                            </div>
                            <div className="observation-container">
                                <p>Observações</p>
                                <p className="observations-text">{plantDetails.Details.observations}</p>
                            </div>
                            <div className="plant-buttons-container" >
                                {plantDetails.Details.date_death ? (<></>) : (<div className="morreu-btn btn-div">Morreu?</div>)}
                                <div className="edit-plant-btn btn-div" >Editar</div>
                            </div>
                        </div>
                    </div>
                    <div className="info-selector-container">
                        <div
                            onClick={() => { setAdditionalInfo(0) }} className={additionalInfo == 0 ? "button-additional-selector-container-selected" : "button-additional-selector-container"}><p>Mostrar Localização</p></div>
                        <div
                            onClick={() => { setAdditionalInfo(1) }} className={additionalInfo == 1 ? "button-additional-selector-container-selected" : "button-additional-selector-container"}><p>Mostrar Diário</p></div>
                    </div>
                    <div className="additional-info-container">
                        {additionalInfo == 0 ? (
                            <div className="gps_location-container">

                            </div>) :
                            (<div className="diary-entries-container">
                                {plantDetails.Diary.length > 0 ? (
                                    plantDetails.Diary.map(entry => (
                                        <div key={entry.dt_entry} className="diary-entry-container">
                                            <p className="date-entry"><b>{getFormattedDate(entry.dt_entry)}</b></p>
                                            <p className="entry-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{entry.annotation}</p>
                                        </div>
                                    ))
                                ) : (<p>Nenhuma entrada no diário</p>)}

                            </div>)}

                    </div>
                </div>
            ) : (<></>)
            }
        </>
    )
}