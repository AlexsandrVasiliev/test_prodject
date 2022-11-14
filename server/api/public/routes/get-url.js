'use strict';

module.exports = (router) => {
  router
     .post('/api/v1/public/get-url', async (req, res) => {
       return res.status(200).json('Api work');
     })
};