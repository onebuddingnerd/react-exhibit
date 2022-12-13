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
import { HistogramChart } from "@carbon/charts-react";

import Plot from 'react-plotly.js';
import { Button } from '@mui/material';

import ClassComponent from './WrittenReviews.js';

// import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

// import {AxisModel, HistogramSeries, Category, ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective} from'@syncfusion/ej2-react-charts';

// import ClassComponent from './WrittenReviews.js';
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

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
  
const rawData = Array(100).fill().map(Math.random);

export default class RenderItem extends React.Component {

    state = {
        dataComments: [
          {
            userId: '01a',
            comId: '012',
            fullName: 'Person 1',
            avatarUrl: 'https://ui-avatars.com/api/name=Riya&background=random',
            // userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
            text: 'Credit to RiyaNegi',
            replies: []
          },
          {
            userId: '02b',
            comId: '017',
            fullName: 'Person 2',
            // userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
            text: 'Really, there needs to be upvoting on here!',
            avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
            replies: []
          },
          {
            userId: '027',
            comId: '018',
            fullName: 'Person 3',
            // userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
            text: 'Hey, this has no correspondence to the word cloud!?',
            avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
            replies: [
                {
                    userId: '028',
                    comId: '019',
                    fullName: 'Person 4',
                    // userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
                    text: 'I think the developer said he was not good enough yet to fully connect the back end API. Hopefully he shores up his competence soon.',
                    avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
                    replies: []
                },
                {
                    userId: '030',
                    comId: '020',
                    fullName: 'Person 5',
                    // userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
                    text: 'Perhaps person 4 is being a tad harsh? He did say the project was just getting started. Plus, he managed a fitting of this section into a scroller view!',
                    avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
                    replies: []
                  },
            ]
          },
        ],
        histogramMode : "Total"
      }
    
      onSubmitAction = (data:any) => {
        console.log('this comment was posted!',data)
      }
    
      customNoComment = () => <div className='no-com'>No comments wohoooo!</div>

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

    refreshHoursMode = (newMode) => {
        this.setState({histogramMode: newMode})
    };

    render () {

        var histogramX = this.state.histogramMode === "Total" ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
                    : this.state.histogramMode === "OH" ? [1, 2, 3, 4, 5, 6, 7, 8] 
                    : this.state.histogramMode === "Lecture" ? [1, 2, 3, 4, 5, 6, 7] : 
                    [1, 2, 3, 4, 5, 6, 7, 8, 9] 

        var histogramY = this.state.histogramMode === "Total" ? [0, 2, 3, 0, 5, 6, 7, 1, 2, 1]
                    : this.state.histogramMode === "OH" ? [2, 5, 3, 2, 5, 3, 2, 5]
                    : this.state.histogramMode === "Lecture" ? [3, 2, 6, 1, 3, 6, 7] : 
                    [2, 5, 3, 2, 5, 3, 2, 5, 3]

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
                    title="Course Ratings by Criterion"
                    dataSource={grossProductData}
                    onPointClick={this.onPointClick}
                >
                    <CommonSeriesSettings  
                    argumentField="Criterion"
                    type="bar"
                    hoverMode="allArgumentPoints"
                    selectionMode="allArgumentPoints"
                    >
                    <Label visible={true}>
                        <Format type="fixedPoint" precision={0} />
                    </Label>
                    </CommonSeriesSettings>
                    <Series hoverMode="allSeriesPoints"
                    valueField="Course_15122"
                    name="15122"
                    />
                    <Series
                    valueField="Course_15150"
                    name="15122"
                    />
                    <Series
                    valueField="Course_15210"
                    name="15210"
                    />
                    <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
                    <Export enabled={true} />
                </Chart>
                : 
                <p></p>
            }
            { isHoursMode ?
                <div>
                <Plot
                    data={[
                    
                    {type: 'bar', x: histogramX, y: histogramY},
                    ]}
                    layout={ {autosize: true, title: 'Hour Spent Per Week'} }
                    useResizeHandler={true}
                    style={{width: "100%", height: "100%"}}
                />
                <center>
                <Button onClick={ () => this.refreshHoursMode("Total") }>Total</Button> | 
                <Button onClick={ () => this.refreshHoursMode("OH") }>OH</Button>
                <Button onClick={ () => this.refreshHoursMode("Misc") }>Rec./Misc.</Button>
                <Button onClick={ () => this.refreshHoursMode("Lecture") }>Lecture</Button>
                </center>
                </div>
                :
                <p></p>
            }
            { isWrittenReviewsMode ?
                <CommentSection
                advancedInput={true}
                currentUser={{
                  currentUserId: '01a',
                  currentUserImg:
                    'https://ui-avatars.com/api/name=Riya&background=random',
                  currentUserProfile:
                    'https://www.linkedin.com/in/riya-negi-8879631a9/',
                  currentUserFullName: 'Riya Negi'
                }}
                commentData={this.state.dataComments}
                onSubmitAction={(data:any) => this.onSubmitAction(data)}
                customNoComment={() => this.customNoComment()}
                logIn={{
                  loginLink: 'http://localhost:3001/',
                  signupLink: 'http://localhost:3001/'
                }}
              />
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