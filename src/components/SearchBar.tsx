import React, {useState, useContext} from 'react';
import './SearchBar.scss';
import { Context } from '../contexts/JobContext';
import { Arrow } from './Icons/Arrow';

const SearchBar = () => {
    const [jobTitle, setJobTitle] = useState<string>('');
    const JobContext = useContext(Context)
    const searchHandler = (event: any) => {
        JobContext?.searchJobTitle(jobTitle);
        event.preventDefault();
    }
    return (
        <form onSubmit={searchHandler} className={'search-bar'}>
            <input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder={'Enter job title here...'}/>
            <button type='submit' value='Submit' ><Arrow/></button>
        </form>
    )
}

export default SearchBar;