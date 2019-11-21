'use strict';

const getMessage = () => {
  console.log('Access to shared code...');
  return "Hello World, Shared Code!";
};

module.exports = {
  getMessage
};
