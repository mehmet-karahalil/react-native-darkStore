import React from "react";
import {TextInput} from 'react-native';
import styles from './SearchBar.style';

interface SearchBarProps {
    onChange: (text: string) => void;
}

const SearchBar = ({onChange}:SearchBarProps) => {

    return (
        <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Search..."
        />
    );
    };

export default SearchBar;