import * as nodemailer from 'nodemailer';
import config from '../configs/configs';

// classe pra organizar os métodos de send email
class Mail { 
    constructor(
        public from?: string, // de quem
        public to?: string, // para quem
        public subject?: string, // assunto
        public message?: string // mensagem
    ) {}

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

export default new Mail;
