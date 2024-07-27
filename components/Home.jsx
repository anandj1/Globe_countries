import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import SelectMenu from '../components/SelectMenu'
import CountriesList from '../components/CountriesList'
import '../App.css'

const Home = () => {
  const [query, setQuery] = useState('')
  const[filters,setFilter] = useState('')
  return (
    <>
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu  setFilter={setFilter} />
        </div>
        {query === 'clear' ? '' : <CountriesList query={query} filters = {filters} />}
      </main>
    </>
  )
}

export default Home
