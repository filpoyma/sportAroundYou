import PropTypes from 'prop-types';
import React, { memo, PureComponent } from 'react';
import { css } from 'styled-components';

import LinkButton from '@/components/LinkButton';
import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

class PersonInformation extends PureComponent {
  state = {
    showInformation: true
  };

  toggleInformationVisibility = () => {
    this.setState(state => ({
      ...state,
      showInformation: !state.showInformation
    }));
  };

  render() {
    const { email, organization, phone, team, ...rest } = this.props;
    const { showInformation } = this.state;

    return (
      <div {...rest}>
        <LinkButton onClick={this.toggleInformationVisibility}>
          {showInformation ? 'cкрыть подробную информацию' : 'показать подробную информацию'}
        </LinkButton>
        {showInformation && (
          <div>
            {team && (
              <>
                <p>Команда</p>
                <p>{team}</p>
              </>
            )}
            {organization && (
              <>
                <p>Организация</p>
                <p>{organization}</p>
              </>
            )}
            {phone && (
              <>
                <p>Телефон</p>
                <p href={`tel:${phone}`}>{phone}</p>
              </>
            )}
            {email && (
              <>
                <p>E-mail</p>
                <a href={`mailto:${email}`}>{email}</a>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

PersonInformation.propTypes = {
  email: PropTypes.string,
  organization: PropTypes.string,
  phone: PropTypes.string,
  team: PropTypes.string
};

PersonInformation.defaultProps = {
  email: null,
  organization: null,
  phone: null,
  team: null
};

PersonInformation.displayName = 'PersonCardPersonInformationElement';

const styles = css`
  & > div {
    display: grid;
    grid-template-columns: 80px auto;
    grid-gap: ${SPACE_SIZE.S} ${SPACE_SIZE.XS};
    margin-top: ${SPACE_SIZE.M};
  }

  & > ${LinkButton} {
    display: block;
    width: 100%;
    font: 12px/14px var(--ff);
  }

  & > div > p {
    margin: 0;
  }

  & > div > a {
    text-decoration: none;

    &:hover {
      color: ${COLORS.TEXT.HOVER};
    }
  }

  & > div > *:nth-child(2n + 1) {
    color: ${COLORS.TEXT.PRIMARY_LIGHT};
    font: 12px/14px var(--ff);
  }

  & > div > *:nth-child(2n) {
    color: ${COLORS.TEXT.PRIMARY};
    font: 600 12px/14px var(--ff);
  }
`;

export default memo(injectStyles(PersonInformation, styles));
