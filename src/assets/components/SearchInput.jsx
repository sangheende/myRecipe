import {Search, XCircle} from 'feather-icons-react';

const SearchInput = ({ value, onChange }) => {
    return <div className="search">
        <Search />
        <input className='search__input' type="text" placeholder="레시피 이름 또는 재료를 검색하세요" value={value} onChange={(e) => onChange(e.target.value)}/>
        <button className={`search__button ${value ? 'active' : ''}`} onClick={() => onChange("")}><XCircle /></button>
    </div>
}

export default SearchInput;