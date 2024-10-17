import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 
import { addPatient } from '../services/api'; 
import { toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.number().required('Age is required').positive('Age must be a positive number'),
  gender: Yup.string().required('Gender is required'),  
  diagnosis: Yup.string().required('Diagnosis is required'),  
  condition: Yup.string().required('Condition is required'),  
  treatmentPlan: Yup.string().required('Treatment Plan is required'),  
  medicalHistory: Yup.string(),  
});

const AuthorizationForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log('Submitting values:', values);
    try {
      await addPatient(values);  
      toast.success('Patient added successfully!'); 
      resetForm(); 
    } catch (error) {
      toast.error('Error adding patient. Please try again.');  
      console.error(error);
    } finally {
      setSubmitting(false); 
    }
  };

  return (
    <div>
      <h2>Add a Patient</h2>
      
      <Formik
        initialValues={{ 
          name: '', 
          age: '', 
          gender: '', 
          diagnosis: '', 
          condition: '', 
          treatmentPlan: '', 
          medicalHistory: '' 
        }}  
        validationSchema={validationSchema}  
        onSubmit={handleSubmit}  
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Patient Name */}
            <div>
              <label>Name</label>
              <Field type="text" name="name" placeholder="Enter patient's name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            {/* Patient Age */}
            <div>
              <label>Age</label>
              <Field type="number" name="age" placeholder="Enter patient's age" />
              <ErrorMessage name="age" component="div" className="error-message" />
            </div>

            {/* Patient Gender */}
            <div>
              <label>Gender</label>
              <Field as="select" name="gender">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option> {/* Additional option */}
              </Field>
              <ErrorMessage name="gender" component="div" className="error-message" />
            </div>

            {/* Patient Diagnosis */}
            <div>
              <label>Diagnosis</label>
              <Field type="text" name="diagnosis" placeholder="Enter patient's diagnosis" />
              <ErrorMessage name="diagnosis" component="div" className="error-message" />
            </div>

            {/* Patient Condition */}
            <div>
              <label>Condition</label>
              <Field type="text" name="condition" placeholder="Enter patient's condition" />
              <ErrorMessage name="condition" component="div" className="error-message" />
            </div>

            {/* Treatment Plan */}
            <div>
              <label>Treatment Plan</label>
              <Field type="text" name="treatmentPlan" placeholder="Enter patient's treatment plan" />
              <ErrorMessage name="treatmentPlan" component="div" className="error-message" />
            </div>

            {/* Medical History */}
            <div>
              <label>Medical History (optional)</label>
              <Field type="text" name="medicalHistory" placeholder="Enter patient's medical history" />
              <ErrorMessage name="medicalHistory" component="div" className="error-message" />
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add Patient'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthorizationForm;
