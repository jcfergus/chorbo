const { Modal } = require("slack-block-builder");
const pino = require("pino");

const log = pino();

const callbacks = {
    "add_chore": addChore,
    "list_chores": listChores
}

function chorboWebhook(req,res) {
   
    
    return res.status(200).send(req.body);
}

exports.chorboWebhook = chorboWebhook;