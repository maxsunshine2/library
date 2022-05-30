import { Router } from 'express';
var router = Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resources you just heard');
});

router.get('/cool', function(req, res, next) {
    res.render('cool', { 'title': 'tutorial' });
});

export default router;