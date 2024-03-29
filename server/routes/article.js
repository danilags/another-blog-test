var express = require('express');
var router = express.Router();
var contArticle = require('../controllers/article');


router.post('/', contArticle.createArticle)
router.get('/', contArticle.getAll)
router.delete('/:id', contArticle.deleteArticle)


module.exports = router;
