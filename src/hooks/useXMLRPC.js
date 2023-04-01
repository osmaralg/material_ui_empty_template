import { useState, useEffect } from 'react';
import xmlrpc from 'xmlrpc';

export const useXMLRPC = (url, method, params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = xmlrpc.createClient(
      { host: url, port: 8069});

    client.methodCall(method, params, (err, value) => {
      if (err) {
        setError(err);
        setLoading(false);
      } else {
        setData(value);
        setLoading(false);
      }
    });

    ;
  }, [url, method, params]);

  return { data, error, loading };
};