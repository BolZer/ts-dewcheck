import * as React from 'react';
import {combineReducers, createStore, Store} from 'redux';
import {boiler, bulletin, craft, fishTank, pantry, vault} from './reducers';
import {StoreState} from './types';
import LockrStatic = lockr.LockrStatic;

const BundleBlueImage: string = require('../assets/img/bundles/bundle_blue.png');
const BundleRedImage: string = require('../assets/img/bundles/bundle_red.png');
const BundleGreenImage: string = require('../assets/img/bundles/bundle_green.png');
const BundleOrangeImage: string = require('../assets/img/bundles/bundle_orange.png');
const BundlePurpleImage: string = require('../assets/img/bundles/bundle_purple.png');
const BundleTealImage: string = require('../assets/img/bundles/bundle_teal.png');
const BundleYellowImage: string = require('../assets/img/bundles/bundle_yellow.png');

const TestResourceImage: string = require('../assets/img/resources/bundle_resource_bat_wing.png');

export const CHECK_PANTRY_BUNDLE: string = 'CHECK_PANTRY_BUNDLE';
export const CHECK_CRAFT_BUNDLE: string = 'CHECK_CRAFT_BUNDLE';
export const CHECK_BOILER_BUNDLE: string = 'CHECK_BOILER_BUNDLE';
export const CHECK_VAULT_BUNDLE: string = 'CHECK_VAULT_BUNDLE';
export const CHECK_FISH_TANK_BUNDLE: string = 'CHECK_FISH_TANK_BUNDLE';
export const CHECK_BULLETIN_BUNDLE: string = 'CHECK_BULLETIN_BUNDLE';

const lockr: LockrStatic = require('lockr');

