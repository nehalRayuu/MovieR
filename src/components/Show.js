import React, { useState } from 'react'

import Movieform from './Movieform';


function Show() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
    console.log(showForm)
  };
  return (
    <div>
      <button onClick={handleClick}>Book Movie Ticket</button>
      {showForm && <Movieform setShowForm={setShowForm} />}
    </div>
  )
}

export default Show