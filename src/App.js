
import React from 'react';
import { useState, useEffect } from "react";
import './App.css';

import {
  ControlPainel,
  Header,
  GamePainel,
  Footer,
} from "./components";

function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [playeratual, setPlayeratual] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedMode, setSelectedMode] = useState("0");
  const [gameTimeP1, setGameTimeP1] = useState(300);
  const [gameTimeP2, setGameTimeP2] = useState(300);
  const [vencedorPri, setVencedorPri] = useState('');


  useEffect(() => {
    let intervalId;
        
    if (gameStarted && vencedorPri === '') {
      if (playeratual === 'player1') {
        intervalId = setInterval(() => {
       setGameTimeP1((prevTime) => {
         if (prevTime !== -1) {
           return prevTime - 1;
                  } else {
                    return prevTime;
                  }
                });
              }, 1000);
            }
    } else {
     setGameTimeP1(300);
       }
        
      return () => {
       clearInterval(intervalId);
      };}, [gameStarted, playeratual, vencedorPri]);
  
useEffect(() => {
  let intervalId;
      
  if (gameStarted  && vencedorPri === '') {
    if (playeratual === 'player2') {
      intervalId = setInterval(() => {
     setGameTimeP2((prevTime) => {
       if (prevTime !== -1) {
         return prevTime - 1;
                } else {
                  return prevTime;
                }
              });
            }, 1000);
          }
  } else {
   setGameTimeP2(300);
  }
      
    return () => {
     clearInterval(intervalId);
    };}, [gameStarted, playeratual, vencedorPri]);



  const handleGameStart = () => {

    if (gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
      setVencedorPri('');
    } else {
      console.log("Inicia Jogo");
      setGameStarted(true);
    }
  };

  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedMode(value);
  }

  useEffect(() => {
    if (gameStarted && document.getElementById('opcao').value === '1'){
    const randomValue = Math.round(Math.random());
    setPlayer1(randomValue === 0 ? 'O' : 'X');
    setPlayer2(randomValue === 0 ? 'X' : 'O');
    setPlayeratual(randomValue === 0 ? 'player1' : 'player2');
    }
  }, [gameStarted]);

  const handleMostrar = () => {
        if (gameStarted && document.getElementById('opcao').value === '1') {
      setPlayeratual(playeratual === 'player1' ? 'player2' : 'player1');
      if (playeratual === 'player1') {
        console.log("O player 1 jogou");
      } else {
        console.log("O player 2 jogou");
      }

    }
  };
  

  return (
    <>
    <div id="container">

    <Header/>
    <ControlPainel
  gameStarted={gameStarted}
  onGameStart={handleGameStart}
  selectedMode={selectedMode}
  onChangeM={handleLevelChange}
  player1={player1}
  player2={player2}
  playeratual={playeratual}
  P1gameTime={gameTimeP1}
  P2gameTime={gameTimeP2}
  vencedorPri={vencedorPri}
  setVencedorPri={setVencedorPri}
  />
   {gameStarted&&(  
    <GamePainel
    vencedorPri={vencedorPri}
    setVencedorPri={setVencedorPri}
      player1={player1}
      player2={player2}
      playeratual={playeratual}
     onMostrar={handleMostrar}
    gameTimeP1 = {gameTimeP1}
    gameTimeP2 = {gameTimeP2}
    />
   )}
    <Footer/>
    
        </div>
        </>
 
  );
}


export default App;
