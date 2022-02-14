'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('PostsCategories', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Categories', key: 'id'}, 
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'BlogPosts', key: 'id'}, 
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};
// para chegar a conclusao dessa tabela, tive ajuda de meu grnade amigo Kauan Carvalho https://github.com/kcda1102
