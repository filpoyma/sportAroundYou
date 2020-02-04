import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Avatar from '@/components/Avatar';
import Box from '@/components/Box';
import {
  makeSelectOrganization,
  makeSelectPerson,
  makeSelectSport
} from '@/pages/TestPage/selectors';
import injectStyles from '@/utils/injectStyles';

import PersonAttributes from './elements/PersonAttributes';
import PersonInformation from './elements/PersonInformation';
import PersonTitle from './elements/PersonTitle';
import styles from './styles';

class PersonCard extends PureComponent {
  render() {
    const { className, organization, person, sport } = this.props;

    return (
      <Box className={className}>
        <Avatar url={person.avatarUrl} />
        <PersonTitle name={person.name} sportType={sport?.name || '-'} />
        <PersonAttributes age={person.age} height={person.height} weight={person.weight} />
        <PersonInformation
          team="-"
          organization={organization?.name}
          phone={person?.phone}
          email={person?.email}
        />
      </Box>
    );
  }
}

PersonCard.propTypes = {
  className: PropTypes.string.isRequired,
  organization: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  person: PropTypes.shape({
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  sport: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

PersonCard.defaultProps = {};

PersonCard.displayName = 'PersonCardContainerElement';

const mapStateToProps = createStructuredSelector({
  organization: makeSelectOrganization(),
  person: makeSelectPerson(),
  sport: makeSelectSport()
});

const withConnect = connect(mapStateToProps);

export default withConnect(injectStyles(PersonCard, styles));
