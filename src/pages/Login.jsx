
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';


const Login = () => {

    const doregister = () =>{
        setTimeout(()=>{
            formik.setSubmitting(false);
            formik.resetForm();
        },1000)
    }

    const formik = useFormik({
        initialValues: {
            email : '',
            password : '',

        },

        validationSchema : Yup.object({
             email : Yup.string()
             .required()
             .email('invalid email format'),
             password : Yup.string()
             .required()
             .min(8,'shold more than 8 character'),
           
        }),

        onSubmit : doregister
    })

    return   <div>
            <Navbar />
            <div className="login">
                <div className="judul">
                     <h1>Form Login</h1>
                </div>
                <form onSubmit={formik.handleSubmit}>
                <div class="input-group mb-3">
                         <input 
                            type="email" 
                            name="email" 
                            class="form-control" 
                            value={formik.values.email} 
                            onChange={formik.handleChange} 
                            placeholder="Email" 
                            aria-label="Recipient's username" 
                            aria-describedby="button-addon2" 
                            onBlur={formik.handleBlur}

                        />
                    </div>
                    {formik.touched.email && formik.errors.email && <div  className='err'> <p> {formik.errors.email} </p> </div>}
                    <div class="input-group mb-3">
                         <input 
                            type="password" 
                            name="password" 
                            class="form-control" 
                            value={formik.values.password} 
                            onChange={formik.handleChange} 
                            placeholder="Password" 
                            aria-label="Recipient's username" 
                            aria-describedby="button-addon2" 
                            onBlur={formik.handleBlur}

                        />
                    </div> 
                    { formik.touched.password && formik.errors.password && <div className='err' > <p> {formik.errors.password} </p> </div>}

                    <button className="btn-log">Login</button>
                    </form>
                <div className="link">
                   <p>Belum punya akun ? <Link to='/Ragister'>daftar</Link></p>
                </div>
            </div>
            <Footer />
    </div>
}

export default Login