module.exports = (sequelize, DataTypes) => {

    const Comments = sequelize.define("Comments", {
        
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Comments;
};