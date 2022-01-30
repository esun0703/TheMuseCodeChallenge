import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';
import SearchFilterDisplay from './components/SearchFilterDisplay';
import SearchResultsDisplay from './components/SearchResultsDisplay';
import { JobSearchProvider } from './contexts/JobContext';

function App() {
  return (
    <JobSearchProvider>
      <section className="App">
        <div className='container'>
          <SearchBar/>
          <SearchFilterDisplay/>
          <SearchResultsDisplay/>
        </div>
        
      </section>
    </JobSearchProvider>
  );
}

export default App;
