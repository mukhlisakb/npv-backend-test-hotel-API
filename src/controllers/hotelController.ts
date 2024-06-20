import { Request, Response } from 'express';
import { Hotel } from '../models/hotel';
import { Sequelize, Op, Order } from 'sequelize';

export const createHotel = async (req: Request, res: Response) => {
    try {
        const hotel = await Hotel.create(req.body);
        res.status(201).json(hotel);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const updateHotel = async (req: Request, res: Response) => {
    try {
        const hotel = await Hotel.findByPk(req.params.id);
        if (!hotel) {
            return res.status(404).json({ error: 'Hotel not found' });
        }
        await hotel.update(req.body);
        res.json(hotel);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const deleteHotel = async (req: Request, res: Response) => {
    try {
        const hotel = await Hotel.findByPk(req.params.id);
        if (!hotel) {
            return res.status(404).json({ error: 'Hotel not found' });
        }
        await hotel.destroy();
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const findHotel = async (req: Request, res: Response) => {
    try {
        const hotel = await Hotel.findOne({ where: { slug: req.params.slug } });
        if (!hotel) {
            return res.status(404).json({ error: 'Hotel not found' });
        }
        res.json(hotel);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const findAllHotels = async (req: Request, res: Response) => {
    const { name, city, price, date, sort_field, sort_order } = req.query;
    const where: any = {};
    if (name) {
        where.name = { [Op.iLike]: `%${name}%` };
    }
    if (city) {
        where.city = city;
    }
    if (price) {
        const [min, max] = (price as string).split(':').map(Number);
        where.price = { [Op.between]: [min, max] };
    }
    if (date) {
        const [start, end] = (date as string).split(':').map(d => new Date(d));
        where.date = { [Op.between]: [start, end] };
    }
    const order: Order = sort_field ? [[sort_field as string, sort_order as string || 'asc']] : [];

    try {
        const hotels = await Hotel.findAll({ where, order });
        res.json({ hotels });
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};
