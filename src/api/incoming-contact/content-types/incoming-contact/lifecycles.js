module.exports = {
    async afterCreate(event){
        const { result } = event;

        try{
            await strapi.plugins['email-designer'].services.email.sendTemplatedEmail({
                to: result.email,
                from: 'no-reply@villabauhaus-siofok.hu',
            },
            {
                templateReferenceId: 1,
                subject: `Villa Bauhaus - Contact Form Submission`,
            })
            await strapi.plugins["email"].services.email.send(
              {
                to: "info@villabauhaus-siofok.hu",
                from: "no-reply@villabauhaus-siofok.hu",
                subject: "Contact Form",
                html: `<h2>New Contact Form Submission</h2><br>
                Name: ${result.name}<br>
                Email Address: ${result.email}<br>
                Phone Number: ${result.phone_number}<br>
                ${result.message ? 'Message: ' + result.message : ''}`,
              },
              {
                templateReferenceId: 1,
                subject: `Contact Form`,
              }
            );
        } catch(err){
            console.log(err);
        }
    }
}