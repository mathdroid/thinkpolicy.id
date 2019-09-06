

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/404.js'), universalOptions)
      t_0.template = '/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/404.js'
      
const t_1 = universal(import('/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/index.js'), universalOptions)
      t_1.template = '/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/index.js'
      
const t_2 = universal(import('/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/rute.js'), universalOptions)
      t_2.template = '/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/rute.js'
      

// Template Map
export default {
  '/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/404.js': t_0,
'/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/index.js': t_1,
'/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/rute.js': t_2
}
// Not Found Template
export const notFoundTemplate = "/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/404.js"

