'use strict';

const getGlobbedFiles = require('../../utils/getGlobbedFiles');
const cookieId = require('../middleware/cookieId');
const path = require('path');

module.exports = (router) => {
    router.use('/api/v1/public/', cookieId);

    getGlobbedFiles(path.join(__dirname, './routes/*.js'))
        .forEach(path => require(path)(router));
};