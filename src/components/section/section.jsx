import React from 'react';
import styles from './section.scss';
import Modal from '../modal/modal'
import Article from '../article/article'

function Section() {
    return (
        <section className="section">
            <div className="section__wrapper">
                section 1 content
                <Modal/>
                <Article/>
            </div>
        </section>
    )
}

export default Section;
