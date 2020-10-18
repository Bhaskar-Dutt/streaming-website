import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    // renderInput(formProps) {
    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        // console.log(formProps);
        // return <input onChange={formProps.imput.onChange} value={formProps.input.value}/>;
        // return <input {...formProps.input} />
        // this is some new JSX, it takes properties of formProps and pass out
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>  
                {/* <div>{meta.error}</div> */}
                {this.renderError(meta)}
            </div>
        );
    };

   // with redux form, we cannot use the method of onSubmit function as we have pre-built
   // functions for it, so we can console log it out and see the function in it
    
    onSubmit = (formValues) => {
        // formValues is a name made by us, so that we can refer to the values
        // the values are passed on to this function
        this.props.onSubmit(formValues);
    
    }; // see the difference here.

    render() {
        // console.log(this.props);
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    };
};

const validate = (formValues) =>{
    const errors = {};
    if (!formValues.title) {
        errors.title = "You must enter a title";
    } 
    if (!formValues.description) {
        errors.description= "You must write a description";
    }
    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);


// here we name according to us, so we are giving it a name here

// if the errors object has the same keys as that of the form name, then it will directly get added