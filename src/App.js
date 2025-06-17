import './App.css'

import React, { Component } from 'react';
import NavBar from './componets/NavBar';
import News from './componets/news';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false, // Initial mode is light
      mode: false
    };
  } 

  toggleMode = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
      mode: !prevState.mode
    }));
    document.body.style.backgroundColor = !this.state.isDarkMode ? "#333" : "#fff";
  };

  state = {
    progress: 0
  }

  setProgress = (progress)=>{   
    this.setState({progress: progress})
  }

  render() {
    
    const { isDarkMode , mode} = this.state;  
    const appStyle = {
      backgroundColor: isDarkMode ? "#333" : "#fff", 
      color: isDarkMode ? "#ffffff" : "#000000"
    };
    const cardstyle = {
      backgroundColor: isDarkMode ? "#212529" : "#fff", 
      color: isDarkMode ? "#ffffff" : "#000000"  
    };

    return (
      <>
      <div>
        <Router>
        <NavBar toggle={this.toggleMode} mystyle={appStyle} isDarkMode={isDarkMode} mode={mode}/>
        <LoadingBar  
        height={3}  
        color='#f11946' 
        progress={this.state.progress}
      />
        <Switch>      
         <Route exact path="/"><News setProgress={this.setProgress} mode={mode} cardstyle={cardstyle} category='General'/></Route>     
         <Route exact path="/general"><News setProgress={this.setProgress}   key="general"mode={mode} cardstyle={cardstyle} category='general'/></Route>  
          <Route exact path="/buisness"><News setProgress={this.setProgress}    key="buisness" mode={mode} cardstyle={cardstyle} category='buisness'/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress}    key="entertainment" mode={mode} cardstyle={cardstyle} category='entertainment'/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress}    key="science" mode={mode} cardstyle={cardstyle} category='science'/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress}    key="health" mode={mode} cardstyle={cardstyle} category='health'/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress}    key="sports" mode={mode} cardstyle={cardstyle} category='sports'/></Route>
          <Route exact path="/technologies"><News setProgress={this.setProgress}    key="technologies" mode={mode} cardstyle={cardstyle} category='technologies'/></Route>
      </Switch>         
        </Router>
      </div>
      </>
    )
  }
}

export default App;


