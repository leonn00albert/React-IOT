import React from 'react';
import { Card } from '../Bootstrap/Components'
import { Container, Row, Column } from '../Bootstrap/Layout';
import { Weather } from '../Request/Weather/Weather';
import { Toggle } from './modules/controls/Toggle'
import { FourElementPanel } from './modules/panels/FourElementPanel'
import { TwoElementStatus } from './modules/status/TwoElementStatus'
import {FourLedIndicator} from './modules/status/FourLedIndicator'
import {Map} from './modules/map/Map'
export class Dashboard extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Column size="6" >
                        <Card title="Current Weather" subTitle="Source openWeatherMap API ">
                            <TwoElementStatus />
                        </Card>
                    </Column>
                    <Column size="6">
                        <Card title="Four Switches" subTitle="Config in dashboard/modules file">
                        <FourLedIndicator />
                            <FourElementPanel />
                        </Card>
                    </Column>
                    <Column size="6">
                        <Card title="Weather Chart" subTitle="Source openWeatherMap API ">
                        <Weather chartStyle="LineChart" />
                        </Card>
                    </Column>
                    <Column size="6">
                        <Card title="Weather Chart" subTitle="Source openWeatherMap API ">
                            <Map />
                        </Card>
                    </Column>
                </Row>
                <Row>
                    <Column size="4">
                        <Card title="Weather Chart Tbilisi" subTitle="Source openWeatherMap API ">
                      

                        </Card>
                    </Column >
                    <Column size="4">
                        <Card title="Weather Chart Tbilisi" subTitle="Source openWeatherMap API ">
                        

                        </Card>
                    </Column>
                    <Column size="4">
                        <Card title="Weather Chart Tbilisi" subTitle="Source openWeatherMap API ">
                           

                        </Card>
                    </Column>
                </Row>
            </Container>
        );
    }
}