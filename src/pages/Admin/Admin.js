import React, { Fragment, Component } from 'react'
import { Helmet } from 'react-helmet';

// import services
import ProductServices from '../../services/ProductServices';

export default class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        ProductServices.getProducts()
            .then(response => {
                this.setState({ data: response })
            })
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Admin Dashboard</title>
                </Helmet>

                <ul>
                    {this.state.data.map(data => {
                        return (
                            <li>{data.name}</li>
                        );
                    })}

                </ul>
            </Fragment>
        )
    }
}

