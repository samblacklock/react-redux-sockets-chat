import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as messageActions from '../actions/messageActions';
import ChatComponent from '../components/Chat';

class Chat extends Component {
  handleSendMessage = (message) => {
    console.log('handling message in chat container')
    this.props.actions.sendMessage(message);
  }

  render() {
    return (
      <ChatComponent 
        messages={this.props.messages}
        handleSendMessage={this.handleSendMessage}
        user={this.props.user}
      />
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  user: state.user 
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(messageActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
