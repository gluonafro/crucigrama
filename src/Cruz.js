import React, { useState } from "react";
import styled from "styled-components/macro";
import letters from "./resources/letters.json";
import arraysEqual from "./utils/arraysEqual";
import notAWord from "./utils/notAWord";
import ResultBox from "./Result";
import Button from "./Button";

const Cruz = ({ coords, setCoords, setOri, ori }) => {
  const styles = {
    width: 28,
    fontSize: 25,
  };
  const nRows = letters.length;

  let result = [];
  for (let index = 0; index < nRows; index++) {
    result.push([]);
    for (let jindex = 0; jindex < nRows; jindex++) {
      result[index].push("");
    }
  }
  const [inputValues, setInputValues] = useState(result);
  const [showResult, setShowResult] = useState(false);
  const [showSols, setShowSols] = useState(false);

  const onChangeInput = (i, j) => (e) => {
    result = inputValues;
    result[i][j] = e.target.value;
    setInputValues(result);
  };

  const selected = (i, j) => {
    let ejeSelected = ori ? coords[0] : coords[1];
    let eje = ori ? i : j;
    if (eje === ejeSelected) return true;
    return false;
  };

  const otherSelected = (i, j) => {
    let indSelected = ori ? coords[1] : coords[0];
    let ind = ori ? j : i;
    if (ind === indSelected) return true;
    return false;
  };

  return (
    <Square>
      {letters.map((row, i) => {
        return (
          <Row key={i}>
            {row.split("").map((letter, j) => {
              return letter !== "0" ? (
                <Celda
                  tabIndex='0'
                  styles={styles}
                  onClick={() => {
                    setCoords([i, j]);
                    let a = coords;
                    let b = [i, j];
                    if (
                      notAWord(i, j, letters, ori) ||
                      (!notAWord(i, j, letters, !ori) && arraysEqual(a, b))
                    )
                      setOri(!ori);
                  }}
                  className={[
                    selected(i, j) ? "selected" : "",
                    otherSelected(i, j) ? "alsoSelected" : "",
                  ]}
                  key={[i, j]}
                >
                  {showSols ? (
                    <span>{letter}</span>
                  ) : (
                    <input
                      maxLength='1'
                      type='text'
                      spellCheck='false'
                      onChange={onChangeInput(i, j)}
                    ></input>
                  )}
                </Celda>
              ) : (
                <Celda className='empty' styles={styles} key={[i, j]} />
              );
            })}
          </Row>
        );
      })}
      <Buttons>
        <Button func={() => setShowSols(!showSols)} text='Solución' />
        <Button func={() => setShowResult(!showResult)} text='Resultado' />
      </Buttons>

      {showResult ? <ResultBox input={inputValues} /> : null}
    </Square>
  );
};

export default Cruz;

const Square = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  :first-child div {
    border-top: 0.5px solid #000;
  }

  & div {
    display: flex;
  }
  .empty {
    background-color: #000;
  }
  .alsoSelected {
    background-color: #e6e6e6;
  }
  .selected {
    background-color: yellow;
  }
`;

const Celda = styled.div`
  width: ${(props) => props.styles.width + "px"};
  height: ${(props) => props.styles.width + "px"};
  border-bottom: 0.5px solid #000;
  border-right: 0.5px solid #000;
  vertical-align: middle;
  text-align: center;
  text-transform: uppercase;
  font-size: ${({ styles }) => styles.fontSize + "px"};
  outline: none;
  line-height: ${(props) => props.styles.width + "px"};
  input {
    align-self: flex-start;
    text-align: center;
    font-size: ${({ styles }) => styles.fontSize + "px"};
    text-transform: uppercase;
    border: 0;
    color: transparent;
    text-shadow: 0 2px 0 #000;
    width: ${(props) => props.styles.width + "px"};
    height: ${(props) => props.styles.width - 2 + "px"};
    z-index: 0;
    background-color: transparent;
    outline: none;
    :focus {
      background-color: orange !important;
    }
  }
  span {
    margin: 0 auto;
  }
  :first-child {
    border-left: 0.5px solid #000;
  }
`;

const Buttons = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  button {
    margin: 0 10px;
  }
`;
