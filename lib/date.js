'use strict';

const moment = require('moment');


module.exports = {
  get_now_string: () => {
    return moment().toISOString();
  }
};

