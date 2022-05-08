import * as React from 'react';

import './SectionGit.scss';

const data = {
  text: 'MLS is supplemented with a GitHub repository that contains python implementations of concepts explained in the book',
  btn: 'Go to',
};

const SectionGit = () => {
  return (
    <div className="section-git text-center">
      <div className="section-git__text">{ data.text }</div>
      <a
        href="https://github.com/5x12/themlsbook"
        target="_blank"
        className="btn btn-primary btn--git"
        rel="noreferrer"
      >
        { data.btn }
      </a>
    </div>
  )
}

export default SectionGit;