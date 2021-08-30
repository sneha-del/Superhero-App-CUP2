import React from 'react'
import Homepage from './components/Homepage'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Description from './components/Description';
 


  const App = (props) => {
    const {superData=[]}=props;
    console.log(superData);
      return (
        
          <div className="app">
              <Router>
                  <Switch>
                      <Route path="/" exact>
                      <Homepage/>
                      </Route>
                      {/* <Route path="/description" exact> */}
                          {/* <Description {...superData.map((superhero) =>
    <Card data={superhero}/>)}/> */}
    <Route exact path="/description/:id" component={Description}/>
                      {/* </Route> */}
                  </Switch>
              </Router>
             
          </div>
      )
  }
  
  export default App
  

