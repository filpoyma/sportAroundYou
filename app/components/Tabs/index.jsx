import PropTypes from 'prop-types';
import React, { Component } from 'react';

import injectStyles from '@/utils/injectStyles';

import Tab from './elements/Tab';
import styles from './styles';

class Tabs extends Component {
  state = {
    currentTab: 0
  };

  handleTabClick = id => () => {
    const { onChange } = this.props;
    const { currentTab } = this.state;

    if (currentTab === id) {
      return;
    }

    this.setState(state => ({
      ...state,
      currentTab: id
    }));

    if (typeof onChange === 'function') {
      onChange(id);
    }
  };

  render() {
    const { className, data } = this.props;
    const { currentTab } = this.state;

    return (
      <div className={className}>
        {data.map(({ id, title }, index) => (
          <Tab
            current={id === currentTab || index === currentTab}
            key={`tab_${id}}`}
            onClick={this.handleTabClick(id || index)}
            title={title}
          />
        ))}
      </div>
    );
  }
}

Tabs.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
    })
  ),
  onChange: PropTypes.func
};

Tabs.defaultProps = {
  data: [],
  onChange: undefined
};

Tabs.displayName = 'TabsComponent';

export default injectStyles(Tabs, styles);
