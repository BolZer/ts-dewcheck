import * as React from 'react';
import {ComponentClass} from 'react';
import {connect} from 'react-redux';
import {BundleModel, StoreState} from '../../store/types';
import {OverviewPanel} from '../utility/overview_panel';

import * as BoilerStepImage from '../../assets/img/boiler/bundle_main_alt.png';
import * as BulletinStepImage from '../../assets/img/bulletin/bundle_main_alt.png';
import * as CraftsStepImage from '../../assets/img/crafts/bundle_main_alt.png';
import * as PantryStepImage from '../../assets/img/pantry/bundle_main_alt.png';
import * as FishTankStepImage from '../../assets/img/tank/bundle_main_alt.png';
import * as VaultStepImage from '../../assets/img/vault/bundle_main_alt.png';

interface IOverviewProps {
    pantryBundles: BundleModel[];
    craftsBundles: BundleModel[];
    boilerBundles: BundleModel[];
    vaultBundles: BundleModel[];
    fishTankBundles: BundleModel[];
    bulletinBoardBundles: BundleModel[];
}

class OverviewComponent extends React.Component<IOverviewProps, {}> {
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
    (state: StoreState): IOverviewProps => {
        return {
            boilerBundles: state.boiler,
            bulletinBoardBundles: state.bulletin,
            craftsBundles: state.craft,
            fishTankBundles: state.fishTank,
            pantryBundles: state.pantry,
            vaultBundles: state.vault,
        };
    }
)(OverviewComponent);
