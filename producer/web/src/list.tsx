import React, { useEffect, useState } from 'react';
import { getBundles } from './utils';

const List = () => {
  const [loading, setLoading] = useState(true);
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    setLoading(true);
    getBundles().then(bundles => {
      setLoading(false);
      setBundles(bundles);
    });
  }, []);

  if (loading) return <>"Loading"</>;

  return <>{JSON.stringify(bundles, null, 2)}</>;
};

export default List;
