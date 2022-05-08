import * as React from 'react';

import './SectionTableOfContents.scss';

const data = {
  chapters: [
    {
      title: 'FUNDAMENTALS OF SUPERVISED LEARNING',
      chapters: [
        {
          title: 'Introduction',
          url: 'https://cutt.ly/dOhTbyO#pageNum=12'
        },
        {
          title: 'Overview of Supervised Learning',
          url: 'https://cutt.ly/dOhTbyO#pageNum=22'
        },
        {
          title: 'Model Learning',
          url: 'https://cutt.ly/dOhTbyO#pageNum=36'
        },
        {
          title: 'Basis Expansion & Regularization',
          url: 'https://cutt.ly/dOhTbyO#pageNum=56'
        },
        {
          title: 'Model Selection',
          url: 'https://cutt.ly/dOhTbyO#pageNum=66'
        },
        {
          title: 'Feature Selection',
          url: 'https://cutt.ly/dOhTbyO#pageNum=78'
        },
        {
          title: 'Data Preparation',
          url: 'https://cutt.ly/dOhTbyO#pageNum=86'
        },
      ],
    },
    {
      title: 'ADVANCED SUPERVISED LEARNING ALGORITHMS (WIP)',
      chapters: [
        {
          title: 'Regression Models'
          // url: 'http://www.google.com'
        },
        {
          title: 'Logit Models'
          // url: 'http://www.google.com'
        },
        {
          title: 'Bayesian Models'
          // ,
          // url: 'http://www.google.com'
        },
        {
          title: 'Maximum Margin Models'
          // url: 'http://www.google.com'
        },
        {
          title: 'Tree-Based Models'
          // url: 'http://www.google.com'
        },
        {
          title: 'Ensemble Models'
          // url: 'http://www.google.com'
        },
        {
          title: 'Algorithms Selection'
          // url: 'http://www.google.com'
        },
        {
          title: 'Hyperparameter Tuning'
          // url: 'http://www.google.com'
        },
        {
          title: 'Evaluation Metrics'
          // url: 'http://www.google.com'
        },
      ],
    },
  ],
};


const SectionTableOfContents = () => {
  const contentsTree = (list) =>
    <ol className="contents__list me-md-auto ms-md-auto">
      {list.chapters.map(node => (
        <li className="contents__list-item" key={node.title}>
          <span className="contents__list-item-title">
            {
              node.url
              ? (<a href={node.url} title="node.title" target="_blank" className="contents__list-item-link" rel="noreferrer">{ node.title }</a>)
              : node.title
            }
          </span>
          { node.chapters?.length && contentsTree(node)}
        </li>
      ))}
    </ol>;

  return (
    <div className="section-table-of-contents">
      { contentsTree(data) }
    </div>
  )
}

export default SectionTableOfContents;