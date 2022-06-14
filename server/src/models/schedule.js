const Sequelize = require('sequelize')
const db = require('./db')


const Schedule = db.define('schedules',{
    id_meeting:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false, // not defind false
        primaryKey: true
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    
    collaborator: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
    },

    glass: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
    },

    time_meeting: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
    },

    date_meeting: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false,
    },
},
{
    timestamps: true // creat_at, update_at
});

//Criar a tabela
Schedule.sync();
//Verificar se há alguma diferença na tabela, realiza a alteração
//Schendule.sync({ alter: true , force:true});

module.exports = Schedule;
