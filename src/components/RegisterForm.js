import React from 'react';
import { useFormik } from 'formik';
import CustomSelect from './CustomSelect';

const job_options = [
  { value: 'developer', label: 'Software Developer' },
  { value: 'chef', label: 'Chef' },
  { value: 'painter', label: 'Painter' },
];

const skill_options = [
  { value: 'c', label: 'c/c++' },
  { value: 'python', label: 'python' },
  { value: 'ios', label: 'ios' },
];

export function RegisterForm() {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.job) {
      errors.job = 'Required';
    }

    if (!values.skill) {
      errors.skill = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: 'test@gmail.com',
      job: 'painter',
    },
    validate,
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          name="email"
          id="email"
          type="email"
          className="input"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="job">Job</label>
        <CustomSelect
          options={job_options}
          value={formik.values.job}
          className={'input'}
          onChange={(value) => formik.setFieldValue('job', value.value)}
        />
        {formik.errors.job ? (
          <div className="error">{formik.errors.job}</div>
        ) : null}

        <label htmlFor="skill">Skill</label>
        <CustomSelect
          options={skill_options}
          value={formik.values.skill}
          className={'input'}
          onChange={(value) => formik.setFieldValue('skill', value.value)}
        />
        {formik.errors.skill ? (
          <div className="error">{formik.errors.skill}</div>
        ) : null}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
