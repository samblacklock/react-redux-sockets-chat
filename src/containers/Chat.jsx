import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as messageActions from '../actions/messageActions';
import * as userActions from '../actions/userActions';
import ChatComponent from '../components/Chat';
import Countdown from '../components/Countdown';

class ChatContainer extends Component {
  handleSendMessage = (message) => {
    this.props.actions.sendMessage(message);
  }

  componentDidMount() {
    const nickname = window.prompt('Please enter a nickname!');
    this.props.actions.userLoggedOn({ nickname });
  }

  render() {
    const { messages, user, partner, countdown } = this.props;
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

        { countdown && 
          <Countdown settings={countdown.settings} />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  user: state.user,
  partner: state.partner,
  countdown: state.countdown
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({...userActions, ...messageActions}, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
