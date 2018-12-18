import React, {Component} from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';
import { connect } from 'react-redux';

export class Layout extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={3}>
                        <NavMenu />
                    </Col>
                    <Col sm={9}>
                        {this.props.children}
                    </Col>
                </Row>
            </Grid>
        );
    }
} 

export default connect()(Layout)