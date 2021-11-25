
function chorboWebhook(req,res) {
    
    return res.status(200).send(req.body);
}

exports.chorboWebhook = chorboWebhook;