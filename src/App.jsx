import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as messagesActions from './actions/messagesActions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.messagesActions.getMessages();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={ props => (
              <React.Fragment>
                App { props.toString() }
              </React.Fragment>
            )}/>
          <Route path='*' render={() => <div className="page-not-found"><h1>404 Page not found</h1></div> }/>
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    messagesActions: bindActionCreators(messagesActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
