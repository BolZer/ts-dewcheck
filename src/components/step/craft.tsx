import * as React from 'react';
import {ComponentClass} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Bundle} from '../utility/bundle';
import {Progress} from '../utility/progress';
import {BundleModel, StoreActionTypes, StoreState} from '../../store/types';
import {checkCraftBundleActionCreator} from '../../store/actions';

const StepImage: string = require('../../assets/img/crafts/bundle_main_alt.png');

interface CraftStoreProps {
    bundles: BundleModel[];
}

interface CraftStoreActions {
    checkAction: typeof checkCraftBundleActionCreator;
}

type CraftProps = CraftStoreProps & CraftStoreActions;

class CraftComponent extends React.Component<CraftProps, {}> {
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
                        <h1 className='display-4 mb-0'>Crafts Room</h1>
                    </div>
                    <div className='col-sm-12 card-text'>
                        <div className='row'>
                            {this.props.bundles.map((bundle: BundleModel, index: number) => {
                                return <Bundle checkAction={this.props.checkAction} bundle={bundle} key={'craft-' + index}/>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export const Craft: ComponentClass<Pick<CraftProps, never>, {}> = connect(
    (state: StoreState): CraftStoreProps => {
        return {
            bundles: state.craft
        };
    },
    (dispatch: Dispatch): CraftStoreActions => {
        return {
            checkAction: (bundle: BundleModel): StoreActionTypes => dispatch(checkCraftBundleActionCreator(bundle))
        };
    }
)(CraftComponent);
