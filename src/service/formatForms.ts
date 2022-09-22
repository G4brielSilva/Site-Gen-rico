import { IForms, Imessage } from "../Forms/IForm";
import { IMailFormat } from "./mail";

class formatForms {
    private from: string;
    private to: string;
    private subject: string;
    private msg: Imessage;

    constructor(formResponse: IForms) {
        this.from = formResponse.from;
        this.to = formResponse.to;
        this.subject = `[focusconsultoria] ${this.from} - novo envio`;

        this.msg = formResponse.message;
    }

    public Format(): IMailFormat {
        const permissao = (this.msg.Whatsapp == true)?'sim':'não';
        
        if(this.msg.Possui_nome == false)
            this.msg.Empresa = 'Sem nome';

        const message = `
        <b>Informações da Mensagem:</b><br/>
        Nome Completo: ${this.msg.Nome}
        <br/>
        Nome da Empresa: ${this.msg.Empresa}
        <br/>
        Segmento da Empresa: ${this.msg.Segmento}
        <br/>
        Número de Funcionários: ${this.msg.Funcionarios}
        <br/>
        Telefone/Celular: ${this.msg.TelCel}
        <br/>
        Email: ${this.msg.Email}
        <br/>
        Descrição: ${this.msg.Mensagem}
        <br/>
        Aceito que entrem em contato via Whatsapp: ${permissao}
        `

        return {
            from: this.from,
            to: this.to,
            subject: this.subject,
            message: message
        };
    }
}

export default formatForms;