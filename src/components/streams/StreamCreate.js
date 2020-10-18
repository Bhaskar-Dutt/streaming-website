import React from 'react';
// import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        // formValues is a name made by us, so that we can refer to the values
        // the values are passed on to this function
        this.props.createStream(formValues);
    
    }; // see the difference here.

    render() {
        // console.log(this.props);
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    };
};

export default connect(null, {createStream})(StreamCreate);

// here we name according to us, so we are giving it a name here

// if the errors object has the same keys as that of the form name, then it will directly get added