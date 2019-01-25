export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('Reports', {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.literal('uuid_generate_v4()')
          },
          articleId: {
            type: Sequelize.UUID,
            allowNull: false
          },
          userId: {
            type: Sequelize.UUID,
            allowNull: false
          },
          complaint: {
            type: Sequelize.TEXT,
            allowNull: true
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          }
        });
      });
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Reports')
};
