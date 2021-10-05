const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
            required: true
        },
        desc:{
            type: String,
            max: 500
        },
        img:{
            type: String
        },
        recipe:{
            type: String,
        },
        likes:{
            type: Array,
            default:[]
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Recipe", RecipeSchema);