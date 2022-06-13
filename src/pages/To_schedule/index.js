import React from 'react'; 
import GoBackLink from '../../components/GoBackLink';
import  Header  from '../../components/Header';
import api from '../../services/api';
import {Form, Input} from '@rocketseat/unform';
import * as yup from "yup";
import './styles.css';


const validateNameEquipment = yup.object().shape({
  name_equipment: yup.string().required("O nome do produto é obrigatório"),
}
)

function Client() {

  async function handleRegisterSubmit(name_equipment) {
     try{
      const response = await api.post('/registerProduct', name_equipment)
      console.log(response.data)
      alert("Equipamento cadastrado!")
      }catch(err){
        alert("Equipamento não cadastrado!");
      };
    };
  
  return (
    <>
      <section className="logo-container" style={{width:'auto'}}>
        <h1 className="title-lgcontainer" style={{background:'#FFD700'}}>Agende aqui</h1>
      </section>   
        <Form onSubmit={handleRegisterSubmit} schema={validateNameEquipment}>   
          <div className='client-container'>
            <GoBackLink/>
        

          <div style={{background:'#FFD700', marginTop:20, padding:20, borderRadius:8, width:'auto'}}>
            <div className='input-group'>
              <h1 className="title-lgcontainer" style={{background:'#FFD700', color:'#000'}}>AGENDAR SALA</h1>
              <Input name='name_equipment' className='title-lgconatainer' placeholder='Descrição' style={{width:'100%'}}/>

              <Input name='name_equipment' className='title-lgconatainer' placeholder='Colaborador' style={{width:'100%'}}/>

              <Input name='name_equipment' className='title-lgconatainer' placeholder='Sala' style={{width:'100%'}}/>

              <Input name='date_' className='title-lgconatainer' type='date' style={{width:'100%'}}/>

              <Input name='name_equipment' className='title-lgconatainer' placeholder='Horário --:-- / --:--' style={{width:'100%'}}/>
            </div>
          </div>
          <Header/>     
      </div>
    </Form>
    </>
  )
}

export default Client;