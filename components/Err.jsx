import React from 'react'
import { useRouteError } from "react-router-dom";

const Err = () => {
const error = useRouteError();
console.log(error);

  return (
    <div>Error {error.status} {error.statusText}</div>

  )
}

export default Err