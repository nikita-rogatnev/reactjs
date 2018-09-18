import React, {Component} from 'react';
import styles from './section.scss';

class Section extends Component {
    render() {
        return (
            <section className={styles.section}>
                <div className="section__wrapper">
                    section 1 content
                </div>
            </section>
        )
    }
}

export default Section;
