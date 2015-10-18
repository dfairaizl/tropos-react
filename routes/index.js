import express from 'express';

let router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Tropos | Kick Ass Weather' });
});

module.exports = router;
