// Create express web server application


// Import express module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle request
router.get('/', commentController.comment_list);
router.get('/:id', commentController.comment_detail);
router.post('/', commentController.comment_create);
router.delete('/:id', commentController.comment_delete);

// Export router object
module.exports = router;
