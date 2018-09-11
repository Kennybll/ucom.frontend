import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class Passphrase extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checkedWords: [],
    };
  }

  validate() {
    const verify = words => words.every(i => this.props.testWords.indexOf(i) > -1);

    if (this.state.checkedWords.length === 4 && verify(this.state.checkedWords)) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <div className="passphrase">
        {this.props.testWords.map((word) => {
          const bindId = uuid(1000);

          return (
            <span className="passphrase__word" key={word}>
              <input
                id={bindId}
                className="passphrase__checkbox"
                name="passphrase"
                type="checkbox"
                value={word}
                checked={this.state.checkedWords.indexOf(word) > -1}
                onChange={(e) => {
                  const { checked } = e.target;

                  this.setState((prevState) => {
                    const index = this.state.checkedWords.indexOf(word);
                    const checkedWords = [].concat(prevState.checkedWords);

                    if (index === -1 && checked) {
                      checkedWords.push(word);
                    } else {
                      checkedWords.splice(index, 1);
                    }

                    return { checkedWords };
                  }, () => {
                    if (typeof this.props.onChange === 'function') {
                      this.props.onChange(this.validate());
                    }
                  });
                }}
              />

              <label htmlFor={bindId} className="passphrase__label">{word}</label>
            </span>
          );
        })}
      </div>
    );
  }
}

Passphrase.propTypes = {
  testWords: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
};

export default Passphrase;