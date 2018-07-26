
import React, { Component } from 'react';

import Modal from '../../components/ui/modal/Modal';
import HOComp from '../HOComp';
// import  from '';

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {

    state = {
      error: null
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null});
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      });
    }

    componentWillUnmount () {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render () {
      return (
        <HOComp>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler} >
            { this.state.error ? this.state.error.message : null }
          </Modal>
          <WrappedComponent {...this.props} />
        </HOComp>
      );
    }
  };
};

export default WithErrorHandler;
