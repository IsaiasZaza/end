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

// Função para excluir presente com validação
const deleteGift = async ({ id }) => {
    try {
        // Verificar se o presente com o id fornecido existe
        const giftExists = await prisma.gift.findUnique({
            where: { id },
        });

        if (!giftExists) {
            return {
                status: 404,
                data: { message: 'Presente não encontrado' },
            };
        }

        // Excluir o presente
        await prisma.gift.delete({
            where: { id },
        });

        return {
            status: 200,
            data: { message: 'Presente excluído com sucesso' },
        };
    } catch (error) {
        console.error('Erro ao excluir presente:', error.message);
        return {
            status: 500,
            data: { message: 'OCORREU UM ERRO AO EXCLUIR O PRESENTE' },
        };
    }
};

module.exports = { createGift, getAllGifts, deleteGift };
