module.exports = {
    async afterCreate(event){
        const { result } = event;

        try{
            await strapi.plugins['email-designer'].services.email.sendTemplatedEmail({
                to: result.email,
                from: 'no-reply@villabauhaus-siofok.hu',
            },
            {
                templateReferenceId: 2,
                subject: `Villa Bauhaus - Newsletter Subscription`,
            })
            await strapi.plugins["email"].services.email.send(
              {
                to: "info@villabauhaus-siofok.hu",
                from: "no-reply@villabauhaus-siofok.hu",
                subject: "Newsletter Form",
                html: `<h2>New Newsletter Subscription</h2><br>
                Email Address: ${result.email}<br>`
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