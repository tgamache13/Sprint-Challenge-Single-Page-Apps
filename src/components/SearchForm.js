import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function SearchForm({ values, errors, touched }) {
 
  return (
    <section className="search-form">
     <Form>
       <div>
         <Field 
            type="text"
            name="character"
            placeholder="Character"
          />
         {touched.character && errors.character && <p>{errors.character}</p>}
       </div>
       <button>Submit</button>
     </Form>
    </section>
  );
}

const FormikSearchForm = withFormik({
  mapPropsToValues({ character }) {
    return {
      character: character || ""
    };
  },

  validationSchema: Yup.object().shape({
    character: Yup.string()
              .required("You must enter a character to search for."),
  }),

  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    for(let ch of props.characters){
      if(ch.name.toLowerCase() == values.character.toLowerCase()){
        props.setFound(ch);
        props.history.push(`/character/${ch.name}`);
      }
    }
  }
})(SearchForm);

export default FormikSearchForm;
