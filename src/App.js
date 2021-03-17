import { useState } from 'react';
import './App.css';
import Chart from './components/Chart';
import Team from './components/Team';
import players from './players.json'

function App() {
  const [chart, setChart] = useState([])
  const [title, setTitle] = useState('')

  // Organize chart data object  
  const setChartData = (dataArray, chartId, chartType) => {
    let decisionMakingData = [];
    for (let i = 1; i < dataArray.length + 1; i++) {
      let dataPoint = {
        x: "Match " + i,
        y: dataArray[i - 1],
      };
      decisionMakingData.push(dataPoint);
    }
    let player = {
      id: chartId,
      data: decisionMakingData,
      type: chartType,
    }
    if (chart.length > 0 && chart[0].type !== chartType) {
      setChart([player])
      setTitle(chartType)
    } else {
      setChart([...chart, player])
      setTitle(chartType)
    }
  }

  // Remove player object from graph
  const removeGraph = (chartId) => {
    let graphArray = chart;
    for (let i = 0; i < graphArray.length; i++) {
      if (graphArray[i].id === chartId) {
        graphArray.splice(i, 1)
      }
    }
    setChart([...graphArray]);
  }
  return (
    <div className="App">
      <Team players={players} setChartData={setChartData} removeGraph={removeGraph} title={title} />
      <Chart chart={chart} title={title} />
    </div>
  );
}

export default App;
