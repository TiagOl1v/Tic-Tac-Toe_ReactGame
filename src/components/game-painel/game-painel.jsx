import React, { useState,useEffect } from 'react';
import "./game-painel.css";
import Tables from "../tables/tables.component";

function GamePainel(props) {
  const { playeratual, onMostrar, player1, player2, setVencedorPri, vencedorPri, gameTimeP1, gameTimeP2} = props;

  const [numeroAux, setNumeroAux] = useState(0);

  const [tableBloqueada, setTableBloqueada] = useState({
    "jogo-1": false,
    "jogo-2": false,
    "jogo-3": false,
    "jogo-4": false,
    "jogo-5": false,
    "jogo-6": false,
    "jogo-7": false,
    "jogo-8": false,
    "jogo-9": false,
  });

  const [tableVencedores, setTableVencedores] = useState({
    "jogo-1": null,
    "jogo-2": null,
    "jogo-3": null,
    "jogo-4": null,
    "jogo-5": null,
    "jogo-6": null,
    "jogo-7": null,
    "jogo-8": null,
    "jogo-9": null,
  });

  const [tableBloqueadaJogada, setTableBloqueadaJogada] = useState({
    "jogo-1": false,
    "jogo-2": false,
    "jogo-3": false,
    "jogo-4": false,
    "jogo-5": false,
    "jogo-6": false,
    "jogo-7": false,
    "jogo-8": false,
    "jogo-9": false,
  });


  const handleClickNaCell = (index) => {
    console.log("Clicado no array:", index);
    const jogoBloqueadoMini = verificarBloqueioVencdorMini(index);
    console.log(`O jogo ${index + 1} está bloqueado? ${jogoBloqueadoMini}`);
   
    if (!jogoBloqueadoMini) {
      for (let i = 1; i <= 9; i++) {
        if (i !== index + 1) {
          setTableBloqueadaJogada((prevState) => ({
            ...prevState,
            [`jogo-${i}`]: true,
          }));
        }
      }
      setTableBloqueadaJogada((prevTableBlock) => ({
        ...prevTableBlock,
        [`jogo-${index + 1}`]: false,
      }));
    }
    else
    for (let i = 1; i <= 9; i++) {
        setTableBloqueadaJogada((prevState) => ({
          ...prevState,
          [`jogo-${i}`]: false,
        }));
      }
  }



  const verificarBloqueioVencdorMini = (numero) => {
    const jogoN = `jogo-${numero + 1}`;
    setNumeroAux(numero);
    return tableBloqueada[jogoN];

  };


  const handleMostrar = (valor) => {
    if (playeratual === "player1" || playeratual === "player2") {
      onMostrar(valor);
      const proximoPlayer = playeratual === "player1" ? "player2" : "player1";
      console.log("Próximo jogador: ", proximoPlayer);
    }
  };

  const handleBlockTable = (tableId) => {
    setTableBloqueada((prevTableBlock) => ({
      ...prevTableBlock,
      [tableId]: true,
    }));
  };


  useEffect(() => {
    if (tableBloqueada["jogo-1"]) {
      handleClickNaCell(numeroAux);
    } else if (tableBloqueada["jogo-2"]) {
      handleClickNaCell(numeroAux);
    } else if (tableBloqueada["jogo-3"]) {
      handleClickNaCell(numeroAux);
    } else if (tableBloqueada["jogo-4"]) {
      handleClickNaCell(numeroAux);
    } else if (tableBloqueada["jogo-5"]) {
      handleClickNaCell(numeroAux);
    } else if (tableBloqueada["jogo-6"]) {
      handleClickNaCell(numeroAux);
    } else if (tableBloqueada["jogo-7"]) {
      handleClickNaCell(numeroAux);
    } else if (tableBloqueada["jogo-8"]) {
      handleClickNaCell(numeroAux);
    } else if (tableBloqueada["jogo-9"]) {
      handleClickNaCell(numeroAux);
    }
  
  }, [tableBloqueada]);
  
  const handleSetVencedor = (tableId, elemento) => {
    setTableVencedores((prevTableVencedores) => ({
      ...prevTableVencedores,
      [tableId]: elemento,
    }));
    console.log("O vencedor = ",elemento);
    handleVencedor();
  };

  useEffect(() => {
    handleVencedor();
    if (vencedorPri === "X" || vencedorPri === "O") {
      setTableBloqueada((prevTableBlock) => ({
        ...prevTableBlock,
        "jogo-1": true,
        "jogo-2": true,
        "jogo-3": true,
        "jogo-4": true,
        "jogo-5": true,
        "jogo-6": true,
        "jogo-7": true,
        "jogo-8": true,
        "jogo-9": true,
      }));
      setTableBloqueadaJogada((prevTableBlock) => ({
        ...prevTableBlock,
        "jogo-1": true,
        "jogo-2": true,
        "jogo-3": true,
        "jogo-4": true,
        "jogo-5": true,
        "jogo-6": true,
        "jogo-7": true,
        "jogo-8": true,
        "jogo-9": true,
      }));

    }
  }, [tableVencedores,vencedorPri,gameTimeP1,gameTimeP2,tableBloqueadaJogada]);

  const handleVencedor = () => {
    if(gameTimeP1 !== 0 && gameTimeP2 !== 0){
      console.log("Tempo:", gameTimeP1);
    const tabelasVencedoras = [
      ["jogo-1", "jogo-2", "jogo-3"],
      ["jogo-4", "jogo-5", "jogo-6"],
      ["jogo-7", "jogo-8", "jogo-9"],
      ["jogo-1", "jogo-4", "jogo-7"],
      ["jogo-2", "jogo-5", "jogo-8"],
      ["jogo-3", "jogo-6", "jogo-9"],
      ["jogo-1", "jogo-5", "jogo-9"],
      ["jogo-3", "jogo-5", "jogo-7"],
    ];


    for (let i = 0; i < tabelasVencedoras.length; i++) {
      const [a, b, c] = tabelasVencedoras[i];
      if (
        tableVencedores[a] &&
        tableVencedores[a] === tableVencedores[b] &&
        tableVencedores[a] === tableVencedores[c]
      ) {
        
        const vencedor = tableVencedores[a];
        console.log("Vencedor geral:", vencedor);
        setVencedorPri(vencedor);
        break;
      }
    }
    } else
      if(gameTimeP1 === 0){
        setVencedorPri(player2)
        console.log("Vencedor geral:", player2);
      }
      else if(gameTimeP2 === 0){
        setVencedorPri(player1)
        console.log("Vencedor geral:", player1);
      }
    
  };

  
  return (
    <>
      <div className="containerjogo">
        <div id="firstcolumn">
          <Tables
            id="jogo-1"
            player1={player1}
            playeratual={playeratual}
            handleMostrar={handleMostrar}
            block={tableBloqueada["jogo-1"]}
            handleBlockTable={() => handleBlockTable("jogo-1")}
            setVencedor={(elemento) => handleSetVencedor("jogo-1", elemento)}
            handleClickNaCell={handleClickNaCell}
            blockTableJo={tableBloqueadaJogada["jogo-1"]}
          />
          <Tables
            id="jogo-4"
            player1={player1}
            playeratual={playeratual}
            handleMostrar={handleMostrar}
            block={tableBloqueada["jogo-4"]}
            handleBlockTable={() => handleBlockTable("jogo-4")}
            setVencedor={(element) => handleSetVencedor("jogo-4", element)}
            handleClickNaCell={handleClickNaCell}
            blockTableJo={tableBloqueadaJogada["jogo-4"]}
          />
          <Tables
            id="jogo-7"
            player1={player1}
            playeratual={playeratual}
            handleMostrar={handleMostrar}
            block={tableBloqueada["jogo-7"]}
            handleBlockTable={() => handleBlockTable("jogo-7")}
            setVencedor={(element) => handleSetVencedor("jogo-7", element)}
            handleClickNaCell={handleClickNaCell}
            blockTableJo={tableBloqueadaJogada["jogo-7"]}
          
          />
        </div>

        <div id="secondcolumn">
          <Tables
            id="jogo-2"
            player1={player1}
            playeratual={playeratual}
            handleMostrar={handleMostrar}
            block={tableBloqueada["jogo-2"]}
            handleBlockTable={() => handleBlockTable("jogo-2")}
            setVencedor={(element) => handleSetVencedor("jogo-2", element)}
            handleClickNaCell={handleClickNaCell}
            blockTableJo={tableBloqueadaJogada["jogo-2"]}
          />
          <Tables
            id="jogo-5"
            player1={player1}
            playeratual={playeratual}
            handleMostrar={handleMostrar}
            block={tableBloqueada["jogo-5"]}
            handleBlockTable={() => handleBlockTable("jogo-5")}
            setVencedor={(element) => handleSetVencedor("jogo-5", element)}
            handleClickNaCell={handleClickNaCell}
            blockTableJo={tableBloqueadaJogada["jogo-5"]}
          />
          <Tables
            id="jogo-8"
            player1={player1}
            playeratual={playeratual}
            handleMostrar={handleMostrar}
            block={tableBloqueada["jogo-8"]}
            handleBlockTable={() => handleBlockTable("jogo-8")}
            setVencedor={(element) => handleSetVencedor("jogo-8", element)}
            handleClickNaCell={handleClickNaCell}
            blockTableJo={tableBloqueadaJogada["jogo-8"]}
          />
        </div>

        <div id="thirdcolumn">
          <Tables
            id="jogo-3"
            player1={player1}
            playeratual={playeratual}
            handleMostrar={handleMostrar}
            block={tableBloqueada["jogo-3"]}
            handleBlockTable={() => handleBlockTable("jogo-3")}
            setVencedor={(element) => handleSetVencedor("jogo-3", element)}
            handleClickNaCell={handleClickNaCell}
            blockTableJo={tableBloqueadaJogada["jogo-3"]}
          />
          <Tables
            id="jogo-6"
            player1={player1}
            playeratual={playeratual}
            handleMostrar={handleMostrar}
            block={tableBloqueada["jogo-6"]}
            handleBlockTable={() => handleBlockTable("jogo-6")}
            setVencedor={(element) => handleSetVencedor("jogo-6", element)}
            handleClickNaCell={handleClickNaCell}
            blockTableJo={tableBloqueadaJogada["jogo-6"]}

          />
          <Tables
            id="jogo-9"
            player1={player1}
            playeratual={playeratual}
            handleMostrar={handleMostrar}
            block={tableBloqueada["jogo-9"]}
            handleBlockTable={() => handleBlockTable("jogo-9")}
            setVencedor={(element) => handleSetVencedor("jogo-9", element)}
            handleClickNaCell={handleClickNaCell}
            blockTableJo={tableBloqueadaJogada["jogo-9"]}
          />
        </div>
      </div>
    </>
  );
}

export default GamePainel;
