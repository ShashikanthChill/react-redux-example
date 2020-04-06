import React from 'react';
import { Route } from 'react-router';
import WordComponent from './components/WordComponent';
import WordsList from "./components/WordListComponent";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/:wordId" component={WordComponent} />
        <Route exact path="/" component={WordsList} />
      </div>
    </BrowserRouter>
  );
}

export default App;
