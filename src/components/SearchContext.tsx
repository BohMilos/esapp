"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Post } from '@prisma/client';

interface SearchContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    searchResults: (User | Post)[];
    setSearchResults: (results: (User | Post)[]) => void;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    searchType: 'users' | 'posts';
    setSearchType: (type: 'users' | 'posts') => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<(User | Post)[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchType, setSearchType] = useState<'users' | 'posts'>('users');

    return (
        <SearchContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                searchResults,
                setSearchResults,
                isLoading,
                setIsLoading,
                searchType,
                setSearchType,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
} 