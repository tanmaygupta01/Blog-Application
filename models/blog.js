const { Sequelize, DataTypes } = require('sequelize');

const Blog = sequelize.define('Blog', {

    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNumm: false
    },
    img: {
        type: DataTypes.STRING(1234),
    },
    desc: {
        type: DataTypes.TEXT
    }

});

Blog.sync()
    .then(() => {
        console.log('Blog table created successfully');
    })
    .catch((error) => {
        console.log('Error creating table', error);
    })

module.exports = Blog;