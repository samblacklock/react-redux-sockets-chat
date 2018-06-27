import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as messageActions from '../actions/messageActions';
import * as userActions from '../actions/userActions';
import ChatComponent from '../components/Chat';

class Chat extends Component {
  state = {
    nickname: this.props.nickname
  }

  handleSendMessage = (message) => {
    this.props.actions.sendMessage(message);
  }

  componentDidMount() {
    const nickname = window.prompt('Please enter a nickname!');
    this.props.actions.updateUser({ nickname });
  }

  render() {
    return (
      <Fragment>
        { this.state.nickname &&
          <ChatComponent 
            messages={this.props.messages}
            handleSendMessage={this.handleSendMessage}
          />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  nickname: state.user.nickname
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({...userActions, ...messageActions}, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
