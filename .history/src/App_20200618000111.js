import React, { Component } from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import History from './pages/History';

import NextPage from './pages/TestLoader';
import Main from './pages/main';
//import TestPage from './pages/TestPapers/level1';
//import Level2 from './pages/TestPapers/level2';
//import Level3 from './pages/TestPapers/level3';
//import Level4 from './pages/TestPapers/level4';
//import Level5 from './pages/TestPapers/level5';
//import Level6 from './pages/TestPapers/level6';
//import Level7 from './pages/TestPapers/level7';

//https://codepen.io/abbeyjfitzgerald/pen/QaeoYj

/*const backUrl = '/some/other/value'
// this.props.testvalue === "hello"
<Link to={{pathname: `/${this.props.testvalue}`, query: {backUrl}}} />
console.log(this.props.match.params.testvalue, this.props.location.query.backurl)
// output
hello /some/other/value
*/

 

class App extends Component {
	//this.props.match.params.id

  
  



  render(){
    return(
		
      <Router history={History}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/testpage" component={NextPage} />
          <Route path="/timedtest" component={TestPage} />
	
        </Switch>
      </Router>
    )
  
  }
}

export default App;

//	  <Route path="/random" component={Level4} />
/*{"q":["24","-4","7"], "a":27},
	{"q":["3","-2","36"], "a":37},
	{"q":["56","-1","3"], "a":58},
	{"q":["88","-2","-1"], "a":85},
	{"q":["73","-1","7"], "a":79},
	{"q":["7","32","-4"], "a":35},
	{"q":["6","71","-5"], "a":72},
	{"q":["16","-5","2"], "a":13},
	{"q":["7","22","-7"], "a":22},
	{"q":["38","-6","2"], "a":34},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58}*/
