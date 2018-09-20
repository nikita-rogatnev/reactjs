import React from 'react';
import styles from './section.scss';
import Modal from '../modal/modal'

function Section() {
    return (
        <section className={styles.section}>
            <div className="section__wrapper">
                section 1 content
                <Modal/>
            </div>
        </section>
    )
}

export default Section;
