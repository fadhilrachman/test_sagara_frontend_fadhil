
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import { Dropdown,InputGroup,FormControl,DropdownButton } from 'react-bootstrap';

const Ragister = () => {

    const doregister = (values) => {
        setTimeout(()=>{
            formik.setSubmitting(false);
            formik.resetForm();
        },1000)
    }




    const formik = useFormik({
        initialValues: {
            firstname : '',
            lastname : '',
            email : '',
            password : '',
            confirmpassword :'',
            gender:''

        },

        validationSchema : Yup.object({
             firstname : Yup.string()
             .required(),
             lastname : Yup.string()
             .required(),
             gender : Yup.string()
             .required(),
             email : Yup.string()
             .required()
             .email('invalid email format'),
             password : Yup.string()
             .required()
             .min(8,'shold more than 8 character'),
             confirmpassword :Yup.string()
             .required()
             .oneOf([Yup.ref.password], 'password must mutch . ')
        }),

        onSubmit : doregister
        
    })

    console.log(formik);


    const {values, handleSubmit} = formik
    return(
        <div className="Ragister">
            <Navbar />
            <div className="input">
                
                <form action="" onSubmit={handleSubmit}>

                    <div className="judul">
                       <h2>Form Register</h2>
                    </div>

                    <div class="input-group mb-3 t3">
                        <input 
                            type="text" 
                            name="firstname" 
                            class="form-control" 
                            placeholder="first name" 
                            value={values.firstname} 
                            onChange={formik.handleChange} 
                            aria-label="Recipient's username" 
                            aria-describedby="button-addon2" 
                            onBlur={formik.handleBlur}
                        />
                    </div> 
                    {formik.touched.firstname && formik.errors.firstname && <div className='required'> <p> {formik.errors.firstname} </p> </div>}

                    <div class="input-group mb-3">
                        <input 
                            type="text" 
                            name="lastname" 
                            class="form-control" 
                            value={formik.values.lastname} 
                            onChange={formik.handleChange} 
                            placeholder="last name" 
                            aria-label="Recipient's username" 
                            aria-describedby="button-addon2" 
                            onBlur={formik.handleBlur}

                        />
                    </div> 
                   {formik.touched.lastname && formik.errors.lastname && <div className="required"> <p> {formik.errors.lastname} </p> </div>}

                   <div class="input-group mb-3 t3">
                        <input 
                            type="text" 
                            name="gender" 
                            class="form-control" 
                            placeholder="gender" 
                            value={formik.values.gender} 
                            onChange={formik.handleChange} 
                            aria-label="Recipient's username" 
                            aria-describedby="button-addon2" 
                            onBlur={formik.handleBlur}
                        />
                    </div> 
                    {formik.touched.gender && formik.errors.gender && <div className='required'> <p> {formik.errors.gender} </p> </div>}

                <div class="input-group mb-3">
                    <select class="btn btn-outline-blue dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                            >
                        <option>Provinsi</option>

                        <option >jawa barat</option>
                        <option>Jawa Timur</option>
                        
                     </select>
                </div>

                <div class="input-group mb-3">
                    <select class="btn btn-outline-blue dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                           placeholder='halo' >
                        <option placeholder="h" >Kota</option>
                        <option>Bandung</option>
                        <option>Surabaya</option>
                        <option>Pati</option>
                        
                     </select>
                </div>
                    
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
                    {formik.touched.email && formik.errors.email && <div className='required'> <p> {formik.errors.email} </p> </div>}

                     
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
                    { formik.touched.password && formik.errors.password && <div className='required'> <p> {formik.errors.password} </p> </div>}

                    <div class="input-group mb-3">
                         <input 
                            type="password" 
                            name="confirmpassword" 
                            class="form-control" 
                            value={formik.values.confirmpassword} 
                            onChange={formik.handleChange} 
                            placeholder="Confirm Password" 
                            aria-label="Recipient's username" 
                            aria-describedby="button-addon2" 
                            onBlur={formik.handleBlur}
                        />
                    </div>        
                    { formik.touched.confirmpassword && formik.errors.confirmpassword && <div className='required'> <p> {formik.errors.confirmpassword} </p> </div>}
                    
                    
                    <button type="submit" disabled={formik.isSubmitting}>Sign Up</button>
                  
                </form>

            </div>

            <Footer />
        </div>
    )
}


export default Ragister

