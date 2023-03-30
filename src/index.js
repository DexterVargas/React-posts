import React from 'react'
import ReactDom from 'react-dom/client'

import FunctionBase from './FunctionBase.js'
import ClassBase from './ClassBase.js'

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <>
        <FunctionBase />
        <ClassBase />
    </>

    
);