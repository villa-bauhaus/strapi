module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "cp1.rackhost.hu",
        secure: false,
        port: 587,
        tls: {
          ciphers: "SSLv3",
          rejectUnauthorized: false,
        },
        requireTLS: true,
        auth: {
          user: 'no-reply@villabauhaus-siofok.hu',
          pass: ',=bX4g&vjt)y',
        },
      },
      settings: {
        defaultFrom: "no-reply@villabauhaus-siofok.hu",
        defaultReplyTo: "info@villabauhaus-siofok.hu",
      },
    },
  },
});