export const appState: StoreState = {
    craft: [
        {
            checked: false,
            description: 'Spring Foraging Bundle',
            icon_url: BundleGreenImage,
            resources: [
                {
                    description: 'Wild Horseradish',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wild_Horseradish'
                }, {
                    description: 'Daffodil',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Daffodil'
                }, {
                    description: 'Leek',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Leek'
                }, {
                    description: 'Dandelion',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Dandelion'
                }
            ]
        },
        {
            checked: false,
            description: 'Summer Foraging Bundle',
            icon_url: BundleYellowImage,
            resources: [
                {
                    description: 'Grape',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Grape'
                }, {
                    description: 'Spice Berry',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Spice_Berry'
                }, {
                    description: 'Sweet Pea',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Sweet_Pea'
                }
            ]
        },
        {
            checked: false,
            description: 'Fall Foraging Bundle',
            icon_url: BundleOrangeImage,
            resources: [
                {
                    description: 'Common Mushroom',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wild_Horseradish'
                }, {
                    description: 'Wild Plum',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wild_Plum'
                }, {
                    description: 'Hazelnut',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Hazelnut'
                }, {
                    description: 'Blackberry',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Blackberry'
                }
            ]
        },
        {
            checked: false,
            description: 'Winter Foraging Bundle',
            icon_url: BundleTealImage,
            resources: [
                {
                    description: 'Winter Root',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Winter_Root'
                }, {
                    description: 'Crystal Fruit',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Crystal_Fruit'
                }, {
                    description: 'Snow Yam',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Snow_Yam'
                }, {
                    description: 'Crocus',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Crocus'
                }
            ]
        }, {
            checked: false,
            description: 'Construction Bundle',
            icon_url: BundleRedImage,
            resources: [
                {
                    description: '99 x Wood',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wood'
                }, {
                    description: '99 x Wood',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wood'
                }, {
                    description: '99 x Stone',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Stone'
                }, {
                    description: '10 x Hardwood',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Hardwood'
                }
            ]
        },
        {
            checked: false,
            description: 'Exotic Foraging Bundle',
            icon_url: BundlePurpleImage,
            resources: [
                {
                    description: 'Coconut',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Coconut'
                }, {
                    description: 'Cactus Fruit',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Cactus_Fruit'
                }, {
                    description: 'Cave Carrot',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Cave_Carrot'
                }, {
                    description: 'Red Mushroom',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Red_Mushroom'
                }, {
                    description: 'Purple Mushroom',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Purple_Mushroom'
                }, {
                    description: 'Maple Syrup',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Maple_Syrup'
                }, {
                    description: 'Oak Resin',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Oak_Resin'
                }, {
                    description: 'Pine Tar',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Pine_Tar'
                }, {
                    description: 'Morel',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Morel'
                }
            ]
        }
    ],
    pantry: [
        {
            checked: false,
            description: 'Spring Crops Bundle',
            icon_url: BundleGreenImage,
            resources: [
                {
                    description: 'Parsnip',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Parsnip'
                }, {
                    description: 'Green Bean',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Green_Bean'
                }, {
                    description: 'Cauliflower',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Cauliflower'
                }, {
                    description: 'Potato',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Potato'
                }
            ]
        },
        {
            checked: false,
            description: 'Summer Crops Bundle',
            icon_url: BundleYellowImage,
            resources: [
                {
                    description: 'Tomato',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Tomato'
                }, {
                    description: 'Hot Pepper',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Hot_Pepper'
                }, {
                    description: 'Blueberry',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Blueberry'
                }, {
                    description: 'Melon',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Melon'
                }
            ]
        },
        {
            checked: false,
            description: 'Fall Crops Bundle',
            icon_url: BundleOrangeImage,
            resources: [
                {
                    description: 'Corn',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Corn'
                }, {
                    description: 'Eggplant',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Eggplant'
                }, {
                    description: 'Pumpkin',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Pumpkin'
                }, {
                    description: 'Yam',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Yam'
                }
            ]
        },
        {
            checked: false,
            description: 'Quality Crops Bundle',
            icon_url: BundleTealImage,
            resources: [
                {
                    description: '5 x Parsnip (Gold Quality)',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Parsnip'
                }, {
                    description: '5 x Melon (Gold Quality)',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Melon'
                }, {
                    description: '5 x Pumpkin (Gold Quality)',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Pumpkin'
                }, {
                    description: '5 x Corn (Gold Quality)',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Corn'
                }
            ]
        }, {
            checked: false,
            description: 'Animal Bundle',
            icon_url: BundleRedImage,
            resources: [
                {
                    description: 'Large Milk',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Large_Milk'
                }, {
                    description: 'Large Egg (Brown)',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Large_Egg'
                }, {
                    description: 'Large Egg',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Large_Egg'
                }, {
                    description: 'Large Goat Milk',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Large_Goat_Milk'
                }, {
                    description: 'Wool',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wool'
                }, {
                    description: 'Duck Egg',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Duck_Egg'
                }
            ]
        }, {
            checked: false,
            description: 'Artisan Bundle',
            icon_url: BundlePurpleImage,
            resources: [
                {
                    description: 'Truffle Oil',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Truffle_Oil'
                }, {
                    description: 'Cloth',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Cloth'
                }, {
                    description: 'Goat Cheese',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Goat_Cheese'
                }, {
                    description: 'Cheese',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Cheese'
                }, {
                    description: 'Honey',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Honey'
                }, {
                    description: 'Jelly',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Jelly'
                }, {
                    description: 'Apple',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Apple'
                }, {
                    description: 'Apricot',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Apricot'
                }, {
                    description: 'Orange',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Orange'
                }, {
                    description: 'Peach',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Peach'
                }, {
                    description: 'Pomegranate',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Pomegranate'
                }, {
                    description: 'Cherry',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Cherry'
                }
            ]
        }
    ],
    boiler: [
        {
            checked: false,
            description: 'Blacksmith\'s Bundle',
            icon_url: BundleOrangeImage,
            resources: [
                {
                    description: 'Copper Bar',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Copper_Bar'
                }, {
                    description: 'Iron Bar',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Iron_Bar'
                }, {
                    description: 'Gold Bar',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Gold_Bar'
                }
            ]
        },
        {
            checked: false,
            description: 'Geologist\'s Bundle',
            icon_url: BundlePurpleImage,
            resources: [
                {
                    description: 'Quartz',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Quart'
                }, {
                    description: 'Earth Crystal',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Earth_Crystal'
                }, {
                    description: 'Frozen Tear',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Frozen_tear'
                }, {
                    description: 'Fire Quartz',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Fire_Quartz'
                }
            ]
        },
        {
            checked: false,
            description: 'Adventurer\'s Bundle',
            icon_url: BundlePurpleImage,
            resources: [
                {
                    description: '99 X Slime',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Quart'
                }, {
                    description: '10 X Bat Wing',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Bat_Wing'
                }, {
                    description: 'Solar Essence',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Solar_Essence'
                }, {
                    description: 'Void Essence',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Void_Essence'
                }
            ]
        }
    ],
    vault: [
        {
            checked: false,
            description: '2.500 Bundle',
            icon_url: BundleRedImage,
            resources: [
                {
                    description: '2.500g',
                    icon_url: TestResourceImage,
                    wiki_url: ''
                }
            ]
        },
        {
            checked: false,
            description: '5.000 Bundle',
            icon_url: BundleOrangeImage,
            resources: [
                {
                    description: '5.000g',
                    icon_url: TestResourceImage,
                    wiki_url: ''
                }
            ]
        },
        {
            checked: false,
            description: '10.000 Bundle',
            icon_url: BundleYellowImage,
            resources: [
                {
                    description: '10.000g',
                    icon_url: TestResourceImage,
                    wiki_url: ''
                }
            ]
        },
        {
            checked: false,
            description: '25.000 Bundle',
            icon_url: BundlePurpleImage,
            resources: [
                {
                    description: '25.000g',
                    icon_url: TestResourceImage,
                    wiki_url: ''
                }
            ]
        }
    ],
    fishTank: [
        {
            checked: false,
            description: 'River Fish Bundle',
            icon_url: BundleTealImage,
            resources: [
                {
                    description: 'Sunfish',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Sunfish'
                }, {
                    description: 'Catfish',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Catfish'
                }, {
                    description: 'Shad',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Shad'
                }, {
                    description: 'Tiger Trout',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Tiger_Trout'
                }
            ]
        },
        {
            checked: false,
            description: 'Lake Fish Bundle',
            icon_url: BundleGreenImage,
            resources: [
                {
                    description: 'Largemouth Bass',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Largemouth_Bass'
                }, {
                    description: 'Carp',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Carp'
                }, {
                    description: 'Bullhead',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Bullhead'
                }, {
                    description: 'Sturgeon',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Sturgeon'
                }
            ]
        },
        {
            checked: false,
            description: 'Ocean Fish Bundle',
            icon_url: BundleBlueImage,
            resources: [
                {
                    description: 'Sardine',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Sardine'
                }, {
                    description: 'Tuna',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Tuna'
                }, {
                    description: 'Bullhead',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Red_Snapper'
                }, {
                    description: 'Tilapia',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Tilapia'
                }
            ]
        },
        {
            checked: false,
            description: 'Night Fishing Bundle',
            icon_url: BundlePurpleImage,
            resources: [
                {
                    description: 'Walleye',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Walleye'
                }, {
                    description: 'Bream',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Bream'
                }, {
                    description: 'Eel',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Eel'
                }
            ]
        },
        {
            checked: false,
            description: 'Crab Pot Bundle',
            icon_url: BundlePurpleImage,
            resources: [
                {
                    description: 'Lobster',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Lobster'
                }, {
                    description: 'Crayfish',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Crayfish'
                }, {
                    description: 'Crab',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Crab'
                }, {
                    description: 'Cockle',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Cockle'
                }, {
                    description: 'Mussel',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Mussel'
                }, {
                    description: 'Shrimp',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Shrimp'
                }, {
                    description: 'Snail',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Snail'
                }, {
                    description: 'Periwinkle',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Periwinkle'
                }, {
                    description: 'Oyster',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Oyster'
                }, {
                    description: 'Clam',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Clam'
                }
            ]
        }, {
            checked: false,
            description: 'Specialty Fish Bundle',
            icon_url: BundleRedImage,
            resources: [
                {
                    description: 'Pufferfish',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Pufferfish'
                }, {
                    description: 'Ghostfish',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Ghostfish'
                }, {
                    description: 'Sandfish',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Sandfish'
                }, {
                    description: 'Woodskip',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Woodskip'
                }
            ]
        }
    ],
    bulletin: [
        {
            checked: false,
            description: 'Chef\'s Bundle',
            icon_url: BundleRedImage,
            resources: [
                {
                    description: 'Maple Syrup',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Maple_Syrup'
                }, {
                    description: 'Fiddlehead Fern',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Fiddlehead_Fern'
                }, {
                    description: 'Truffle',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Truffle'
                }, {
                    description: 'Poppy',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Poppy'
                }, {
                    description: 'Maki Roll',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Maki_Roll'
                }, {
                    description: 'Fried Egg',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Fried_Egg'
                }
            ]
        },
        {
            checked: false,
            description: 'Dye Bundle',
            icon_url: BundleTealImage,
            resources: [
                {
                    description: 'Red Mushroom',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Red_Mushroom'
                }, {
                    description: 'Sea Urchin',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Sea_Urchin'
                }, {
                    description: 'Sunflower',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Sunflower'
                }, {
                    description: 'Duck Feather',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Duck_Feather'
                }, {
                    description: 'Aquamarine',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Aquamarine'
                }, {
                    description: 'Red Cabbage',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Red_Cabbage'
                }
            ]
        },
        {
            checked: false,
            description: 'Field Research Bundle',
            icon_url: BundleBlueImage,
            resources: [
                {
                    description: 'Purple Mushroom',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Purple_Mushroom'
                }, {
                    description: 'Nautilus Shell',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Nautilus_Shell'
                }, {
                    description: 'Chub',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Chub'
                }, {
                    description: 'Frozen Geode',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Frozen_Geode'
                }
            ]
        },
        {
            checked: false,
            description: 'Fodder Bundle',
            icon_url: BundleYellowImage,
            resources: [
                {
                    description: '10 x Wheat',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wheat'
                }, {
                    description: '10 x Hay',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Hay'
                }, {
                    description: '3 x Apple',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Apple'
                }
            ]
        },
        {
            checked: false,
            description: 'Enchanter\'s Bundle',
            icon_url: BundlePurpleImage,
            resources: [
                {
                    description: 'Oak Resin',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Oak_Resin'
                }, {
                    description: 'Wine',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wine'
                }, {
                    description: 'Rabbit\'s Foot',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Rabbit%27s_Foot'
                }, {
                    description: 'Pomegranate',
                    icon_url: TestResourceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Pomegranate'
                }
            ]
        }
    ]

};

const store: Store = createStore(
    combineReducers({
        craft,
        pantry,
        boiler,
        vault,
        fishTank,
        bulletin
    }),
    lockr.get('dew_app', {}),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => lockr.set('dew_app', store.getState()));

export default store;
