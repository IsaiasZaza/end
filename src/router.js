const express = require('express');
const giftController = require('./controllers/giftController');

const router = express.Router();

// Rota para criar um presente
router.post('/gift', async (req, res) => {
    const { nome, image, quantidade } = req.body;

    const { status, data } = await giftController.createGift({ nome, image, quantidade });
    return res.status(status).json(data);
});

// Rota para obter todos os presentes
router.get('/gifts', async (req, res) => {
    const { status, data } = await giftController.getAllGifts();
    return res.status(status).json(data);
});

// Rota para excluir um presente
router.delete('/gift/:id', async (req, res) => {
    const { id } = req.params;


    const { status, data } = await giftController.deleteGift({ id: parseInt(id) });
    return res.status(status).json(data);
});

router.delete('/gifts/decrement/:id', async (req, res) => {
    const { id } = req.params;
    const { quantidade } = req.body;

    // Chama a função de decremento
    const result = await giftController.decrementGiftQuantity({ id: parseInt(id), quantidade });

    res.status(result.status).json(result.data);
});

module.exports = router;
