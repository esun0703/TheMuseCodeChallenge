import React, { useContext } from 'react';
import './SearchResultsDisplay.scss';
import { Context } from '../contexts/JobContext';

const SearchResultsDisplay = () => {
    const JobContext = useContext(Context)
    // @TODO update key when api hooked up
    return (
        <ul className={'search-results'}>
            {JobContext?.jobsList.map((singleJob) => {
                const {id, name, locations, levels} = singleJob;
                return (
                    <li key={id}>
                        <p className="job-title">{name.substring(0, 100)}</p>
                        {locations.length || levels.length ? (
                            <div>
                                {locations.length ? locations.map((location) => <p className="label-text">{location.name}</p>) : null}
                                {levels.length ? levels.map((level) => <p className="label-text">{level.name}</p>) : null}
                            </div>
                        ) : 
                            null
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default SearchResultsDisplay;