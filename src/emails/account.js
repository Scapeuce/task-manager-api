const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'
 sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// sgMail.setApiKey(sendgridAPIKey)
 const sendWelcomeEmail = (email, name) => {
     sgMail.send({
         to: email,
         from: 'andres.lillo.p@gmail.com',
         subject: 'Thanks for joining in !',
         text: `Welcome to the app, ${name} . Let me know how you get along with the app.`

     })
 }

 const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andres.lillo.p@gmail.com',
        subject: 'We will miss you !',
        text: `We noticed you are not going to use our app anymore, ${name} . We are really sorry about that, and in order to improve our service, we'd love to hear about you experience
        with us. We look forward to hear about you again `

    })
}
 module.exports = {
     sendWelcomeEmail, sendGoodbyeEmail
 }