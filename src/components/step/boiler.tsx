import * as React from 'react';
import {ComponentClass} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Bundle} from '../utility/bundle';
import {Progress} from '../utility/progress';
import {BundleModel, StoreActionTypes, StoreState} from '../../store/types';
import {checkBoilerBundleActionCreator} from '../../store/actions';

const StepImage: string = require('../../assets/img/boiler/bundle_main_alt.png');

interface BoilerStoreProps {
    bundles: BundleModel[];
}

interface BoilerStoreActions {
    checkAction: typeof checkBoilerBundleActionCreator;
}

type BoilerProps = BoilerStoreProps & BoilerStoreActions;

class BoilerComponent extends React.Component<BoilerProps, {}> {
    public render(): JSX.Element {
        return <div className='row animated fadeIn'>
            <div className='col-md-5 d-none d-sm-none d-md-flex flex-column align-items-center'>
                <img width='250' className='app-main-image' alt='Boiler Room Main Image' src={StepImage}/>
            </div>
            <div className='col-sm-12 col-md-7 d-flex flex-column justify-content-center card text-dark position-relative border-0'>
                <Progress className='app-room-progress'
                          height={15}
                          active={this.props.bundles.filter((bundle: BundleModel) => bundle.checked === true).length}
                          count={this.props.bundles.length}
                />
                <div className='row card-body'>
                    <div className='col-sm-12 card-title mt-4'>
                        <h1 className='display-4 mb-0'>Boiler Room</h1>
                    </div>
                    <div className='col-sm-12 card-text'>
                        <div className='row'>
                            {this.props.bundles.map((bundle: BundleModel, index: number) => {
                                return <Bundle checkAction={this.props.checkAction} bundle={bundle} key={'boiler-' + index}/>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export const Boiler: ComponentClass<Pick<BoilerProps, never>, {}> = connect(
    (state: StoreState): BoilerStoreProps => {
        return {
            bundles: state.boiler
        };
    },
    (dispatch: Dispatch): BoilerStoreActions => {
        return {
            checkAction: (bundle: BundleModel): StoreActionTypes => dispatch(checkBoilerBundleActionCreator(bundle))
        };
    }
)(BoilerComponent);
