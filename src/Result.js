import React from "react";
import styled from "styled-components";
import letters from "./resources/letters.json";

const Result = ({ input }) => {
  const getScore = (answer) => {
    let solution = letters.map((row) => row.split(""));
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    for (let i = 0; i < solution.length; i++) {
      for (let j = 0; j < solution.length; j++) {
        if (solution[i][j] !== "0" && solution[i][j] === answer[i][j])
          correctAnswers++;
        else if (solution[i][j] !== "0" && answer[i][j] !== "")
          incorrectAnswers++;
      }
    }
    let result = Math.floor(
      (correctAnswers / (correctAnswers + incorrectAnswers)) * 100
    );
    return result;
  };

  let result = getScore(input);

  const getText = (res) => {
    if (res === 100) return "¡Enhorabuena, perfecto! Eres la mejor";
    if (res >= 90) return "¡Enhorabuena, genial! Eres bassstante crack";
    if (res >= 70) return "¡Muy bien! No se te dan nada mal los crucigramas";
    if (res >= 50) return "Bueno, aún tienes muchos crucigramas por hacer";
    else return "Madre mía, eres un poco cafre";
  };

  return (
    <ResultBox>
      {result ? (
        <div>
          <div>{getText(result)}</div>
          <div>{result}%</div>
        </div>
      ) : (
        <div>
          <div>¡Empieza a jugar!</div>
        </div>
      )}
    </ResultBox>
  );
};

export default Result;

const ResultBox = styled.div`
  position: fixed;
  top: 40%;
  left: 38.5%;
  width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  background: #fff;
  > div {
    width: 100%;
    font-size: 16px;
    padding: 15px 0;
    > div {
      text-align: center;
    }
    div:last-child {
      color: #0fab0f;
      font-weight: 600;
    }
  }
`;
