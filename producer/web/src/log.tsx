import React, { useEffect, useState } from 'react';
import { getBundles } from './utils';
import { Card } from 'antd';

const Log = () => {
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

  return (
    <>
      {bundles.map(bundle => (
        <div>
          <Card style={{ margin: '24px 0' }}>
            <pre>{JSON.stringify(bundle, null, 4)}</pre>
          </Card>
        </div>
      ))}
    </>
  );
};

export default Log;
