import React, { useContext } from 'react';
import './SearchFilterDisplay.scss';
import { Context } from '../contexts/JobContext';

// @TODO This would've been hooked up to the job context and pushed up filters to each category as they were selcted
const SearchFilterDisplay = () => {
    const JobContext = useContext(Context)
    return (
        <section className='search-filter-display'></section>
    )
}

export default SearchFilterDisplay;