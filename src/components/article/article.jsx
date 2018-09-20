import React from 'react';
import styles from './article.scss';

let articleLink = [
    {
        'title': 'Article title 1',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'meta': {
            'link': 'Link 1',
            'url': '#',
            'target': '_self'
        }
    }
];

function getArrayItems(item, index) {
    let arrayItem = (
        <div className="article__wrapper" key={index}>
            <header className="article__header">
                <h1 className="article__title">
                    {item.title}
                </h1>
            </header>
            <p>
                {item.text}
            </p>
            <footer className="article__footer">
                <a href={item.meta.url}
                   target={item.meta.target}
                   className="article__menu-link">
                    {item.meta.link}
                </a>
            </footer>
        </div>
    );

    return arrayItem;
}

function Article() {
    return (
        <article className="article">
            {articleLink.map(getArrayItems)}
        </article>
    )
}

export default Article;
