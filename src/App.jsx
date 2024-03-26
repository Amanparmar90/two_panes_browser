import React, { useState, useEffect } from 'react';
import './App.css';
import SplitPane from 'react-split-pane';

const App = () => {
  const [fileContent1, setFileContent1] = useState('');
  const [fileContent2, setFileContent2] = useState('');

  useEffect(() => {
    fetch('/data1.txt')
      .then(response => response.text())
      .then(data => setFileContent1(data))
      .catch(error => console.error('Error fetching data:', error));
 
    fetch('/data2.txt')
      .then(response => response.text())
      .then(data => setFileContent2(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div className="app">
      <SplitPane
        split="vertical" // Ensure it's vertical
        defaultSize="50%" // Set the default size to divide the screen in half
        minSize={200} // Set a minimum size for each pane
        maxSize={-200} // Set a maximum size for each pane
        primary="first" // Define which pane should be resized when dragging the split bar
      >
        <div className="file-pane1">{fileContent1}</div>
        <div className="file-pane2">{fileContent2}</div>
      </SplitPane>
    </div>
  );
};

export default App;
