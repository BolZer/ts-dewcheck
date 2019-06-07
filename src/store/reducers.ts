import * as _ from 'lodash';
import {
    appState,
    CHECK_BOILER_BUNDLE,
    CHECK_BULLETIN_BUNDLE,
    CHECK_CRAFT_BUNDLE,
    CHECK_FISH_TANK_BUNDLE,
    CHECK_PANTRY_BUNDLE,
    CHECK_VAULT_BUNDLE
} from './store';
import {BundleModel, StoreActionTypes} from './types';

export function craft(state: BundleModel[] = appState.craft, action: StoreActionTypes): any {
    if (action.type === CHECK_CRAFT_BUNDLE) {
        return checkOrUncheckBundle(state, action);
    }

    return state;
}

export function pantry(state: BundleModel[] = appState.pantry, action: StoreActionTypes): any {
    if (action.type === CHECK_PANTRY_BUNDLE) {
        return checkOrUncheckBundle(state, action);
    }

    return state;
}

export function boiler(state: BundleModel[] = appState.boiler, action: StoreActionTypes): any {
    if (action.type === CHECK_BOILER_BUNDLE) {
        return checkOrUncheckBundle(state, action);
    }

    return state;
}

export function vault(state: BundleModel[] = appState.vault, action: StoreActionTypes): any {
    if (action.type === CHECK_VAULT_BUNDLE) {
        return checkOrUncheckBundle(state, action);
    }

    return state;
}

export function fishTank(state: BundleModel[] = appState.fishTank, action: StoreActionTypes): any {
    if (action.type === CHECK_FISH_TANK_BUNDLE) {
        return checkOrUncheckBundle(state, action);
    }

    return state;
}

export function bulletin(state: BundleModel[] = appState.bulletin, action: StoreActionTypes): any {
    if (action.type === CHECK_BULLETIN_BUNDLE) {
        return checkOrUncheckBundle(state, action);
    }

    return state;
}

function checkOrUncheckBundle(state: BundleModel[], action: StoreActionTypes): BundleModel[] {
    return state.map((bundle: BundleModel): BundleModel => {
        if (bundle.description === action.payload.description) {
            const clonedObject: BundleModel = _.clone(bundle);
            clonedObject.checked = !clonedObject.checked;
            return clonedObject;
        }

        return bundle;
    });
}
