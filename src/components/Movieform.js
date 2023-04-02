import React,{useState} from 'react'

function Movieform(props) {
  
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    props.setShowForm(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Movie Name:
        <input type="text" name="Name" value={formData.movieName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Movieform

 