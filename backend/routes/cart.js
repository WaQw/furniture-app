const router = require('express').Router();
const cartController = require('../controllers/cartController');

router.post('/', cartController.addToCart)
router.get('/find', cartController.getCart)
router.delete('/:cartItemId', cartController.deleteCartItem)
router.post('/quantity', cartController.decrementCartItem)

module.exports = router;