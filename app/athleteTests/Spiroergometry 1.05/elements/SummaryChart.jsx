import { Axes } from '@nivo/axes';
import { ResponsiveLine } from '@nivo/line';
import { computeXYScalesForSeries } from '@nivo/scales';
import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import {
  SPIROERGOMETRY_CHART_COLORS,
  SPIROERGOMETRY_CHART_ID
} from '@/athleteTests/Spiroergometry/constants';
import LineChartTooltip from '@/components/LineChart/elements/LineChartTooltip';
import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { COLORS, NIVO_CHART_THEME, SPACE_SIZE } from '@/utils/styleConstants';

/* eslint-disable react/prop-types */
const LineLayer = ({ series, lineGenerator, xScale, yScale }) =>
  series
    .filter(({ id }) => id !== SPIROERGOMETRY_CHART_ID.LACTATE)
    .map(({ id, data, color }) => (
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

const GasAxis = ({ data, innerWidth, innerHeight }) => {
  const { xScale, yScale } = computeXYScalesForSeries(
    [data[1]],
    { type: 'point' },
    {
      type: 'linear',
      min: 0,
      max: data[1]?.yMax
    },
    innerWidth,
    innerHeight
  );

  return (
    <Axes
      key="custom_axis_gas"
      xScale={xScale}
      yScale={yScale}
      width={innerWidth}
      height={innerHeight}
      left={{
        legend: `V'O2, V'CO2, л/мин`,
        legendOffset: -35,
        legendPosition: 'middle',
        orient: 'left'
      }}
    />
  );
};

const Tooltip = ({ point: { data } }) => (
  <LineChartTooltip>
    {data?.title}: {data?.initialValue ?? data?.y} {data?.unit}
    <br />
    {data.xFormatted}
  </LineChartTooltip>
);
/* eslint-enable react/prop-types */

const SummaryChart = ({ className, data }) => (
  <div className={className}>
    <div>
      <ResponsiveLine
        curve="monotoneX"
        data={data}
        margin={{ right: 90, bottom: 50, left: 40 }}
        xScale={{
          type: 'time',
          format: '%M:%S',
          precision: 'second',
          useUTC: false
        }}
        yScale={{
          type: 'linear',
          stacked: false,
          min: data[0].yMin,
          max: data[0].yMax
        }}
        axisTop={null}
        axisRight={{
          legend: `ЧСС, уд/мин`,
          legendOffset: 35,
          legendPosition: 'middle',
          orient: 'left',
          tickSize: 5
        }}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 8,
          tickRotation: 0,
          legend: 'Время, мин',
          legendOffset: 40,
          legendPosition: 'middle',
          format: '%M',
          tickValues: 'every 1 minute'
        }}
        axisLeft={null}
        colors={d => d.color}
        layers={['grid', 'crosshair', 'slices', 'axes', GasAxis, LineLayer, 'mesh']}
        xFormat="time:%M:%S"
        useMesh
        enableSlices={false}
        theme={NIVO_CHART_THEME}
        animate={false}
        tooltip={Tooltip}
        crosshairType="bottom"
      />
    </div>
    <div>
      <span>ЧСС</span>
      <span>V&apos;O2</span>
      <span>V&apos;CO2</span>
    </div>
  </div>
);

SummaryChart.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.array
};

SummaryChart.defaultProps = {
  data: []
};

SummaryChart.displayName = 'SpiroergometryTestSummaryChartElement';

const styles = css`
  & > div:first-child {
    width: 584px;
    height: 390px;
    padding-bottom: ${SPACE_SIZE.M};
  }

  & > div:last-child {
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
        background: ${SPIROERGOMETRY_CHART_COLORS.HR};
      }

      &:nth-child(2):before {
        background: ${SPIROERGOMETRY_CHART_COLORS.VO2STPD};
      }

      &:nth-child(3):before {
        background: ${SPIROERGOMETRY_CHART_COLORS.CO2STPD};
      }

      &:nth-child(4):before {
        height: 14px;
        background: ${SPIROERGOMETRY_CHART_COLORS.LACTATE};
        border-radius: 100%;
      }
    }

    span + span {
      margin-left: 50px;
    }
  }
`;

SummaryChart.whyDidYouRender = true;

export default injectStyles(hashMemo(SummaryChart), styles);
