// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import TituloTela from '../styles/tituloTela';
import fotousuario from '../assets/fotousuario.png';

const Perfil = () => {
  return (
    <Container
      style={{
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: '1vh',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <TituloTela style={{ marginBottom: '0vh' }}>Perfil</TituloTela>

      <div
        style={{
          flexGrow: '1',
          width: '100%',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Container para o header com foto e caixa amarela */}
        <div
          style={{
            display: 'flex',
            width: '90%',
            height: '230px',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            position: 'relative',
            top: '10px',
            alignItems: 'center',
          }}
        >
          <img
            style={{
              height: '50%',
              width: '30%',
              zIndex: '3',
              position: 'absolute',
              top: '20px',
              placeSelf: 'center',
            }}
            src={fotousuario}
            alt="Foto do Usuário"
          />

          <div
            style={{
              display: 'flex',
              width: '100%',
              height: '80%',
              backgroundColor: '#FEE101',
              borderRadius: '8px',
              justifyContent: 'center',
              alignItems: 'end',
              paddingBottom: '20px',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '36px' }}>Silvia Santos</h1>
              <h2 style={{ fontSize: '20px', fontWeight: 'lighter' }}>
                Entrou em 2021
              </h2>
            </div>
          </div>
        </div>

        {/* Seção com informações adicionais */}
        <div
          style={{
            display: 'flex',
            width: '90%',
            paddingTop: '10px',
            height: '200px',
          }}
        >
          {/* Coluna de informações do usuário */}
          <div style={{ flex: 1, paddingRight: '10px' }}>
            <div style={{ height: '30%', width: '200px' }}>
              <h2 style={{ fontSize: '20px' }}>Estudando</h2>
              <p>História</p>
            </div>

            <div>
              <h2 style={{ fontSize: '20px' }}>Série</h2>
              <p>3º - Fundamental 1</p>
            </div>

            <div>
              <h2 style={{ fontSize: '20px', paddingTop: '10px' }}>
                Assunto no momento
              </h2>
              <p>Segunda Guerra Mundial</p>
            </div>
          </div>

          {/* Coluna para aluno/mentor */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '20px', height: '60px' }}>Aluno/Mentor</h2>
            <button style={{ backgroundColor: '#FEE101', height:'42px', width:'88px', border: 'black', padding: '5px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
          Ver grupo <br/> 
          de mentoria
        </button>
          </div>
import Silvia from '../assets/silvia.png';
import Estrelas from '../assets/estrela.png'

const Perfil = () => {
  return (
    <Container style={{ backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh' }}>
      <TituloTela style={{ marginBottom: '2vh' }}>Perfil</TituloTela>
      <div style={{ flexGrow: '1', width: '100%', backgroundColor: 'white', overflowY: 'auto', paddingInline: '5vw', color: 'white' }}>
        
        {/* Seção de perfil */}
        <div style={{ textAlign: 'center', padding: '2vh 0' }}>
          <img src={Silvia} alt="Perfil" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
          <div style={{ backgroundColor: '#FEE101', borderRadius: '10px', marginTop: '-74px', height: '150px'}}>
            <h2 style={{color: '#302F2F', paddingTop: '70px', fontWeight: 'bold'}}>Silvia Santos</h2>
            <p style={{color: '#302F2F'}}>Entrou em 2021</p>
          </div>
        </div>

        {/* Seção de especialização */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1vh 0' }}>
          <div>
            <p style={{ fontWeight: 'bold', color: '#302F2F' }}>Especialização</p>
            <p style={{color: '#302F2F'}}>História</p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold', color: '#302F2F' }}>Professor</p>
          </div>
        </div>

        {/* Botão de mentoria */}
        <button style={{ backgroundColor: '#FEE101', border: 'none', padding: '5px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
          Ver grupo <br/> 
          de mentoria
        </button>

        {/* Seção de Rank - Mentor */}
        <div style={{ marginTop: '8vh' }}>
          <h2  style={{color: '#302F2F', fontSize: '22px', fontWeight: 'bold'}}>Rank - Mentor</h2>
          <div>
          <img src={Estrelas} alt="Perfil" style={{  width: '150px', height: '30px', marginTop: '30px' }} />
            <p style={{ color: '#302F2F', marginTop: '-16px', marginLeft: '18px', fontSize: '13px' }}><br/>(150 avaliações)</p>
          </div>
          {  
            
         <div style={{ backgroundColor: '#D9D9D9', height: '10px', width: '140px', borderRadius: '5px', marginTop: '2vh' }}>
            <div style={{ backgroundColor: '#302F2F', height: '100%', width: '85px', borderRadius: '5px' }}>
                <p style={{color: 'black', marginLeft:'150px', fontSize: '10px'}}>85%</p>


         


            </div>
          </div>
           }
        </div>
        <div style={{ marginTop: '2vh' }}>
          {/* <h2  style={{color: '#302F2F'}}>Emblemas</h2> */}
          {/* <h3 style={{color: 'black'}}>ver todos</h3> */}
          {/* <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#000000', padding: '10px', borderRadius: '10px' }}>Nível 1</div>
            <div style={{ backgroundColor: '#000000', padding: '10px', borderRadius: '10px' }}>Nível 1</div>
            <div style={{ backgroundColor: '#000000', padding: '10px', borderRadius: '10px' }}>Nível 1</div>
          </div> */}
        </div>
      </div>

      <Navegacao />
    </Container>
  );
};

export default Perfil;
