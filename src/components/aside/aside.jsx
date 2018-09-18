import React, {Component} from 'react';
import styles from './aside.scss';

class Aside extends Component {
    render() {
        return (
            <aside className={styles.aside}>
                <div className="aside__wrapper">
                    aside block
                </div>
            </aside>
        )
    }
}

export default Aside;
