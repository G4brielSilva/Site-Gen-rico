import * as nodemailer from 'nodemailer';
import config from '../configs/configs';

interface IMailFormat {
    from: string;
    to: string;
    subject: string;
    message: string;
}


// classe pra organizar os métodos de send email
class Email { 
    private from?: string; // de quem
    private to?: string; // para quem
    private subject?: string; // assunto
    private message?: string; // mensagem
    
    constructor(mail: IMailFormat) {
        this.from = mail.from;
        this.to = mail.to;
        this.subject = mail.subject;
        this.message = mail.message;
    }

    sendMail(){
        let mailOptions = { // objeto com informações utilizadas
            from: this.from + ' <site.generico04@gmail.com>',
            to: this.to,
            subject: this.subject,
            html: this.message,
            //text: this.message // campo text apenas para caso o cliente de email não consiga renderizar html( q é bem difícil)
        };

        const transporter = nodemailer.createTransport({ //setando informações do configs pra caminho
            host: config.host,
            port: config.port,
            secure: true,
            auth: {
                user: config.user,
                pass: config.password
            },
            tls: { rejectUnauthorized: false }
        });

        console.log(mailOptions);

	    transporter.sendMail(mailOptions).then(() => console.log('E-mail enviado com sucesso!')).catch((err) => console.log('Ocorreu um errono envio do e-mail: ',err));
    }
}

export { Email, IMailFormat };
