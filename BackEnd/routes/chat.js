import express from "express";
import Thread from "../models/Thread.js";
import { deleteModel } from "mongoose";

const router = express.Router();

//test route
router.post("/test", async (req, res) => {
    try {
        const thread = new Thread({
            threadId: "xyz",
            title: "New thread for testing purpose"
        });

        const response = await thread.save();
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to save data in the DB" });
    }
});

//This is to get all the threads to be displayed on the left on the front-end screen.
router.get("/thread", async (req, res) => {
    try {
        //The above line is used to fetch threads.
        //But the threads should be in descending order of their creation time (updated at).
        const threads = await Thread.find({}).sort({ updatedAt: -1 });
        res.json(threads);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch threads" });
    }
});


//The below code is to get data of a specific thread by ID.
router.get("/thread/:threadId", async(req,res)=>{
    const {threadId} = req.params;
    try{
        const thread = await Thread.findOne({threadId});

        if(!thread)
        {
            res.status(404).json({error:"Thread is not found"});
        }
        res.json(thread.message);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Failed to fetch thread"});
    }
});


//The below code is to delete a specific chat ( thread ) by using ID
router.delete("/thread/:threadId", async(req,res)=>{
    const {threadId} = req.params;
     try{
        const deleteThread = await Thread.findOneAndDelete({threadId});

        if(!deleteThread)
            res.status(404).json({error : "Thread couldn't be deleted. Please make sure that the thread exists"});

        res.status(200).json({success: "Thread deleted successfully"});
     }
     catch(err){
        console.log(err);
        res.status(500).json({error: "Failed to delete the thread"});
     }
})


export default router;