import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [searchKeyword, setSearchKeyword] = useState('');

    return (
        <SearchContext.Provider value={{ searchKeyword, setSearchKeyword }}>
            {children}
        </SearchContext.Provider>
    );
};
