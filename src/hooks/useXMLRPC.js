import { useState, useEffect } from 'react';
// import xmlrpc from 'xmlrpc';
const xmlrpc = require('xmlrpc')

export const useXMLRPC = (url, method, params) => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const myUrl = 'http:172.31.160.89:8069'
    const client = xmlrpc.createClient({ host: 'http:172.31.160.89:8069', url: '/api/xmlrpc/2/common' });
    
    console.log("method", method)
    console.log("params", params)
    const params2 = ["odoo", "admin", "admin", {}]
    const method2 = "authenticate"
    client.methodCall(method2, params2, (err, value) => {
      console.log("value", value)
      console.log("err", err)

      if (err) {
        setError(err);
        // setLoading(false);
      } else {
        setData(JSON.stringify(value));
        setLoading(false);
      }
    });

    ;
  }, );

  return { data, error, loading };
};