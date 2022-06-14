const {object, string, date} = require ('yup');
const Schedule = require ('../models/schedule');
  
module.exports = {
  async create_Meeting(request, response) {
    const schema = object().shape({
      description: string().required(),
      collaborator: string().required(),
      glass: string().required(),
      time_meeting: string().required(),
      date_meeting: date().required(),
    });
  
    if(!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' })
    }
  
    const {description, collaborator, glass, time_meeting, date_meeting} = await Schedule.create(request.body)
    return response.json({
       description,
       collaborator,
       glass,
       time_meeting,
       date_meeting,
      })
    },
    
  /*async update_Equipment (request, response) {
    const schema = object().shape({
      id_equipment: number().required(),
      name_equipment: string().required()
    });

    if(!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' })
    }

    const {id_equipment, name_equipment} = request.body;

    const equipment = await Equipment.findByPk(id_equipment);

    if (!equipment) {
      return response.status(401).json({ error: 'Equipment not update' });
    }

    equipment.name_equipment = name_equipment;

    const nameSave = await equipment.save();

    return response.status(200).json({msg: 'Equipment update!.'})

  },*/
  
      async load_Schedules (request, response) {
<<<<<<< HEAD
        const schedule = await Schedule.findAll();
=======
        const schedule = await Equipment.findAll();
>>>>>>> bfdf3e0b2397d92aea67450574767361546c3a76
        
        return response.json(schedule)
      
      },

      async delete_Meeting(request, response) {
        
        const {id_meeting} = request.params;
      
<<<<<<< HEAD
        Schedule.destroy({where: {id_meeting}});
=======
        Equipment.destroy({where: {id_meeting}});
>>>>>>> bfdf3e0b2397d92aea67450574767361546c3a76
          
        return response.status(200).json({msg: 'Reunião apagada!'})
           
        }
    
}