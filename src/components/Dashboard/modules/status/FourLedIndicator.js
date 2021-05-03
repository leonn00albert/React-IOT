
import React from 'react';

import { Row, Column } from '../../../Bootstrap/Layout';
import { LedLight } from '../status/LedLight';
export class FourLedIndicator extends React.Component {
    render() {
        return (
            <Row>
                <Column size="3">
                    <LedLight color="green" lightName="Light 1" />
                </Column>
                <Column size="3">
                    <LedLight color="green" lightName="Motor 1" />
                </Column>
                <Column size="3">
                    <LedLight color="red"  lightName="Motor 2" />
                </Column>
                <Column size="3">
                    <LedLight color="green" lightName="Fan 1" />
                </Column>
            </Row>


        )
    }
}
