import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cruz from "./Cruz";
import Header from "./Header";
import content from "./resources/content.json";

function App() {
  const [ori, setOri] = useState(true);
  const [coords, setCoords] = useState([0, 0]);
  const [def, setDef] = useState("");

  const words = content[ori ? 0 : 1];

  useEffect(() => {
    getWord(ori, coords, words, setDef);
  }, [coords, ori, words]);

  return (
    <div className='App'>
      <Header />
      <Main>
        <div className='container'>
          <CurrentDef>
            <div>{def}</div>
          </CurrentDef>
          <Cruz
            coords={coords}
            setCoords={setCoords}
            setOri={setOri}
            ori={ori}
          />
        </div>
      </Main>
    </div>
  );
}

export default App;

const Main = styled.main`
  height: 100%;
  width: 100%;
  .container {
    width: 40%;
    margin: 25px auto 0;
  }
  .hovereand:hover {
    color: orange;
    transition: 1s;
  }
`;

const CurrentDef = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  position: relative;
  margin-bottom: 20px;
  div {
    margin-left: 10px;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: break-spaces;
  }
`;

const getWord = (ori, coords, words, setDefinition) => {
  let x = ori ? coords[0] : coords[1];
  let y = ori ? coords[1] : coords[0];
  let position = 0;
  for (let i = 0; i < words[x].length; i++) {
    let el = words[x][i];
    position = position + el.word.length;
    if (position > y) {
      setDefinition(el.def);
      return;
    }
  }
};

// const Button = styled.button`

// `;
