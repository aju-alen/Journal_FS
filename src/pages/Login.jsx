import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({

        email: '',
        password: '',
      });
    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        console.log(formData, e);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('Form submitted:', formData);
      };
      return (
        <div className="h-auto w-auto">
          <img src="./images/cloud-main-img.jpg" alt="cloud" className=' w-full md:h-auto' />
          <div className="min-h-screen flex md:items-center justify-center bg-gray-100 md:p-10">
            <div className="bg-white p-8 rounded shadow-md w-full md:w-5/6">
              <h2 className="text-2xl font-semibold mb-6 text-center">Login Here to submit articles</h2>
              <form onSubmit={handleSubmit}>
    
                <div className="mb-4">
               
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>

                <div className=""></div>
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-indigo-600 w-full"
                >
                  Login
                </button>
              </form>
              <div className=" text-center p-4 flex justify-around">
                <div className="">
                <span>Forgot Password?</span>
                <span>
                    <Link to='/' className=' text-blue-600'> CLICK HERE </Link>
                </span>
                </div>
                 <div className="">
                 <span> Not Registered Yet?</span>
                <span>
                    <Link to='/register' className=' text-blue-600'> CLICK HERE TO REGISTER</Link>
                </span>
                 </div>
                
              </div>
            </div>
          </div>
        </div>
      )
}

export default Login