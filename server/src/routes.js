const { Router } = require('express');

const routes = Router();
const UseController = require('./controllers/configSchedules');

routes.post('/registerMeeting', UseController.create_Meeting);
routes.get('/loadSchedules', UseController.load_Schedules);
routes.delete('/deleteMeeting/:id_meeting', UseController.delete_Meeting);


module.exports = routes;