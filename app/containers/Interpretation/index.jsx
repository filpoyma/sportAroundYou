import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import Button from '@/components/Button';
import TextArea from '@/components/TextArea';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';
import injectStyles from '@/utils/injectStyles';

import { saveInterpretation } from './actions';
import { STATE_KEY } from './constants';
import logic from './logic';
import reducer from './reducer';
import { makeSelectInterpretationComments } from './selectors';
import styles from './styles';

class Interpretation extends PureComponent {
  state = { interpretation: this.props.comments };

  componentDidUpdate(prevProps) {
    const { comments } = this.props;
    if (prevProps.comments !== comments) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ interpretation: comments });
    }
  }

  handleSaveInterpretation = () => {
    const { dispatch } = this.props;
    const { interpretation } = this.state;
    dispatch(saveInterpretation(interpretation));
  };

  setInterpretatiton = event => this.setState({ interpretation: event.target.value });

  render() {
    const { className } = this.props;
    const { interpretation } = this.state;

    return (
      <Box className={className} title="Интерпретация">
        <TextArea
          value={interpretation}
          onChange={this.setInterpretatiton}
          placeholder="Введите текст"
        />
        <Button onClick={this.handleSaveInterpretation}>Сохранить</Button>
      </Box>
    );
  }
}

Interpretation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  comments: PropTypes.string
};

Interpretation.defaultProps = { comments: '' };

Interpretation.displayName = 'InterpretationContainer';

const mapStateToProps = createStructuredSelector({
  comments: makeSelectInterpretationComments()
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic(logic);
const withReducer = injectReducer({ key: STATE_KEY.MAIN, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(injectStyles(Interpretation, styles));
