import React from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Grid } from 'semantic-ui-react';

const list = [
  { src: "https://jsfiddle.net/aapodshivalov/c1js68f9/show", name: "LIST" },
  { src: "https://jsfiddle.net/aapodshivalov/Ljkh1xcv/show", name: "COLORS" },
  { src: "https://jsfiddle.net/aapodshivalov/fzgym5jn/show", name: "PARTY" }
];

const setRow = ({ src, name, i }) => {
  const title = "title" + i;
  return <Grid.Row key={i}>
  <Grid.Column>
      <div>{name}</div>
  </Grid.Column>
  <Grid.Column>
    <div><a href={src} target="_blank" >{src}</a></div>
    <iframe title={title} src={src}></iframe>
  </Grid.Column>
</Grid.Row>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Copy Past
        </p>
      </header>

        <Grid columns={2} divided='vertically' celled='internally'>
        {list.map((item, i) => (
          setRow({ src: item.src, name: item.name, i })
        ))}
        </Grid>

    </div>
  );
}

export default App;
