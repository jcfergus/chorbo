import pino from "pino";
import { Request, Response, NextFunction } from "express";
import { addChore, listChores } from "./handlers";

const log = pino();

type handler = (req: Request, res: Response, next: NextFunction) => any;

const callbacks: Record<string, handler> = {
    "add_chore": addChore,
    "list_chores": listChores
}

function chorboWebhook(req: Request, res: Response) {
   
    
    return res.status(200).send(req.body);
}

exports.chorboWebhook = chorboWebhook;