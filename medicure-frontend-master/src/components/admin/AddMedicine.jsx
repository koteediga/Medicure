import * as medicineService from '../../services/MedicineService';
import * as authService from '../../services/AuthService'
import Layout from '../Layout'
import {useNavigate, Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import { useEffect, useState } from 'react'
import FadeLoader from 'react-spinners/FadeLoader';

function AddMedicine() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser == null) {
      toast.error("Login to access this route")
      navigate("/login");
    }

    else if(currentUser.role != 'ADMIN') {
      toast.error("No access this route")
      navigate("/error-403");
    }
  }, [])

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const result = await medicineService.addMedicine(name, price, description, file);

    setLoading(false);
    if (result.statusCode === 409 || result.statusCode === 400) {
      toast.error(result.message);
    }
    
    else {
      toast.success("Medicine Added successfully")
      setName('');
      setPrice('');
      setDescription('');
    }

  }

  return (
    <Layout>
      <div className="cv-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cv-breadcrumb-box">
                <h1>Add Medicine</h1>
                <ul>
                  <li><Link to={"/"}>Home</Link></li>
                  <li>Add Medicine</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cv-conatact spacer-top spacer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cv-contact-form">
                <h2 className="cv-sidebar-title">Add Medicine</h2>
                <form onSubmit={handleSubmit}>

                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    placeholder="Enter medicine name"
                  />

                  <input
                    name="price"
                    type="text"
                    value={price}
                    onChange={(e) => { setPrice(e.target.value) }}
                    placeholder="Enter price"
                  />

                  <input
                    name="file"
                    type="file"
                    // value={file}
                    onChange={(e) => { setFile(e.target.files[0]) }}
                    placeholder="Enter price"
                  />

                  <textarea
                    name="description"
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                    placeholder="Enter description...."
                  ></textarea>

                  {
                    loading ?
                    <div className='d-flex align-items-center'>
                      <FadeLoader color={'#3cbcff'}  loading={loading} /> 
                      <span className='text-clr fs-4 fw-bold'>Adding...</span>
                    </div> 
                    :
                    <button type="submit" className="cv-btn submitForm">Add Medicine</button> 
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AddMedicine