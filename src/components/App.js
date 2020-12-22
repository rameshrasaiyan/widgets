import React, { useState } from 'react';
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

export default () => {
    const items = [
        {
            "title": "What is React?",
            "content": "React is a Front end JavaScript Framework"
        },
        {
            "title": "Why do you use React?",
            "content": "Because it is easy."
        }
    ];

    const options = [
        {
            label: "Red Color",
            value: "red"
        },
        {
            label: "Green Color",
            value: "green"
        },
        {
            label: "Blue Color",
            value: "blue"
        }
    ];

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
        </div>
    )
}
