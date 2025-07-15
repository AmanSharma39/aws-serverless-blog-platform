const express = require('express');
const router = express.Router();

let posts = [];

const getPosts = require('../controllers/getPosts');
const getPostById = require('../controllers/getPostById');
const createPost = require('../controllers/createPost');
const updatePost = require('../controllers/updatePost');
const deletePost = require('../controllers/deletePost');

router.get('/', (req, res) => getPosts(req, res, posts));
router.get('/:id', (req, res) => getPostById(req, res, posts));
router.post('/', (req, res) => createPost(req, res, posts));
router.put('/:id', (req, res) => updatePost(req, res, posts));
router.delete('/:id', (req, res) => deletePost(req, res, posts));

module.exports = router;