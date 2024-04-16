module.exports = {
    async afterCreate(event){
        const { result } = event;

        try{
            await strapi.plugins['email-designer'].services.email.sendTemplatedEmail({
                to: result.email,
                from: 'no-reply@villabauhaus-siofok.com',
            },
            {
                templateReferenceId: 2,
                subject: `Villa Bauhaus - Newsletter Subscription`,
            })
            await strapi.plugins["email"].services.email.send(
              {
                to: "demenyador@gmail.com",
                from: "no-reply@villabauhaus-siofok.com",
                subject: "Newsletter Form",
                html: `<h2>New Newsletter Subscription</h2><br>
                Name: ${result.name}<br>
                Email Address: ${result.email}<br>
                Phone Number: ${result.phone_number}<br>
                ${result.message ? 'Message: ' + result.message : ''}`,
              },
              {
                templateReferenceId: 1,
                subject: `Newsletter Form`,
              }
            );
        } catch(err){
            console.log(err);
        }
    }
}