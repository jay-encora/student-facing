import React from 'react';
import Container from '@mui/material/Container';
import { MeetingWrapper } from './components/MeetingWrapper';
import './App.css';

function App() {
  return (
    <Container fixed>
      <div className="App">
        <MeetingWrapper />
      </div>
    </Container>
  );
}

export default App;
