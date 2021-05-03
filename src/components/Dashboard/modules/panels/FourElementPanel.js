
import React from 'react';

import { Row, Column } from '../../../Bootstrap/Layout';
import { Toggle } from '../controls/Toggle';
export class FourElementPanel extends React.Component {
    render() {
        return (
            <Row>
                <Column size="3">
                    <Toggle switchName="Pump 1" />
                </Column>
                <Column size="3">
                    <Toggle switchName="Pump 2" />
                </Column>
                <Column size="3">
                    <Toggle switchName="Pump 3" />
                </Column>
                <Column size="3">
                    <Toggle switchName="Pump 4" />
                </Column>
            </Row>


        )
    }
}
