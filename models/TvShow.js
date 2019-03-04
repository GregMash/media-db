module.exports = function (sequelize, DataTypes) {
    let TvShow = sequelize.define("TvShow", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        
    });
    TvShow.associate = (models) => {
        TvShow.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return TvShow;
};