import React from 'react'

const Loader = () => (
  <div className="text-center">
    <div className="spinner-border text-primary mt-5" style={{width: "3rem", height: "3rem"}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)

export default Loader