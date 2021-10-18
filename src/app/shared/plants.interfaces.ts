export interface AllPlants {
    Total: Number,
    Plants: [
        {
            Details: Plant,
            Images: [
                {
                    id_plant_photo: Number,
                    img_plant: String
                }
            ]
        }
    ]
};
export interface Plant { 
    id_plant: String,
    fk_id_specie: Number,
    fk_id_user: Number,
    observations: String,
    day_planted: Number,
    month_planted: Number,
    year_planted: Number,
    date_death: Date,
    latitude: Number,
    longitude: Number,
    is_private: Number,
    id_planter: Number,
    scientific_name: String,
    user_name:String
};