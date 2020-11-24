import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://semanafullstack:bolofresco@localhost:3306/pitu');

export default sequelize;