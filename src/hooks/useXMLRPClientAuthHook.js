import React from 'react';
import { useXMLRPC } from './useXMLRPC';

const host =  'http:127.0.0.1:8069'
const db = "odoo"

export const MyComponent = () => {
  // authenticantion
  const url = "/api/xmlrpc/2/common" // api proxies
  const method = "authenticate";
  // const params2 = ["db", "user", "pass", {}]
  const params = [db, "admin", "admin", {}]

  const { data, error, loading } = useXMLRPC(
    host,
    url,
    method,
    params,
    );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const userId = data;

  return <div>Current user ID: {userId}</div>;
};

export const MyComponent2 = (model) => {
  // authenticantion
  const url = "/api/xmlrpc/2/object" // api proxies
  
  // const model = 'product.template'
  const method = "execute_kw"; // execute a python method
  const method2 = 'search_read' // python method method_name
  // const arg1 = [['is_company', '=', true]] // first argument of python method
  const arg1 = [] // first argument of python method

  const arg2 = ['id', 'name',] // fields

  // models.execute_kw(db, uid, password, 'res.partner', 'search_read', [[['is_company', '=', True]]], {'fields': ['name', 'country_id', 'comment'], 'limit': 5})
  // db, uid, password, 'res.partner', 'search', [[['is_company', '=', True]]]) ids 

  const params = [db, 2, "admin", model, method2, [arg1, arg2]]

  return useXMLRPC(
    host,
    url,
    method,
    params,
    );


};