import React from "react";
import { Chart } from "react-google-charts";

export class BarChart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div style={{ display: 'block'}}>
                <Chart
                    style={{margin: "0 auto"}}
                    width={this.props.width}
                    height={300}
                    chartType={this.props.chartStyle}
                    loader={<div>Loading Chart</div>}
                    data={this.props.data}
                    options={{
                        title: this.props.options.title,
                        chartArea: { width: '50%' },
                        colors: [this.props.options.axis.h.color, this.props.options.axis.v.color],
                        hAxis: {
                            title: this.props.options.axis.h.title,
                            minValue: 0,
                        },
                        vAxis: {
                            title: this.props.options.axis.v.title,
                        },
                    }}
                    legendToggle
                />
            </div>
        )
    }
}

BarChart.defaultProps = {
    options: {
        title: "Example Chart",
        lables: ["date", "Temperature", "Humidity"],
        axis: {
            h: {
                color: "#b0120a",
                title: "Example Horizontal"
            },
            v: {
                color: "#ffab91",
                title: "Example Vertical"
            }
        }

    }

}