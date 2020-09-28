import React from 'react';
import './index.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ToDo from './components/ToDo';
import List from './components/List';


const App = () => {
    
    return (
        <BrowserRouter>

          <switch>
            <Route  exact path='/' component={List} />
            <Route  exact path='/ToDo' component={ToDo} />
          </switch>

        </BrowserRouter>
    );
}

export default App;