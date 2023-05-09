import React from 'react';
import { Formik, Form, Field } from 'formik';

export const MaterialForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <br />
          <label style={{ marginRight: '10px' }}>
            Title : <Field name="title" type="text" />
          </label>

          <br />
          <br />
          <label style={{ marginRight: '10px' }}>
            Link : <Field name="link" type="text" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Add
          </button>
          <br />
        </Form>
      )}
    </Formik>
  );
};
