import React, { useState } from "react";
import "./tables.component.css";

export default function Tables(props) {
  const { id, playeratual, handleMostrar, player1,block,blockTableJo,setVencedor,handleBlockTable, handleClickNaCell} = props;
  const CasaArrayValue = Array(9).fill("");
  const [cellValues, setCellValues] = useState(CasaArrayValue);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (!blockTableJo && !block && cellValues[index] === "") {

      const auxCellValues = [...cellValues];
      if (player1 === "O") {
      auxCellValues[index] = playeratual === "player1" ? "O" : "X";
      } else {
        auxCellValues[index] = playeratual === "player1" ? "X" : "O";
      }
      setCellValues(auxCellValues);
      handleMostrar(id);
      handleClickNaCell(index);

      const VencedorTab = VerfVencedor(auxCellValues);
      if (VencedorTab) {
        console.log("O vencedor é:", VencedorTab);
        handleBlockTable(); 
        setWinner(VencedorTab);
        setVencedor(VencedorTab);

      }
    }
  };


  const VerfVencedor = (cellValues) => {
    const OpVencedor = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], 
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], 
      [2, 4, 6],
    ];

    for (let i = 0; i < OpVencedor.length; i++) {
      const [a, b, c] = OpVencedor[i];
      if (
        cellValues[a] !== "" &&
        cellValues[a] === cellValues[b] &&
        cellValues[a] === cellValues[c]
      ) {
        return cellValues [a]; 
      }
      else if(

        cellValues[0] !== "" && cellValues[1] !== "" && cellValues[2] !== "" && cellValues[3] !== "" && cellValues[4] !== "" && cellValues[5] !== "" &&   cellValues[6] !== "" && cellValues[7] !== "" && cellValues[8] !== ""
        &&  cellValues[a] !== cellValues[b] &&
        cellValues[a] !== cellValues[c]
          
      ){
        return "-"
      }
    }
    return null;
  };


  return (
    <>
      <table id={id} className={`${blockTableJo ? 'blocked' : 'joga'} ${winner ? `winner-${winner}` : ""}`}>
        <tbody>
          <tr>
            <td id="quad1" onClick={() => handleClick(0)}
            className={cellValues[0] === "X" ? "x-cell" : cellValues[0] === "O" ? "o-cell" : ""}>
              <span>{cellValues[0]} </span>
            </td>
            <td id="quad2" onClick={() => handleClick(1)}
            className={cellValues[1] === "X" ? "x-cell" : cellValues[1] === "O" ? "o-cell" : ""}>
              <span>{cellValues[1]}</span>
            </td>
            <td id="quad3" onClick={() => handleClick(2)}
            className={cellValues[2] === "X" ? "x-cell" : cellValues[2] === "O" ? "o-cell" : ""}>
              <span>{cellValues[2]}</span>
            </td>
          </tr>

          <tr>
            <td id="quad4" onClick={() => handleClick(3)}
            className={cellValues[3] === "X" ? "x-cell" : cellValues[3] === "O" ? "o-cell" : ""}>
              <span>{cellValues[3]}</span>
            </td>
            <td id="quad5" onClick={() => handleClick(4)}
            className={cellValues[4] === "X" ? "x-cell" : cellValues[4] === "O" ? "o-cell" : ""}>
              <span>{cellValues[4]}</span>
            </td>
            <td id="quad6" onClick={() => handleClick(5)}
            className={cellValues[5] === "X" ? "x-cell" : cellValues[5] === "O" ? "o-cell" : ""}>
              <span>{cellValues[5]}</span>
            </td>
          </tr>

          <tr>
            <td id="quad7" onClick={() => handleClick(6)}
            className={cellValues[6] === "X" ? "x-cell" : cellValues[6] === "O" ? "o-cell" : ""}>
              <span>{cellValues[6]}</span>
            </td>
            <td id="quad8" onClick={() => handleClick(7)}
            className={cellValues[7] === "X" ? "x-cell" : cellValues[7] === "O" ? "o-cell" : ""}>
              <span>{cellValues[7]}</span>
            </td>
            <td id="quad9" onClick={() => handleClick(8)}
            className={cellValues[8] === "X" ? "x-cell" : cellValues[8] === "O" ? "o-cell" : ""}>
              <span>{cellValues[8]}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
