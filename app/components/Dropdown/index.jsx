import Downshift from 'downshift';
import { isFunction } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import injectStyles from '@/utils/injectStyles';

import styles from './styles';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    if (props.initialObject) {
      this.initialSelectedItem = props.initialObject;
    } else if (props.items?.[props.initialIndex]) {
      this.initialSelectedItem = props.items?.[props.initialIndex];
    }

    this.state = {
      isOpen: false
    };
  }

  handleChangeItem = item => {
    const { onChange } = this.props;

    if (isFunction(onChange)) {
      onChange(item.value ?? item);
    }

    this.handleCloseDropdown();
  };

  handleCloseDropdown = () => {
    this.setState(state => ({
      ...state,
      isOpen: false
    }));
  };

  toggleDropdown = () => {
    this.setState(state => ({
      ...state,
      isOpen: !state.isOpen
    }));
  };

  render() {
    const { className, items, label } = this.props;
    const { isOpen: dropdownIsOpen } = this.state;

    return (
      <Downshift
        onChange={this.handleChangeItem}
        itemToString={item => item?.label ?? '-'}
        isOpen={dropdownIsOpen}
        onOuterClick={this.handleCloseDropdown}
        initialSelectedItem={this.initialSelectedItem}
      >
        {({ getInputProps, getItemProps, getLabelProps, getMenuProps, isOpen }) => (
          <div className={className}>
            {label && <label {...getLabelProps()}>{label}</label>}
            <div>
              <input
                {...getInputProps({
                  readOnly: true,
                  onClick: this.toggleDropdown
                })}
              />
              {isOpen && (
                <ul {...getMenuProps()}>
                  {items.map((item, index) => (
                    <li
                      {...getItemProps({
                        key: `dropdown_item_${item?.id}`,
                        index,
                        item
                      })}
                    >
                      {item?.label ?? '-'}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </Downshift>
    );
  }
}

Dropdown.propTypes = {
  className: PropTypes.string.isRequired,
  initialIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  initialObject: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  ),
  label: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.string
};

Dropdown.defaultProps = {
  initialIndex: undefined,
  initialObject: undefined,
  items: [],
  label: undefined,
  onChange: undefined,
  width: '370px'
};

Dropdown.displayName = 'DropdownComponent';

export default injectStyles(Dropdown, styles);
