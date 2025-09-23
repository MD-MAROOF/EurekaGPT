import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["user", "assistant"],
        required: true
    },

    content: {
        type: String,
        require: true
    },

    timestamp: {
        type: Date,
        default: Date.now
    }
});


//Usually for every schema there is a separate file, but as message schema doesn't have any other role other than being part of Thread Schema. So, that is the reason I am creating ThreadScheman and MessageSchema within the same file.


const ThreadSchema = new mongoose.Schema({
    threadId: {
        type: String,
        required: true,
        unique: true

    },

    title: {
        type: String,
        default: "New Chat"
    },

    messages: { MessageSchema },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Thread",ThreadSchema);