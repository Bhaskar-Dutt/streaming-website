import React from 'react';
import {connect} from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component{
    // console.log(props);
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    };

    onSubmit = formValues => {
        this.props.editStream(this.props.stream.id, formValues);
    };
    
    render() {
        if (!this.props.stream) {
            return <div>loading...</div>
        }
        return (
            <div>
                <h3>Edit a Form</h3>
                <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit} />
            </div>
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);

// we should console.log out the props, so that we can see the additional things due to Route component
