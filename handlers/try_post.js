'use strict';

const lib_date = require('../lib/date');


module.exports.app = (event, context, callback) => {
  const body = {
    now: lib_date.get_now_string()
  };

  const response = {
    statusCode: 200,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  };

  callback(null, response);
};

