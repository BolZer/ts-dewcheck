import * as React from 'react';
import {ComponentClass} from 'react';
import {connect} from 'react-redux';
import {OverviewPanel} from '../utility/overview_panel';
import {BundleModel, StoreState} from '../../store/types';

const PantryStepImage: string = require('../../assets/img/pantry/bundle_main_alt.png');
const CraftsStepImage: string = require('../../assets/img/crafts/bundle_main_alt.png');
const BoilerStepImage: string = require('../../assets/img/boiler/bundle_main_alt.png');
const VaultStepImage: string = require('../../assets/img/vault/bundle_main_alt.png');
const FishTankStepImage: string = require('../../assets/img/tank/bundle_main_alt.png');
const BulletinStepImage: string = require('../../assets/img/bulletin/bundle_main_alt.png');

interface OverviewProps {
    pantryBundles: BundleModel[];
    craftsBundles: BundleModel[];
    boilerBundles: BundleModel[];
    vaultBundles: BundleModel[];
    fishTankBundles: BundleModel[];
    bulletinBoardBundles: BundleModel[];
}

class OverviewComponent extends React.Component<OverviewProps, {}> {
    public render(): JSX.Element {
        return <div className={'row animated fadeIn w-100'}>
            <div className={'col-sm-12'}>
                <OverviewPanel
                    icon={<i className='fas d-inline fa-fw fa-apple-crate mr-2'/>}
                    title={'Pantry Room'}
                    imgSrc={PantryStepImage}
                    active={this.props.pantryBundles.filter((bundle: BundleModel) => bundle.checked === true).length}
                    count={this.props.pantryBundles.length}
                    route={'/pantry'}
                />
                <OverviewPanel
                    icon={<i className='fas d-inline fa-fw fa-sack-dollar mr-2'/>}
                    title={'Vault'}
                    imgSrc={VaultStepImage}
                    active={this.props.vaultBundles.filter((bundle: BundleModel) => bundle.checked === true).length}
                    count={this.props.vaultBundles.length}
                    route={'/vault'}
                />
                <OverviewPanel
                    icon={<i className='fas d-inline fa-fw fa-pencil-ruler mr-2'/>}
                    title={'Crafts Room'}
                    imgSrc={CraftsStepImage}
                    active={this.props.craftsBundles.filter((bundle: BundleModel) => bundle.checked === true).length}
                    count={this.props.craftsBundles.length}
                    route={'/craft'}
                />
                <OverviewPanel
                    icon={<i className='fas d-inline fa-fw fa-temperature-hot mr-2'/>}
                    title={'Boiler Room'}
                    imgSrc={BoilerStepImage}
                    active={this.props.boilerBundles.filter((bundle: BundleModel) => bundle.checked === true).length}
                    count={this.props.boilerBundles.length}
                    route={'/boiler'}
                />
                <OverviewPanel
                    icon={<i className='fas d-inline fa-fw fa-fish mr-2'/>}
                    title={'Fish Tank'}
                    imgSrc={FishTankStepImage}
                    active={this.props.fishTankBundles.filter((bundle: BundleModel) => bundle.checked === true).length}
                    count={this.props.fishTankBundles.length}
                    route={'/fishtank'}
                />
                <OverviewPanel
                    icon={<i className='fas d-inline fa-fw fa-chalkboard mr-2'/>}
                    title={'Bulletin Board'}
                    imgSrc={BulletinStepImage}
                    active={this.props.bulletinBoardBundles.filter((bundle: BundleModel) => bundle.checked === true).length}
                    count={this.props.bulletinBoardBundles.length}
                    route={'/fishtank'}
                />
            </div>
        </div>;
    }
}

export const Overview: ComponentClass<Pick<{}, never>, {}> = connect(
    (state: StoreState): OverviewProps => {
        return {
            pantryBundles: state.pantry,
            craftsBundles: state.craft,
            boilerBundles: state.boiler,
            vaultBundles: state.vault,
            fishTankBundles: state.fishTank,
            bulletinBoardBundles: state.bulletin
        };
    }
)(OverviewComponent);
