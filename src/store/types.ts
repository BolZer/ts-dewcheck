import {
    CHECK_BOILER_BUNDLE,
    CHECK_BULLETIN_BUNDLE,
    CHECK_CRAFT_BUNDLE,
    CHECK_FISH_TANK_BUNDLE,
    CHECK_PANTRY_BUNDLE,
    CHECK_VAULT_BUNDLE
} from './store';

export interface StoreState {
    craft: BundleModel[];
    pantry: BundleModel[];
    boiler: BundleModel[];
    vault: BundleModel[];
    fishTank: BundleModel[];
    bulletin: BundleModel[];
}

export interface BundleModel {
    checked: boolean;
    resources: ResourceModel[];
    description: string;
    icon_url: string;
}

export interface ResourceModel {
    description: string;
    icon_url: string;
    wiki_url: string;
}

export interface CheckPantryBundleActionCreator {
    type: typeof CHECK_PANTRY_BUNDLE;
    payload?: BundleModel;
}

export interface CheckCraftBundleActionCreator {
    type: typeof CHECK_CRAFT_BUNDLE;
    payload?: BundleModel;
}

export interface CheckBoilerBundleActionCreator {
    type: typeof CHECK_BOILER_BUNDLE;
    payload?: BundleModel;
}

export interface CheckVaultBundleActionCreator {
    type: typeof CHECK_VAULT_BUNDLE;
    payload?: BundleModel;
}

export interface CheckFishTankBundleActionCreator {
    type: typeof CHECK_FISH_TANK_BUNDLE;
    payload?: BundleModel;
}

export interface CheckBulletinBundleActionCreator {
    type: typeof CHECK_BULLETIN_BUNDLE;
    payload?: BundleModel;
}

export type StoreActionTypes =
    CheckPantryBundleActionCreator &
    CheckCraftBundleActionCreator &
    CheckBoilerBundleActionCreator &
    CheckVaultBundleActionCreator &
    CheckFishTankBundleActionCreator &
    CheckBulletinBundleActionCreator
    ;
