import React from 'react';
import CharacterCard from '../CharacterCard'

import './style.css';

export default () => {
    return (
        <section className="Home__ShowcaseWrapper">
            <div className="Home__ShowcaseInner">
                <CharacterCard />
            </div>
        </section>
    );
}