import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  refresh: {
    display: 'inline-block',
    position: 'relative'
  }
};

const Loader = () => (
  <RefreshIndicator
    size={50}
    left={0}
    top={0}
    loadingColor="#000"
    status="loading"
    style={style.refresh}
  />
);

export default Loader;
