import { Request, Response } from "express";
import { IForms } from "../Forms/IForm";
import formatForms from "../service/formatForms";
import { Email } from "../service/mail";

class SendFormMailController {
    async handle(request: Request, response: Response) {
        const message: IForms = Object.assign({}, request.body);
        message.from = message.from;
        
        const format = new formatForms(message);
        const mail = new Email(format.Format());

        mail.sendMail(); // enviando email
        return response.status(200).send();
    }
}

export { SendFormMailController }