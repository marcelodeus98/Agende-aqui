import React from 'react';
import GoBackLink from '../../components/GoBackLink';
import  Header  from '../../components/Header';
import api from '../../services/api';
import {Form, Input} from '@rocketseat/unform';
import * as yup from "yup";
import './styles.css';


const validateNameEquipment = yup.object().shape({
  description: yup.string().required("A descrição do agendamento é obrigatório"),
  collaborator: yup.string().required("O nome do colaborador é obrigatório"),
  glass: yup.string().required("O nome do produto é obrigatório"),
  date_meeting: yup.date().required("A data da reunião é obrigatório"),
  time_meeting: yup.string().required("A hora da reunião é obrigatória"),
}
)

function Client() {

  async function handleRegisterSubmit(
    description, 
    collaborator,
    glass,
    date_meeting,
    time_meeting
  ) {
     try{
      const response = await api.post('/registerMeeting', description, collaborator, glass, date_meeting, time_meeting)
      console.log(response.data)
      alert("Agendamento efetuado!")
      }catch(err){
        alert("Não foi possivél efetuar seu agendamento!");
      };
    };
  
  return (
    <>
        <Form onSubmit={handleRegisterSubmit} schema={validateNameEquipment}>   
          <div className='client-container'>
            <GoBackLink/>
        

          <div style={{background:'#FFD700', marginTop:20, padding:20, borderRadius:8, width:'auto'}}>
            <div className='input-group'>
              <h1 className="title-lgcontainer" style={{background:'#FFD700', color:'#000'}}>AGENDAR SALA</h1>
              <Input name='description' className='title-lgconatainer' placeholder='Descrição' style={{width:'100%'}}/>

              <Input name='collaborator' className='title-lgconatainer' placeholder='Colaborador' style={{width:'100%'}}/>

              <Input name='glass' className='title-lgconatainer' placeholder='Sala' style={{width:'100%'}}/>

              <Input name='date_meeting' className='title-lgconatainer' type='date' style={{width:'100%'}}/>

              <Input name='time_meeting' className='title-lgconatainer' placeholder='De 00:00 até 00:00' style={{width:'100%'}}/>

            </div>
          </div>
          <Header/>     
      </div>
    </Form>
    </>
  )
}

export default Client;