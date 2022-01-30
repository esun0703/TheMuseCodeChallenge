import React, { useState, createContext, FC} from 'react';
import Axios from 'axios';
import { JobSearchFilters } from './Helpers';

interface Location {
    name: string,
}
interface Catagory {
    name: string,
}
interface Level {
    name: string,
    short_name: string,
}

interface Ref {
    landing_page: string,
}

interface Company {
    id: number,
    short_name: string,
    name: string,
}
interface Job {
    contents: string,
    name: string,
    type: string,
    publication_date: string,
    short_name: string,
    model_type: string,
    id: number,
    locations: Location[],
    categories: Catagory[],
    levels: Level[],
    tags: any[],
    refs: Ref,
    company: Company,
}
interface ContextDefault {
    jobsList: Job[], // update this when Ik the type
    searchJobTitle: (jobTitle: string) => void,
}

interface JobFilters {
  category: string[],
  level: string[],
  location: string[],
  company: string[],
}

export const Context = createContext<ContextDefault | null>(null);

const buildQueryString = (filterList: JobFilters, jobSearchPageNumber: number) => {
  const params = new URLSearchParams();
  filterList.category.forEach((category) => params.append(`category[]`, category));
  filterList.company.forEach((company) => params.append(`company[]`, company));
  filterList.level.forEach((level) => params.append(`level[]`, level));
  filterList.location.forEach((location) => params.append(`location[]`, location));
  params.append('page', jobSearchPageNumber.toString());

  return `?${params.toString()}`;
}

export const JobSearchProvider: FC = ({children}) => {
    const [jobsList, setJobsList] = useState<Job[]>([]);
    const [jobSearchPageNumber, setjobSearchPage] = useState<number>(0);
    const [filterList, setFilterList] = useState({category: [], location: [], level: [], company: []})
    const searchJobTitle = async (jobTitle : string) => {
        try {
            const {data} = await Axios.get(`https://www.themuse.com/api/public/jobs${buildQueryString(filterList, jobSearchPageNumber)}`);
            setJobsList(data.results.slice(0, 4));
            setjobSearchPage(jobSearchPageNumber + 1)
        } catch(e) {
            console.error(e)
        }
    }
    
    return (
        <Context.Provider value={{jobsList, searchJobTitle}}>
            {children}
        </Context.Provider>
    )
}