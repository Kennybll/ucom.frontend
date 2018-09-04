import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bind } from 'decko';
import PropTypes from 'prop-types';
import Switcher from '../../components/Switcher';

import * as actions from '../../actions/settings';

const mapDispatch = dispatch =>
  bindActionCreators({
    setSettingsSecurityData: actions.setSettingsSecurityData,
    resetSettingsSecurity: actions.resetSettingsSecurity,
  }, dispatch);


const mapStateToProps = state => ({
  user: state.user,
  security: state.settings.security,
});

class SettingsSecurityPage extends PureComponent {
  componentDidMount() {

  }

  @bind
  handleCheckBoxToggle(checkValue, item) {
    return this.props.setSettingsSecurityData({ item, checkValue });
  }

  render() {
    const { autoLogin, twoFa } = this.props.security.data;
    return (
      <div className="settings">
        <div className="form">
          <div className="form__block">
            <div className="form__label">Auto-login</div>
            <div className="form__input">
              <Switcher
                onChange={checkValue => this.handleCheckBoxToggle(checkValue, 'autoLogin')}
                isChecked={autoLogin}
              />
            </div>
          </div>
          <div className="form__block">
            <div className="form__label">2FA</div>
            <div className="form__input">
              <Switcher
                onChange={checkValue => this.handleCheckBoxToggle(checkValue, 'twoFa')}
                isChecked={twoFa}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SettingsSecurityPage.propTypes = {
  setSettingsSecurityData: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatch)(SettingsSecurityPage);
