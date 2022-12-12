import {
    Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export,
  } from 'devextreme-react/chart';
import React from 'react';
  import { grossProductData } from './data.js';
// import { StackedBarChart } from '@carbon/charts-react';
// import '@carbon/charts/styles.css';

import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

// import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const words = [
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
]

const divCss = `
div.scroll {
  background-color: 0;
  height: 500px;
  overflow: auto;
  text-align: justify;
  padding: 20px;
}
`

export default class RenderItem extends React.Component {

    constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e) {
		if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}

    render () {

        const hoursOptions = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Evening Sales in a Restaurant"
			},
			axisX: {
				valueFormatString: "DDD"
			},
			axisY: {
				prefix: "$"
			},
			toolTip: {
				shared: true
			},
			legend:{
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "stackedBar",
				name: "Meals",
				showInLegend: "true",
				xValueFormatString: "DD, MMM",
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2018, 5, 25), y: 56 },
					{ x: new Date(2018, 5, 26), y: 45 },
					{ x: new Date(2018, 5, 27), y: 71 },
					{ x: new Date(2018, 5, 28), y: 41 },
					{ x: new Date(2018, 5, 29), y: 60 },
					{ x: new Date(2018, 5, 30), y: 75 },
					{ x: new Date(2018, 6, 1), y: 98 }
				]
			},
			{
				type: "stackedBar",
				name: "Snacks",
				showInLegend: "true",
				xValueFormatString: "DD, MMM",
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2018, 5, 25), y: 86 },
					{ x: new Date(2018, 5, 26), y: 95 },
					{ x: new Date(2018, 5, 27), y: 71 },
					{ x: new Date(2018, 5, 28), y: 58 },
					{ x: new Date(2018, 5, 29), y: 60 },
					{ x: new Date(2018, 5, 30), y: 65 },
					{ x: new Date(2018, 6, 1), y: 89 }
				]
			},
			{
				type: "stackedBar",
				name: "Drinks",
				showInLegend: "true",
				xValueFormatString: "DD, MMM",
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2018, 5, 25), y: 48 },
					{ x: new Date(2018, 5, 26), y: 45 },
					{ x: new Date(2018, 5, 27), y: 41 },
					{ x: new Date(2018, 5, 28), y: 55 },
					{ x: new Date(2018, 5, 29), y: 80 },
					{ x: new Date(2018, 5, 30), y: 85 },
					{ x: new Date(2018, 6, 1), y: 83 }
				]
			},
			{
				type: "stackedBar",
				name: "Dessert",
				showInLegend: "true",
				xValueFormatString: "DD, MMM",
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2018, 5, 25), y: 61 },
					{ x: new Date(2018, 5, 26), y: 55 },
					{ x: new Date(2018, 5, 27), y: 61 },
					{ x: new Date(2018, 5, 28), y: 75 },
					{ x: new Date(2018, 5, 29), y: 80 },
					{ x: new Date(2018, 5, 30), y: 85 },
					{ x: new Date(2018, 6, 1), y: 105 }
				]
			},
			{
				type: "stackedBar",
				name: "Takeaway",
				showInLegend: "true",
				xValueFormatString: "DD, MMM",
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2018, 5, 25), y: 52 },
					{ x: new Date(2018, 5, 26), y: 55 },
					{ x: new Date(2018, 5, 27), y: 20 },
					{ x: new Date(2018, 5, 28), y: 35 },
					{ x: new Date(2018, 5, 29), y: 30 },
					{ x: new Date(2018, 5, 30), y: 45 },
					{ x: new Date(2018, 6, 1), y: 25 }
				]
			}]
		}

        const wordData = [
            { text: 'Hey', value: 10 },
            { text: 'lol', value: 2 },
            { text: 'first impression', value: 8 },
            { text: 'very cool', value: 10 },
            { text: 'oops', value: 3 },
            { text: 'ciao', value: 10 },
            { text: 'gibberish', value: 11 },
            { text: 'rubbish', value: 7 },
            { text: 'doohickey', value: 9 },
            { text: 'nonsense', value: 4 },
        ];
        const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

        const greeter = this.props.valnav;
        const isChartMode = greeter === "Criteria Plotter";
        const isWordCloudMode = greeter === "Word Cloud";
        const isHoursMode = greeter === "Time Spent";
        const isWrittenReviewsMode = greeter === "Written Reviews";
        return (
            <div>
            <h1> <center> {greeter} </center> </h1>
            <div class="scroll">
            <style>{divCss}</style>
            {
                isWordCloudMode ? 
                <WordCloud
                    data={wordData}
                    width={200}
                    height={200}
                    font="Times"
                    fontStyle="italic"
                    fontWeight="bold"
                    fontSize={(word) => Math.log2(word.value) * 3}
                    spiral="rectangular"
                    rotate={(word) => word.value % 360}
                    padding={5}
                    random={Math.random}
                    fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
                    onWordClick={(event, d) => {
                    console.log(`onWordClick: ${d.text}`);
                    }}
                    onWordMouseOver={(event, d) => {
                    console.log(`onWordMouseOver: ${d.text}`);
                    }}
                    onWordMouseOut={(event, d) => {
                    console.log(`onWordMouseOut: ${d.text}`);
                    }}
                /> : <p> </p>
            }
            { isChartMode ?
                <Chart id="chart" onLegendClick={this.legendClickHandler}
                    title="Gross State Product within the Great Lakes Region"
                    dataSource={grossProductData}
                    onPointClick={this.onPointClick}
                >
                    <CommonSeriesSettings  
                    argumentField="state"
                    type="bar"
                    hoverMode="allArgumentPoints"
                    selectionMode="allArgumentPoints"
                    >
                    <Label visible={true}>
                        <Format type="fixedPoint" precision={0} />
                    </Label>
                    </CommonSeriesSettings>
                    <Series hoverMode="allSeriesPoints"
                    argumentField="state"
                    valueField="year2021"
                    name="2021"
                    />
                    <Series
                    valueField="year2020"
                    name="2017"
                    />
                    <Series
                    valueField="year2019"
                    name="2019"
                    />
                    <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
                    <Export enabled={true} />
                </Chart>
                : 
                <p></p>
            }
            { isHoursMode ?
                <CanvasJSChart options = {hoursOptions}
				    onRef={ref => this.chart = ref}
			    />
                :
                <p></p>
            }
            { isWrittenReviewsMode ?
                <p>Written Reviews</p>
                :
                <p></p>
            }
            </div>
            </div>
        )
    }

    onPointClick(e) {
        e.target.select();
    }

    legendClickHandler(e) {
        const series = e.target;
        if (series.isVisible()) {
            series.hide();
        } else {
            series.show();
        }
    }
}