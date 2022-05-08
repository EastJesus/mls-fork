import * as React from 'react';
import { Link } from 'react-router-dom';

import './TryItBtn.scss';

const data = {
  text: 'Read for free',
}

const TryItBtn = () => {
  return (
    <Link
      to="/read"
      className="try-it-btn btn btn-primary"
    >
      { data.text }
    </Link>
  )
}

export default TryItBtn;
