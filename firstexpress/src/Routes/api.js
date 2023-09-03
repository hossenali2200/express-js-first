const express = require('express');
const router = express.Router();

const {
  create,
  read,
  update,
  delete: deleteResource, // 'delete' is a reserved keyword, so use 'deleteResource' as a function name
} = require('../Controllers/controllerName'); // Replace 'controllerName' with the actual controller names

// Define routes for each controller function
router.get('/blogs/create', create);
router.get('/blogs/read', read);
router.get('/blogs/update', update);
router.get('/blogs/delete', deleteResource);

// Repeat the above pattern for all controller functions

module.exports = router;
