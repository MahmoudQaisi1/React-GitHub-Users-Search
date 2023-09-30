import React, { forwardRef, useState } from 'react';

const Header = forwardRef(({ search }, ref) => {
    const [query, setQuery] = useState('');

    return (
        <div className='header' ref={ref}>
            <h1>Write down the username:</h1>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    search(query);
                }}
            >
                <input
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value);
                    }}
                />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
});

export default Header;