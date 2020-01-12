import React, {Component} from 'react';
//import {inject, observer} from 'mobx-react'
//import { Login } from './Login/index';

import Nav from './nav';
import About from './about';
import Shop from './shop';
import Home from './Home';
import ItemDetail from './ItemDetail';
import HistoryNav from './HistoryNav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// @inject("BirdStore")
// @observer
export class App extends Component {
  /*
  handleSubmit = (e) =>{
    e.preventDefault();
    const bird = this.bird.value;
    this.props.BirdStore.addBird(bird);
    this.bird.value=''
  }
  */

  render(){
  
  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
     <Route path='/' exact component={Home} />
     <Route path='/home' exact component={HistoryNav} />
      <Route path='/about'  component={About} />
      <Route path='/shop' exact  component={Shop} />
      <Route path='/shop/:id' component={ItemDetail}/>
      </Switch>
    </div>
    </Router>
  );
  }
}



/*


return (
  <div className="App">

<h2>Total birds {this.props.BirdStore.birdCount}</h2>
<form onSubmit={e=>{this.handleSubmit(e)}}> 
  <input type="text" placeholder='enter bird' ref={input => this.bird=input }/>
  <button>Submit</button>
</form>

    <ul>
{this.props.BirdStore.birds.map(i=><li>{i}</li>)}
      </ul> 
  </div>
);

export default App;
*/