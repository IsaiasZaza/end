const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const mapGift = ({ id, nome, quantidade, image }) => ({
    id,
    nome,
    quantidade,
    image,
});

const createGift = async ({ nome, image, quantidade }) => {
    try {
        const newGift = await prisma.gift.create({
            data: {
                nome,
                image,
                quantidade,
            },
        });
        return {
            status: 201,
            data: mapGift(newGift),
        };
    } catch (error) {
        console.error('Erro ao criar presente:', error.message);
        return {
            status: 500,
            data: { message: 'OCORREU UM ERRO AO CRIAR O SEU PRESENTE' },
        };
    }
};

const getAllGifts = async () => {
    try {
        const gifts = await prisma.gift.findMany();
        return {
            status: 200,
            data: gifts.map(mapGift),
        };
    } catch (error) {
        console.error('Erro ao buscar presentes:', error.message);
        return {
            status: 500,
            data: { message: 'OCORREU UM ERRO AO BUSCAR OS PRESENTES' },
        };
    }
};

module.exports = { createGift, getAllGifts };
