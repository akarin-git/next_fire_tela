const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  },


  images: {
    domains: ["res.cloudinary.com"],
    // loader: 'cloudinary', // Cloudinaryを使う場合
    // path: 'https://res.cloudinary.com/myaccount/', // CloudinaryのURLベース
  },

  future:{
    webpack5: true,
  },

  env:{
    SITE_URL:"https://telabel-official-q1x2tx72h-ushitaku.vercel.app/",
    
  }

};