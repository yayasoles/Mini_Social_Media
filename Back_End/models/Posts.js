module.exports = (sequelize, DataTypes) => {

    const posts = sequelize.define("Posts", {
        
        title: {
            
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    posts.associate=(models)=>{
        posts.hasMany(models.Comments,{
            onDelete: "cascade",
            allowNull:false,
        });
    }
    return posts;
};