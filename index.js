import {Router} from 'express';
import {apiStatus} from '../../../lib/util';
const Magento2Client = require('magento2-rest-client').Magento2Client

module.exports = ({ config }) => {
  let api = Router();
  api.get('/collection/getByUrlKey/:url_key', (req, res) => {
    const client = Magento2Client(config.magento2.api);

    client.addMethods('sendCollection', (restClient) => {
      let module = {};
      module.getBlock = function () {
        return restClient.get('/collection/getByUrlKey/' + req.params.url_key);
      }
      return module;
    })
    client.sendCollection.getBlock().then((result) => {
      apiStatus(res, result, 200); // just dump it to the browser, result = JSON object
    }).catch(err => {
      apiStatus(res, err, 500);
    });
  });
  api.get('/kit/getByUrlKey/:url_key', (req, res) => {
    const client = Magento2Client(config.magento2.api);

    client.addMethods('sendCollection', (restClient) => {
      let module = {};
      module.getBlock = function () {
        return restClient.get('/kit/getByUrlKey/' + req.params.url_key);
      }
      return module;
    })
    client.sendCollection.getBlock().then((result) => {
      apiStatus(res, result, 200); // just dump it to the browser, result = JSON object
    }).catch(err => {
      apiStatus(res, err, 500);
    });
  });
  api.get('/collection/list', (req, res) => {
    const client = Magento2Client(config.magento2.api);

    client.addMethods('sendCollection', (restClient) => {
      let module = {};
      module.getBlock = function () {
        return restClient.get('/collection/list');
      }
      return module;
    })
    client.sendCollection.getBlock().then((result) => {
      apiStatus(res, result, 200); // just dump it to the browser, result = JSON object
    }).catch(err => {
      apiStatus(res, err, 500);
    });
  });
  api.get('/kit/list', (req, res) => {
    const client = Magento2Client(config.magento2.api);

    client.addMethods('sendCollection', (restClient) => {
      let module = {};
      module.getBlock = function () {
        return restClient.get('/kit/list');
      }
      return module;
    })
    client.sendCollection.getBlock().then((result) => {
      apiStatus(res, result, 200); // just dump it to the browser, result = JSON object
    }).catch(err => {
      apiStatus(res, err, 500);
    });
  });
  return api;
};
