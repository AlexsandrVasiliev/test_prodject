'use strict';

module.exports = (router) => {
    router
        .post('/api/v1/public/add-new-url', async (req, res) => {
            return res.status(200).json('Api work');
        })
};