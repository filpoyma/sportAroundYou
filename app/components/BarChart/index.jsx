import Chart from 'chart.js';
import { isEqual, round } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

import styles from './styles';

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.barChartRef = React.createRef();
    this.chartInstance = undefined;
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.values, this.props.values)) {
      this.chartInstance.destroy();
      this.renderChart();
    }
  }

  componentWillUnmount() {
    this.chartInstance.destroy();
  }

  shouldComponentUpdate(nextProps) {
    const { height, width, values } = this.props;

    return (
      !isEqual(values, nextProps.values) || width !== nextProps.width || height !== nextProps.height
    );
  }

  getMiddle = () => {
    const {
      values: { min, max }
    } = this.props;

    return round((max + min) / 2, 2);
  };

  getMinMax = () => {
    const {
      values: { min, max }
    } = this.props;

    return {
      min: round(min - ((max - min) * 33) / 17, 2),
      max: round(max + ((max - min) * 50) / 17, 2)
    };
  };

  getTicks = () => {
    const {
      values: { min, max }
    } = this.props;

    return [min, this.getMiddle(), max];
  };

  getDatasets = () => {
    const {
      values: { min, max, value }
    } = this.props;

    const middle = this.getMiddle();
    const mainProps = {
      backgroundColor: '#4D4F4F',
      borderWidth: 1,
      borderColor: 'white'
    };
    const middleProps = {
      ...mainProps,
      backgroundColor: '#979797'
    };

    const datasets = [];

    const { min: axisMin } = this.getMinMax();

    // Fill an empty space before the zero point
    if (axisMin < 0 && value > 0) {
      datasets.push({
        data: [axisMin],
        ...mainProps
      });
    }

    if (value <= min) {
      datasets.push({
        data: [value],
        ...mainProps
      });
    }

    if (value > min && value <= max) {
      datasets.push({
        data: [min],
        ...mainProps
      });

      if (value <= middle) {
        datasets.push({
          data: [value - min],
          ...middleProps
        });
      } else {
        datasets.push(
          {
            data: [round(middle - min, 2)],
            ...middleProps
          },
          {
            data: [round(value - middle, 2)],
            ...middleProps
          }
        );
      }
    }

    if (value > max) {
      datasets.push(
        {
          data: [min],
          ...mainProps
        },
        {
          data: [round(middle - min, 2)],
          ...middleProps
        },
        {
          data: [round(max - middle, 2)],
          ...middleProps
        },
        {
          data: [round(value - max, 2)],
          ...mainProps
        }
      );
    }

    return datasets;
  };

  renderChart = () => {
    const {
      values: { value: currentValue }
    } = this.props;
    const datasets = this.getDatasets();
    const node = this.barChartRef.current;
    const ticks = this.getTicks();

    this.chartInstance = new Chart(node, {
      type: 'horizontalBar',
      data: {
        datasets
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              // @see https://www.chartjs.org/docs/latest/axes/styling.html#tick-configuration
              ticks: {
                autoSkip: false,
                callback(value) {
                  if (!ticks.includes(value)) {
                    return undefined;
                  }

                  return value;
                },
                fontColor: COLORS.CHARTS.TICK,
                fontFamily: 'Open Sans',
                fontSize: 10,
                maxRotation: 0,
                stepSize: 0.01,
                ...this.getMinMax()
              }
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        },
        title: {
          display: true,
          position: 'right',
          text: round(currentValue, 2),
          fontSize: 17,
          fontFamily: 'Roboto Condensed',
          fontColor: '#4D4F4F',
          fontStyle: 'bold'
        },
        tooltips: {
          enabled: false
        }
      }
    });
  };

  render() {
    const { className, height, width } = this.props;

    return (
      <div className={className}>
        <canvas ref={this.barChartRef} height={height} width={width} />
      </div>
    );
  }
}

BarChart.propTypes = {
  className: PropTypes.string.isRequired,
  height: PropTypes.number,
  values: PropTypes.shape({
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }).isRequired,
  width: PropTypes.number
};

BarChart.defaultProps = {
  height: 60,
  width: 426
};

BarChart.displayName = 'BarChartComponent';

// BarChart.whyDidYouRender = true;

export default injectStyles(BarChart, styles);
