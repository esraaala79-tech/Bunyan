import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function FormDashboard(){
  const {setIsDraft} =useOutletContext(); 
  const [formData, setFormData] = useState ({email: "", password:""});
  const handleChange = (e) => {
    const updated = {...formData, [e.target.name]: e.target.value};
    setFormData(updated);

    const hasValue = Object.values(updated).some((val)=> val.trim() !== "");
    setIsDraft(hasValue);
  }
    return(
 <div className="container">

  <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
    value={formData.email} onChange={handleChange}  />
    
  </div>


  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
    value={formData.password}  onChange={handleChange}/>
  </div>

  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
        
    )
}


export default FormDashboard;