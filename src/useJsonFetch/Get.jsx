import React from 'react'
import PropTypes from 'prop-types'
import useJsonFetch from './useJsonFetch';

function Get({ url, title }) {
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div className="get">
      <div className='title'>{title}</div>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error:{error} </div>}
      {data && <div className="data">Success: {data.status}</div>}
    </div>
  );
}

Get.propTypes = {
  url: PropTypes.string
}

export default Get
