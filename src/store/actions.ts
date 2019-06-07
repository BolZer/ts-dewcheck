import {
    CHECK_BOILER_BUNDLE,
    CHECK_BULLETIN_BUNDLE,
    CHECK_CRAFT_BUNDLE,
    CHECK_FISH_TANK_BUNDLE,
    CHECK_PANTRY_BUNDLE,
    CHECK_VAULT_BUNDLE
} from './store';
import {BundleModel, StoreActionTypes} from './types';

export function checkPantryBundleActionCreator(payload: BundleModel): StoreActionTypes {
    return {
        type: CHECK_PANTRY_BUNDLE,
        payload
    };
}

export function checkCraftBundleActionCreator(payload: BundleModel): StoreActionTypes {
    return {
        type: CHECK_CRAFT_BUNDLE,
        payload
    };
}

export function checkBoilerBundleActionCreator(payload: BundleModel): StoreActionTypes {
    return {
        type: CHECK_BOILER_BUNDLE,
        payload
    };
}

export function checkVaultBundleActionCreator(payload: BundleModel): StoreActionTypes {
    return {
        type: CHECK_VAULT_BUNDLE,
        payload
    };
}

export function checkFishTankBundleActionCreator(payload: BundleModel): StoreActionTypes {
    return {
        type: CHECK_FISH_TANK_BUNDLE,
        payload
    };
}

export function checkBulletinBundleActionCreator(payload: BundleModel): StoreActionTypes {
    return {
        type: CHECK_BULLETIN_BUNDLE,
        payload
    };
}
