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
        </div>
      </div>

      <Navegacao />
    </Container>
  );
};

export default Perfil;
