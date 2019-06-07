import * as React from 'react';
import {ComponentClass} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {checkVaultBundleActionCreator} from '../../store/actions';
import {BundleModel, StoreActionTypes, StoreState} from '../../store/types';
import {Bundle} from '../utility/bundle';
import {Progress} from '../utility/progress';

const StepImage: string = require('../../assets/img/vault/bundle_main_alt.png');

interface VaultStoreProps {
    bundles: BundleModel[];
}

interface VaultStoreActions {
    checkAction: typeof checkVaultBundleActionCreator;
}

type VaultProps = VaultStoreProps & VaultStoreActions;

class VaultComponent extends React.Component<VaultProps, {}> {
    public render(): JSX.Element {
        return <div className='row animated fadeIn'>
            <div className='col-md-5 d-none d-sm-none d-md-flex flex-column align-items-center'>
                <img width='250' className='app-main-image' alt='Vault Room Main Image' src={StepImage}/>
            </div>
            <div className='col-sm-12 col-md-7 d-flex flex-column justify-content-center card text-dark position-relative border-0'>
                <Progress className='app-room-progress'
                          height={15}
                          active={this.props.bundles.filter((bundle: BundleModel) => bundle.checked === true).length}
                          count={this.props.bundles.length}
                />
                <div className='row card-body'>
                    <div className='col-sm-12 card-title mt-4'>
                        <h1 className='display-4 mb-0'>Vault</h1>
                    </div>
                    <div className='col-sm-12 card-text'>
                        <div className='row'>
                            {this.props.bundles.map((bundle: BundleModel, index: number) => {
                                return <Bundle checkAction={this.props.checkAction} bundle={bundle} key={'vault-' + index}/>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export const Vault: ComponentClass<Pick<VaultProps, never>, {}> = connect(
    (state: StoreState): VaultStoreProps => {
        return {
            bundles: state.vault
        };
    },
    (dispatch: Dispatch): VaultStoreActions => {
        return {
            checkAction: (bundle: BundleModel): StoreActionTypes => dispatch(checkVaultBundleActionCreator(bundle))
        };
    }
)(VaultComponent);
