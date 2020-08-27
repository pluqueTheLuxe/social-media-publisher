require('dotenv').config()

const { APP_ID, APP_SECRET } = process.env;

exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: `${APP_ID}, ${APP_SECRET}`
    };
  };