import React from 'react';
import axios from 'axios';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';
import getUserInfo from './gitSearch';
class App extends React.Component {
  getChildContext() {
      return {muiTheme: getMuiTheme()};
    }

  constructor(){
    super();
    this.state={
      info:{},
      wait:true
    }
  }

  componentDidMount(){
    getUserInfo().then((data)=>{
      console.log(data);
      this.setState({
        info:data.bio,
        wait:false
      })
    });
  }
  render () {
    return(
      <div>
        {
          this.state.wait ? <CircularProgress /> :
          <div>
            {this.state.info.created_at}
            {this.state.info.followers}
            <img src={this.state.info.avatar_url} />
          </div>
        }
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
