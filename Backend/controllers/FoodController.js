import bodyParser from 'body-parser';
const { json } = bodyParser;
import foodModel from '../models/FoodModel.js';
import fs from 'fs';


// Add food item
const addFood = async (req, res) => {  // <-- Add req and res as parameters
    try {
        // Check if file exists in request
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No image uploaded" });
        }

        let image_filename = `${req.file.filename}`;

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,  // Fixed typo (was 'discription')
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        await food.save();
        res.json({ success: true, message: "Food Added" });  // Fixed typo (was 'massage')

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// all food list
const listFood = async(req,res)=>{
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch(error){
        console.log(error);
        res.json({success:false,massage:"Error"})
        
    }
}

// remove food item
const removeFood = async(req, res)=>{
    try{
        const food = await foodModel.findById(req.body.id); 
        fs.unlink(`uploads/${food.image}`, ()=>{})


        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,massage:"Food Removed"})
    }catch(error){
        console.log(error);
        res.json({success:false,massage:"Error"})
    }
}



export { addFood , listFood, removeFood};