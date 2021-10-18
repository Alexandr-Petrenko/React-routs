import { useContext, createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getBlocks from '../api';

const ApiContext = createContext();
export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fullRequest, setFullRequest] = useState({});
  const sortDataBy = (param) => {
    const data = [...blocks];

    setBlocks(
      data.sort((a, b) => {
        if (a[param] > b[param]) {
          return 1;
        }
        if (a[param] < b[param]) {
          return -1;
        }
        return 0;
      }),
    );
  };

  const renderQuantity = (limit) => {
    const data = [...fullRequest];

    setBlocks(data.splice(0, limit));
  };

  useEffect(async () => {
    setBlocks([...(await getBlocks())]);
    setFullRequest([...(await getBlocks())]);
    setIsLoading(false);
  }, []);

  return (
    <ApiContext.Provider
      value={{ blocks, isLoading, sortDataBy, renderQuantity }}
    >
      {children}
    </ApiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
