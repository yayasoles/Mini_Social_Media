module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        
        userName: {
            
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    // Users.associate=(models)=>{
    //     Users.hasMany(models.Posts,{
    //         onDelete: "cascade",
    //         allowNull:false,
    //     });
    // }
    return Users;
};