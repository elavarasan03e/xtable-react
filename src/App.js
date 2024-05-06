import './App.css'
import { useState,useEffect } from 'react';
function App(){
  const [tableData,setTableData]=useState([]);
  useEffect(()=>{
    setTableData([
      { date: "2022-09-01", views: 100, article: "Article 1" },
      { date: "2023-09-01", views: 100, article: "Article 1" },
      { date: "2023-09-02", views: 150, article: "Article 2" },
      { date: "2023-09-02", views: 120, article: "Article 3" },
      { date: "2020-09-03", views: 200, article: "Article 4" }
  ])
  },[])
  const sortByDate=()=>{
    const sortedByViews = [...tableData].sort((a,b)=>new Date(a.date)-new Date(b.date));
    setTableData(sortedByViews);
  }
  const sortByViews=()=>{
    const sortedByViews = [...tableData].sort((a,b)=>b.views-a.views);
    setTableData(sortedByViews);
  }
  
  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data,index)=>{
              return (<tr key={index}>
                <td>{data.date}</td>
                <td>{data.views}</td>
                <td>{data.article}</td>
              </tr>
          )})}
          
        </tbody>
      </table>
    </div>
  )
}

export default App;