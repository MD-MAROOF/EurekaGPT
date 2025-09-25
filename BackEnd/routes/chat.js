import express from "express";
import Thread from "../models/Thread.js";

const router = express.Router();

//test route
router.post("/test", async(req,res)=>{
    try{
        const thread = new Thread({
            threadId : "xyz",
            title: "New thread for testing purpose"
        });

       const response = await thread.save();
       res.send(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Failed to save data in the DB"});
    }
});


export default router;