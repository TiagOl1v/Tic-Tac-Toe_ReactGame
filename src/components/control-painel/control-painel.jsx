import React, { useState } from "react";
import "./control-painel.css"
 function ControlPainel(props) {
    
    const {
        gameStarted,
        selectedMode,
        onGameStart,
        onChangeM,
        player1,
        player2,
        playeratual,
        P1gameTime,
        P2gameTime,
        vencedorPri,
        setVencedorPri, 
      } = props;
    
      const [playerName1, setPlayerName1] = useState('');
      const [playerName2, setPlayerName2] = useState('');
    
      const handlePlayerName1Change = (event) => {
        setPlayerName1(event.target.value);
      };
    
      const handlePlayerName2Change = (event) => {
        setPlayerName2(event.target.value);
      };
    
    return(
        <>

        <div id = "control">
            <div id="cima">
                <label htmlfor="opcao">Modo de jogo:</label>
                <select id="opcao" defaultValue={0}  onChange={onChangeM}
            disabled={gameStarted}>
                        <option value="0">Selecione</option>
                        <option value="1">Player vs Player</option>
                        <option value="2">Player vs CPU</option>
                </select>
               <button id="btIniciar" 
               disabled={selectedMode === "0"} 
               onClick={onGameStart}
               style={{ backgroundColor: gameStarted ? "red" : "" }}> {gameStarted ? "Parar jogo" : "Iniciar Jogo"}</button> 
               </div>

                <div id="baixo">
                 
                <p>
            P1:{" "}
            <input
              id="P1"
              type="text"
              disabled={selectedMode === "0" || gameStarted}
              value={playerName1}
              onChange={handlePlayerName1Change}

            />
          </p>
          <p>
            P2:{" "}
            <input
              id="P2"
              type="text"
              disabled={selectedMode !== "1" || gameStarted } 
              value={playerName2}
              onChange={handlePlayerName2Change}
            />
          </p>
                
                <div id = "gameTime">
                <dl>
                    <dt>Tempo de Jogo:</dt>
                    <dd id="Time">
                    {playeratual==='player2' ? `${P2gameTime}s` : `${P1gameTime}s`  }
                    </dd>
                  </dl>
                </div>

                  </div>
                  <p>{gameStarted? `P1 : ${player1} ---vs--- P2: ${player2}` : ""}</p>
        </div>

            
        <div>
        {vencedorPri === 'O' && ( 
        <h3 className="winner-o">{player1==='O' ? `O vencedor é: ${playerName1}` : `O vencedor é: ${playerName2}`}</h3>
        )}
        
        {vencedorPri === 'X' && ( 
        <h3 className="winner-x">{player1==='X' ? `O vencedor é: ${playerName1}` : `O vencedor é: ${playerName2}`}</h3>
        )}

        {gameStarted && selectedMode === "1" && vencedorPri === '' && (
        <h3 id="vezJogador">{playeratual==='player2' ? `É a sua vez, ${playerName2}` : `É a sua vez, ${playerName1}`}</h3>
        )}

        {gameStarted && selectedMode === "2" && vencedorPri === '' && (
        <h3>Player vs CPU "(Nao funciona)"</h3>
        )}

      </div>
         
        </>
    )
}
export default ControlPainel;
