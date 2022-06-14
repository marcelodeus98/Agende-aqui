import React, {useEffect, useState } from 'react'; 
import GoBackLink from '../../components/GoBackLink';
import  Header  from '../../components/Header';
import {FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import Modal from "react-modal";
import './styles.css';

Modal.setAppElement("#root");


function Client() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]) 

  async function loadSchedules() {
    try{
      const response = await api.get('/loadSchedules')
      setProducts(response.data)
      console.log(products)
    }catch(err){
      alert("Falha na listagem dos agendamentos");
    };
  };

  async function handleDeleteSubmit(id_meeting) {
    try{
      const response = await api.delete(`/deleteProduct/${id_meeting}`)
      setProducts(products.filter(product => product.id_meeting !== id_meeting))
      console.log(response.data)
    }catch(err){
      alert("Não foi possível deletar o agendamento!");
    };
  };


    let openModal = () => {
      setIsOpen(true);
    }
    
    let closeModal = () => {
      setIsOpen(false);
    }

  useEffect(()=> {loadSchedules()}, []);
  
  return (
    <> 
          <div className='client-container'>
            <GoBackLink/>
  
          <Header/>
          <div className='container-client-itens'>
          <ul className ="container-client-itens" style={{background:'#FFD700',marginTop:10, padding:40, borderRadius:8, width:'auto'}}>
              {products.map(product => (
                <li key={product.id} style={{width:'auto'}}>
                
                <div>
                  <strong>ID do agendamento</strong>
                  <p name="id_meeting">{product.id_meeting}</p>

                  <strong>Descrição</strong>
                  <p>{product.description}</p>

                  <strong>Colaborador</strong>
                  <p>{product.collaborator}</p>
                

                  <strong>Sala</strong>
                  <p>{product.glass}</p>

                  <strong>Dia do agendamento</strong>
                  <p>{product.date_meeting}</p>

                  <strong>Horário do agendamento</strong>
                  <p>{product.time_meeting}</p>
                </div>
                
                <div className='separator'>
                  <div></div>  
                </div>

                <div className='container-buttons'>

                  <button onClick={openModal} type="button" style={{paddingLeft:20}}>
                      <FiTrash2 className='button-delete' size={40} color="#a8a8b3" />
                  </button>

                  <div className="container-modal">
                      <Modal 
                          isOpen={modalIsOpen}
                          onRequestClose={closeModal}
                          contentLabel="Modal"
                          overlayClassName="modal-overlay"
                          className="modal-content">
                          <h1 className='modal-title'>Excluir</h1>
                          <p>Você deseja excluir o agendamento ?</p>
                          <button onClick={() => handleDeleteSubmit(product.id_equipment)} className="button-modal">Sim</button>
                          <button onClick={closeModal} className="button-modal">Cancelar</button>
                      </Modal> 
                    </div>   
              
                </div>
                
              </li>
              ))}
      </ul>        
      </div>
    </div>
    </>
  )
}

export default Client;