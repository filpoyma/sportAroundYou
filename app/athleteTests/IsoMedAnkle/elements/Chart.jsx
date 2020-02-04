import { ResponsiveLine } from '@nivo/line';
import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import LineChartTooltip from '@/components/LineChart/elements/LineChartTooltip';
import lineChartStyles from '@/components/LineChart/styles';
import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { COLORS, NIVO_CHART_THEME, SPACE_SIZE } from '@/utils/styleConstants';

/* eslint-disable react/prop-types */
const LineLayer = ({ series, lineGenerator, xScale, yScale }) =>
  series.map(({ id, data, color }) => (
    <path
      key={id}
      d={lineGenerator(
        data.map(d => ({
          x: xScale(d.data.x),
          y: yScale(d.data.y)
        }))
      )}
      fill="none"
      stroke={color}
      strokeWidth="2"
    />
  ));

const Tooltip = ({ point: { data } }) => (
  <LineChartTooltip>
    {data.yFormatted}
    <br />
    {data.xFormatted}
  </LineChartTooltip>
);
/* eslint-enable react/prop-types */

const Chart = ({ className, data, legend, title, units }) => (
  <div className={className}>
    <h3>{title}</h3>
    <ResponsiveLine
      curve="monotoneX"
      data={data}
      margin={{ top: 20, right: 10, bottom: 50, left: 55 }}
      xMin={0}
      xScale={{
        type: 'linear',
        stacked: false,
        min: '0',
        max: '100'
      }}
      xFormat={value => `${value}°`}
      yFormat={value => `${value} ${units}`}
      yScale={{
        type: 'linear',
        stacked: false
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 8,
        tickRotation: 0,
        legend: 'Угол, градусы',
        legendOffset: 40,
        legendPosition: 'middle'
      }}
      axisLeft={{
        legend: `${legend}, ${units}`,
        legendOffset: -43,
        legendPosition: 'middle',
        orient: 'left',
        tickSize: 5
      }}
      colors={[COLORS.CHARTS.BAR.GRAY, COLORS.CHARTS.BAR.BLUE]}
      pointSize={8}
      pointColor="white"
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      useMesh
      enableSlices={false}
      theme={NIVO_CHART_THEME}
      animate={false}
      tooltip={Tooltip}
      crosshairType="bottom"
      layers={['grid', 'crosshair', 'slices', 'axes', LineLayer, 'mesh']}
    />
    <div>
      <span>Правая сторона</span>
      <span>Левая сторона</span>
    </div>
  </div>
);

Chart.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.array,
  legend: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired
};

Chart.defaultProps = {
  data: []
};

Chart.displayName = 'IsoMedAnkleTestChartElement';

Chart.whyDidYouRender = true;

const styles = css`
  ${lineChartStyles}
  margin-bottom: 60px;

  &:last-child {
    padding-bottom: ${SPACE_SIZE.S};
  }

  & > h3 {
    color: ${COLORS.TEXT.PRIMARY};
    font: 400 15px/20px var(--ff);
  }

  & > div:last-child {
    margin: ${SPACE_SIZE.XS} 0;
    text-align: center;

    span {
      position: relative;
      display: inline-block;
      padding-left: 24px;
      color: ${COLORS.TEXT.PRIMARY};
      font: 14px/16px var(--ff);

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 14px;
        height: 4px;
        margin: auto;
      }

      &:nth-child(1):before {
        background: ${COLORS.CHARTS.BAR.GRAY};
      }

      &:nth-child(2):before {
        background: ${COLORS.CHARTS.BAR.BLUE};
      }
    }

    span + span {
      margin-left: 50px;
    }
  }
`;

export default injectStyles(hashMemo(Chart), styles);
