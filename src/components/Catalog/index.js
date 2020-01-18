import React from 'react';
import CharacterCard from '../CharacterCard'

import './style.css';

export default ({characters}) => {
    return (
        <section className="Home__ShowcaseWrapper">
            <div className="Home__ShowcaseInner">
                {
                    characters.map(el => (<CharacterCard {...el} key={el.id} />))
                }
            </div>
        </section>
    );
}