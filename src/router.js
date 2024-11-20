const express = require('express');
const giftController = require('./controllers/giftController');

const router = express.Router();

// Rota POST para criar um presente
router.post('/gift', async (req, res) => {
    const { nome, image, quantidade } = req.body;

    const { status, data } = await giftController.createGift({ nome, image, quantidade });
    return res.status(status).json(data);
});

// Rota GET para listar todos os presentes
router.get('/gifts', async (req, res) => {
    const { status, data } = await giftController.getAllGifts();
    return res.status(status).json(data);
});

// Rota DELETE para excluir um presente
router.delete('/gift/:id', async (req, res) => {
    const { id } = req.params;
    const { status, data } = await giftController.deleteGift({ id });
    return res.status(status).json(data);
});

// Rota PATCH para atualizar a quantidade de um presente
router.patch('/gift/:id', async (req, res) => {
    const { id } = req.params;
    const { quantidade } = req.body;

    const { status, data } = await giftController.updateGiftQuantity({ id, quantidade });
    return res.status(status).json(data);
});

module.exports = router;
