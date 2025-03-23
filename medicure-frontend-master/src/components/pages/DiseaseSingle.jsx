import React, { useState } from 'react'
import Layout from '../Layout'
import { useSearchParams, Link } from 'react-router-dom';
import * as predictService from './../../services/PredictService';
import FadeLoader from 'react-spinners/FadeLoader';

function DiseaseSingle() {
    const [sp, setSp] = useSearchParams();
    const model = sp.get("type");
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [disease, setDisease] = useState(null);
    const [score, setScore] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setDisease(null);
        setScore(null);

        if (selectedFile) {
            const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
            if (['jpg', 'jpeg', 'png'].includes(fileExtension)) {
                setError(null);
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFileUrl(reader.result);
                };
                reader.readAsDataURL(selectedFile);
            }
            else {
                setError("Please select a valid image file (jpg, jpeg, png)")
                e.target.value = null;
                setFile(null);
            }
        }
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        const result = await predictService.getPrediction(file, model);
        console.log(result);
        setDisease(result.class)
        setScore(result.score)
        setLoading(false);
    }

    return (
        <Layout>
            <div className="cv-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cv-breadcrumb-box">
                                <h1>Predict Disease</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Predict Disease</li>
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
                                <h2 className="cv-sidebar-title">Predict {model} Disease</h2>
                                <form onSubmit={handleSubmit}>

                                    <span>Select Image</span>
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        className={error != null ? 'error' : ""} />
                                    {
                                        error &&
                                        <span className='text-danger'>{error}</span>
                                    }

                                    {
                                        file &&
                                        <div>
                                            <img src={fileUrl} alt="selected" style={{ width: '300px', marginTop: '10px' }} />
                                        </div>
                                    }
                                    <br />

                                    {
                                        loading ?
                                            <div className='d-flex align-items-center'>
                                                <FadeLoader color={'#3cbcff'} loading={loading} />
                                                <span className='text-clr fs-4 fw-bold'>Predicting...</span>
                                            </div>
                                            :
                                        <button type="submit" className="cv-btn submitForm">Predict Disease</button>
                                    }
                                    <br />
                                    <br />
                                    {
                                        disease && <><span className='fs-3 fw-bold'>Predicted Disease is {disease}</span> <br /></>
                                    }
                                    {
                                        score && <span className='fs-3 fw-bold'>Predicted score is {score}</span>
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

export default DiseaseSingle