import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { OTHER } from '@/utils/styleConstants';

import CategoryTitle from './CategoryTitle';
import TestTitle from './TestTitle';

class TestCategory extends Component {
  state = {
    expanded: this.props.current
  };

  toggleCategory = () => {
    this.setState(state => ({
      ...state,
      expanded: !state.expanded
    }));
  };

  handleSelectTitle = key => {
    const { onSelect } = this.props;

    if (!onSelect) {
      return undefined;
    }

    return () => onSelect(key);
  };

  render() {
    const { className, current: currentCategory, title, tests } = this.props;
    const { expanded } = this.state;

    return (
      <div className={className}>
        <CategoryTitle
          current={currentCategory}
          expanded={expanded}
          onClick={this.toggleCategory}
          onKeyPress={this.toggleCategory}
          role="button"
          tabIndex={0}
        >
          {title}
        </CategoryTitle>
        {expanded &&
          tests.map(({ current, key, title: testTitle, url }) => (
            <TestTitle
              current={current}
              key={`test_title_${key}`}
              onClick={this.handleSelectTitle(key)}
              url={url}
            >
              {testTitle}
            </TestTitle>
          ))}
      </div>
    );
  }
}

TestCategory.propTypes = {
  className: PropTypes.string.isRequired,
  current: PropTypes.bool,
  title: PropTypes.string.isRequired,
  tests: PropTypes.arrayOf(
    PropTypes.shape({
      current: PropTypes.bool.isRequired,
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string
    })
  ).isRequired,
  onSelect: PropTypes.func
};

TestCategory.defaultProps = {
  current: false,
  onSelect: undefined
};

TestCategory.displayName = 'TestSelectorTestCategoryElement';

const styles = css`
  ${OTHER.BORDER.TOP};

  &:first-child {
    border: none;
  }
`;

export default injectStyles(TestCategory, styles);
