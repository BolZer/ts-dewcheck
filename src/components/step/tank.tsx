import * as React from 'react';
import {ComponentClass} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Bundle} from '../utility/bundle';
import {Progress} from '../utility/progress';
import {BundleModel, StoreActionTypes, StoreState} from '../../store/types';
import {checkFishTankBundleActionCreator} from '../../store/actions';

const StepImage: string = require('../../assets/img/tank/bundle_main_alt.png');

interface FishTankStoreProps {
    bundles: BundleModel[];
}

interface FishTankStoreActions {
    checkAction: typeof checkFishTankBundleActionCreator;
}

type FishTankProps = FishTankStoreProps & FishTankStoreActions;

class FishTankComponent extends React.Component<FishTankProps, {}> {
    public render(): JSX.Element {
        return <div className='row animated fadeIn'>
            <div className='col-md-5 d-none d-sm-none d-md-flex flex-column align-items-center'>
                <img width='250' className='app-main-image' alt='Fish Tank Main Image' src={StepImage}/>
            </div>
            <div className='col-sm-12 col-md-7 d-flex flex-column justify-content-center card text-dark position-relative border-0'>
                <Progress className='app-room-progress'
                          height={15}
                          active={this.props.bundles.filter((bundle: BundleModel) => bundle.checked === true).length}
                          count={this.props.bundles.length}
                />
                <div className='row card-body'>
                    <div className='col-sm-12 card-title mt-4'>
                        <h1 className='display-4 mb-0'>Fish Tank</h1>
                    </div>
                    <div className='col-sm-12 card-text'>
                        <div className='row'>
                            {this.props.bundles.map((bundle: BundleModel, index: number) => {
                                return <Bundle checkAction={this.props.checkAction} bundle={bundle} key={'tank-' + index}/>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export const FishTank: ComponentClass<Pick<FishTankProps, never>, {}> = connect(
    (state: StoreState): FishTankStoreProps => {
        return {
            bundles: state.fishTank
        };
    },
    (dispatch: Dispatch): FishTankStoreActions => {
        return {
            checkAction: (bundle: BundleModel): StoreActionTypes => dispatch(checkFishTankBundleActionCreator(bundle))
        };
    }
)(FishTankComponent);
