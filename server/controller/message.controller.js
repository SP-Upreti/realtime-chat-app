const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let convo = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!convo) {
            convo = await Conversation.create({
                participants: [senderId, receiverId],
            })
        };


        const newMessage = new Message(
            {
                senderId: senderId,
                receiverId: receiverId,
                message: message,
            }
        )

        if (newMessage) {
            convo.messageId.push(newMessage._id);
        }

        //this will run in parallel
        await Promise.all([await newMessage.save(), await convo.save()])
        res.status(200).json(newMessage)
    }

    catch (err) {
        console.log(err);
        res.status(500).json({ message: "server error sendmessage" });
    }
}

const getMessage = async (req, res) => {

    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    console.log("receiver id = ", receiverId, senderId);
    try {

        const convo = await Conversation.find({
            participants: { $all: [senderId, receiverId] }
        }).populate({
            path: "messageId",
            options: { sort: { createdAt: 1 } }
        });

        res.status(200).json(convo)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "server error getmessage" });
    }
}

module.exports = { sendMessage, getMessage };