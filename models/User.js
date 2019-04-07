// module.exports = function (sequelize, DataTypes) {
//     let User = sequelize.define("User", {
//         firstname: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1]
//             }
//         },
//         lastname: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1]
//             }
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1]
//             }
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1]
//             }
//         }
//     });
//     User.associate = (models) => {
//         User.hasMany(models.Movie, {
//             foreignKey: {
//                 allowNull: false
//             }
//         });
//     };
//     User.associate = (models) => {
//         User.hasMany(models.VideoGame, {
//             foreignKey: {
//                 allowNull: false
//             }
//         });
//     };
//     User.associate = (models) => {
//         User.hasMany(models.TvShow, {
//             foreignKey: {
//                 allowNull: false
//             }
//         });
//     };
//     return User;
// };