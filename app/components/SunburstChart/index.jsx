import { ResponsiveSunburst } from '@nivo/sunburst';
import PropTypes from 'prop-types';
import React from 'react';

import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

import { SUNBURST_CHART_SIZE } from './constants';
import ParameterLabel from './elements/ParameterLabel';
import WeightLabel from './elements/WeightLabel';
import styles from './styles';

const SunburstChart = ({ className, data, title }) => {
  if (!data) {
    return null;
  }
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div>
        <ResponsiveSunburst
          isInteractive={false}
          data={data}
          height={SUNBURST_CHART_SIZE}
          width={SUNBURST_CHART_SIZE}
          identity="name"
          value="loc"
          cornerRadius={0}
          borderWidth={3}
          borderColor="white"
          colors={[COLORS.SUNBURST.LAST, COLORS.SUNBURST.FIRST]}
          childColor={COLORS.SUNBURST.CHILD}
          animate={false}
          motionStiffness={4}
          motionDamping={15}
        />
      </div>
      <WeightLabel label="ВЕС" value={data?.weight} units="кг" />
      <div>
        <ParameterLabel
          label="МЫШЕЧНАЯ"
          value={data?.children?.[1]?.children?.[0]?.value}
          percent={data?.children?.[1]?.children?.[0]?.percent}
          color={COLORS.SUNBURST.CHILD}
        />
        <ParameterLabel
          label="ЖИРОВАЯ"
          value={data?.children?.[0]?.value}
          percent={data?.children?.[0]?.percent}
          color={COLORS.SUNBURST.LAST}
        />
        <ParameterLabel
          label="БЕЗЖИРОВАЯ"
          value={data?.children?.[1]?.value}
          percent={data?.children?.[1]?.percent}
          color={COLORS.SUNBURST.FIRST}
        />
      </div>
    </div>
  );
};

SunburstChart.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.object,
  title: PropTypes.string
};

SunburstChart.defaultProps = {
  data: null,
  title: 'Соотношение Мышцы - Жир'
};

SunburstChart.displayName = 'SunburstChartComponent';

SunburstChart.whyDidYouRender = true;

export default injectStyles(hashMemo(SunburstChart), styles);
