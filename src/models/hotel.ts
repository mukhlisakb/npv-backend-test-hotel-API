import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export const Hotel = sequelize.define('Hotel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  sort_field: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sort_order: {
    type: DataTypes.ENUM('asc', 'desc'),
    allowNull: false,
  },
});
