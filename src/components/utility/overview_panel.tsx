import * as React from 'react';
import {Link} from 'react-router-dom';
import {Progress} from './progress';

interface OverviewProps {
    icon: JSX.Element;
    title: string;
    imgSrc: string;
    active: number;
    count: number;
    route: string;
}

export class OverviewPanel extends React.Component<OverviewProps, {}> {
    public render(): JSX.Element {
        return <Link className={'row mt-4 text-light'} style={{textDecoration: 'none'}} to={this.props.route}>
            <div className='offset-2 col-sm-2 d-none d-sm-flex flex-row align-items-center justify-content-center'>
                <img width='125' className='app-main-image' alt='Crafts Main Image' src={this.props.imgSrc}/>
            </div>
            <div className='col-sm-8 card'>
                <div className='row card-body'>
                    <div className='col-sm-12 card-text text-dark'>
                        <div className='row'>
                            <div className='col-6 col-sm-6'>
                                <h3>
                                    {this.props.icon}
                                    <span>{this.props.title}</span>
                                </h3>
                            </div>
                            <div className='col-6 col-sm-6 text-right'>
                                <h5>{this.props.active}/{this.props.count}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                        <Progress className='app-progress' active={this.props.active} count={this.props.count}/>
                    </div>
                </div>
            </div>
        </Link>;
    }
}
