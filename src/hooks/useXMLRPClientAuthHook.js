import React from 'react';
import { useXMLRPC } from './useXMLRPC';

export const MyComponent = () => {
  const { data, error, loading } = useXMLRPC(
    'http://172.31.160.89', 'execute_kw',
  ['odoo', 1, 'admin', 'res.users', 'search', [[['login', '=', 'admin']]]]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const userId = data;

  return <div>Current user ID: {userId}</div>;
};