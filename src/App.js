import React from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Grid } from 'semantic-ui-react';


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
          <Grid.Row>
            <Grid.Column>
                LIST
            </Grid.Column>
            <Grid.Column>
              <iframe title="title" src="https://jsfiddle.net/aapodshivalov/c1js68f9/show"></iframe>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
                COLORS
            </Grid.Column>
            <Grid.Column>
              <iframe title="title2" src="https://jsfiddle.net/aapodshivalov/Ljkh1xcv/show"></iframe>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
                PARTY
            </Grid.Column>
            <Grid.Column>
              <iframe title="title3" src="https://jsfiddle.net/aapodshivalov/fzgym5jn/show"></iframe>
            </Grid.Column>
          </Grid.Row>
        </Grid>

    </div>
  );
}

export default App;
