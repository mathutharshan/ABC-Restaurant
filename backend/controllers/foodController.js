import foodModel from "../models/foodModel.js";
import fs from 'fs';

// Add food item
const addFood = async (req, res) => {
    // Use backticks for template literal
    let image_filename = `${req.file.filename}`; 

    // Create a new food item
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        // Save the food item to the database
        await food.save();
        // Send a success response
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        // Log the error to the console
        console.log(error);
        // Send an error response
        res.json({ success: false, message: "Error", error: error.message });
    }
};

//list food
const listFood = async (req,res) =>{
try{
    const foods = await foodModel.find({});
    res.json({success:true,data:foods})
}catch(error){
    console.log(error);
    res.json({success:false,message:"Error"})
}
}

//remove food item
const removeFood = async (req,res) =>{
   try{
    const food = await foodModel.findById(req.body.id);
    fs.unlink('uploads/${food.image}' ,()=>{})

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Food Removed"})
   } catch (error){
    console.log(error);
    res.json({success:false,message:"Error"})

   }
}

export { addFood,listFood,removeFood };
