// vendor import
import React from 'react';

// local imports
import Aux from './aux';
import Modal from '../components/UI/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = {
            error: null,
        }

        componentWillMount() {
            this.InceptorWithRequest = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            })
            this.InterceptorWithResponse = axios.interceptors.response.use(resp => resp, error => {
                this.setState({ error: error });
            } )
        }

        // clear the interceptors
        componentWillUnmount() {
            axios.interceptors.request.eject(this.InceptorWithRequest);
            axios.interceptors.response.eject(this.InceptorWithResponse);
        }


        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }
        render() {
            return(
                <Aux>
                <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                    {this.state.error ? this.state.error.message : null }
                </Modal>
            <WrappedComponent {...this.props} />
            </Aux>
            );
        }
    }
}

// export
export default withErrorHandler;