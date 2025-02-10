const nodemailer = require("nodemailer");



export async function sendFormMail(data) {
    
    try {

        
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: 'puertos@jochy.com.ar',
                pass: process.env.EMAIL_PASS,
            },
            tls : { rejectUnauthorized: false }
        })
        

        const mailOptions = {
            from: 'Jochy Puertos <puertos@jochy.com.ar>',
            bcc: 'puertos@jochy.com.ar',
            subject: `Consulta de ${data.name}`,
            html:
            `<html>
                <body>
                    <h3><b>Nombre y Apellido:</b></h3>
                    <p>${data.name}</p>
                    <br>
                    <h3><b>Email:</b></h3>
                    <p>${data.email}</p>
                    <br>
                    <h3><b>Telefono:</b></h3>
                    <p>${data.phone}</p>
                    <br>
                    <h3><b>Mensaje:</b></h3>
                    <p>${data.message}</p>
                    <br>
                </body>
            </html>`,
        };

        const res = await transporter.sendMail(mailOptions);

        return res;
        
        
    } catch(err) {

        console.log(err);

    }



}

