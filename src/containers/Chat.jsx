import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as messageActions from '../actions/messageActions';
import * as userActions from '../actions/userActions';
import ChatComponent from '../components/Chat';

class Chat extends Component {
  handleSendMessage = (message) => {
    this.props.actions.sendMessage(message);
  }

  componentDidMount() {
    const nickname = window.prompt('Please enter a nickname!');
    this.props.actions.userLoggedOn({ nickname });
  }

  render() {
    const { messages, user, partner } = this.props;
    return (
      <Fragment>
        { user.nickname &&
          <ChatComponent 
            messages={messages}
            handleSendMessage={this.handleSendMessage}
            user={user}
            partner={partner}
          />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  user: state.user,
  partner: state.partner
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({...userActions, ...messageActions}, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
