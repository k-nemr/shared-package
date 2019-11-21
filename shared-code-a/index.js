'use strict';

const getMessage = () => {
  console.log('Access to Shared Code A...');
  return "Hello World, Shared Code A!";
};

module.exports = {
  getMessage
};
