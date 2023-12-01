import {React, useState} from 'react';
import TextField from "@mui/material/TextField";
import List from './ListJobs.jsx';
import stylesearch from './FilterJobs.module.css'

export default function SearchFilterJobs () {
    const [inputText, setInputText] = useState ("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        console.log("🚀 ~ file: FilterJobs.jsx:11 ~ inputHandler ~ lowerCase:", lowerCase)
    };

    return (
        <>
            <div className="MainFilterJobs">
                <h1>Search bar</h1>
                <div className={stylesearch.TextField}>
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
                </div>
            </div>
            <List input={inputHandler} />
        </>
    )
}