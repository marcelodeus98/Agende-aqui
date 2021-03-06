import React from 'react';
import {MdNotificationsNone} from 'react-icons/md';
import {AiOutlineSchedule} from 'react-icons/ai';
import {BsTable} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './styles.css';

function Dashboard() {

  return (
    <>
    <div className='dashboard-container'>
      <header>
        <Link className='button'>BEM VINDO
          <MdNotificationsNone size={48} color='#000' />
        </Link>
        
      </header>

      <h1>Operações disponíveis</h1>

      <ul>
        <Link to='/to_schedule'>
          <li>
            <strong style={{color:'#000'}}>AGENDAR SALA</strong>
            <button type='button'>
              <AiOutlineSchedule size={24} color='#000' />
            </button>
          </li>
        </Link>

        <Link to='/schedules'>
          <li>
            <strong style={{color:'#000'}}>AGENDAMENTOS</strong>
            <button type='button'>
              <BsTable size={24} color='#000' />
            </button>
          </li>
        </Link>

      </ul>
    </div>
  </>  
  )
}
export default Dashboard;
