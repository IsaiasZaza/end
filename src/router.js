const express = require('express');
const giftController = require('./controllers/giftController');

const router = express.Router();

router.post('/gift', async (req, res) => {
    const { nome, image, quantidade } = req.body;

    const { status, data } = await giftController.createGift({ nome, image, quantidade });
    return res.status(status).json(data);
});

router.get('/gifts', async (req, res) => {
    const { status, data } = await giftController.getAllGifts();
    return res.status(status).json(data);
});

module.exports = router;
