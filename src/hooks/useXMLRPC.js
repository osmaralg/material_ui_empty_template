import { useState, useEffect } from 'react';
// import xmlrpc from 'xmlrpc';
const xmlrpc = require('xmlrpc')

export const useXMLRPC = (host, url, method, params) => {
  
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (data.length === 0) {
    // const myUrl = 'http:172.31.160.89:8069'
      const client = xmlrpc.createClient({ host, url });
      
      console.log("method", method)
      console.log("params", params)


      client.methodCall(method, params, (err, value) => {
        
        console.log("value", value)
        console.log("err", err)

        if (err) {
          setError(err);
          // setLoading(false);
        } else {
          console.log(value)
          setData(value);
          setLoading(false);
        }
      });

    }


    ;
  }, [host, url, method, data, params ]);

  return { data, error, loading };
};

// models.execute_kw(db, uid, password, 'res.partner', 'search', [[['is_company', '=', True]]])