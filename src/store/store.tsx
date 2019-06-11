import * as lockr from 'lockr';
import * as React from 'react';
import {combineReducers, createStore, Store} from 'redux';
import * as BundleBlueImage from '../assets/img/bundles/bundle_blue.png';
import * as BundleGreenImage from '../assets/img/bundles/bundle_green.png';
import * as BundleOrangeImage from '../assets/img/bundles/bundle_orange.png';
import * as BundlePurpleImage from '../assets/img/bundles/bundle_purple.png';
import * as BundleRedImage from '../assets/img/bundles/bundle_red.png';
import * as BundleTealImage from '../assets/img/bundles/bundle_teal.png';
import * as BundleYellowImage from '../assets/img/bundles/bundle_yellow.png';
import * as AppleImage from '../assets/img/resources/bundle_resource_apple.png';
import * as ApricotImage from '../assets/img/resources/bundle_resource_apricot.png';
import * as AquamarineImage from '../assets/img/resources/bundle_resource_aquamarine.png';
import * as BatWingImage from '../assets/img/resources/bundle_resource_bat_wing.png';
import * as BlackberryImage from '../assets/img/resources/bundle_resource_blackberry.png';
import * as BlueberryImage from '../assets/img/resources/bundle_resource_blueberry.png';
import * as BreamImage from '../assets/img/resources/bundle_resource_bream.png';
import * as BullheadImage from '../assets/img/resources/bundle_resource_bullhead.png';
import * as CactusFruitImage from '../assets/img/resources/bundle_resource_cactus_fruit.png';
import * as CarpImage from '../assets/img/resources/bundle_resource_carp.png';
import * as CatfishImage from '../assets/img/resources/bundle_resource_catfish.png';
import * as CauliflowerImage from '../assets/img/resources/bundle_resource_cauliflower.png';
import * as CaveCarrotImage from '../assets/img/resources/bundle_resource_cave_carrot.png';
import * as CheeseImage from '../assets/img/resources/bundle_resource_cheese.png';
import * as CherryImage from '../assets/img/resources/bundle_resource_cherry.png';
import * as ChubImage from '../assets/img/resources/bundle_resource_chub.png';
import * as ClamImage from '../assets/img/resources/bundle_resource_clam.png';
import * as ClothImage from '../assets/img/resources/bundle_resource_cloth.png';
import * as CockleImage from '../assets/img/resources/bundle_resource_cockle.png';
import * as CoconutImage from '../assets/img/resources/bundle_resource_coconut.png';
import * as CommonMushroomImage from '../assets/img/resources/bundle_resource_common_mushroom.png';
import * as CopperBarImage from '../assets/img/resources/bundle_resource_copper_bar.png';
import * as CornImage from '../assets/img/resources/bundle_resource_corn.png';
import * as CrabImage from '../assets/img/resources/bundle_resource_crab.png';
import * as CrayfishImage from '../assets/img/resources/bundle_resource_crayfish.png';
import * as CrocusImage from '../assets/img/resources/bundle_resource_crocus.png';
import * as CrystalFruitImage from '../assets/img/resources/bundle_resource_crystal_fruit.png';
import * as DaffodilImage from '../assets/img/resources/bundle_resource_daffodil.png';
import * as DandelionImage from '../assets/img/resources/bundle_resource_dandelion.png';
import * as DuckEggImage from '../assets/img/resources/bundle_resource_duck_egg.png';
import * as DuckFeatherImage from '../assets/img/resources/bundle_resource_duck_feather.png';
import * as EarthCrystalImage from '../assets/img/resources/bundle_resource_earth_crystal.png';
import * as EelImage from '../assets/img/resources/bundle_resource_eel.png';
import * as EggplantImage from '../assets/img/resources/bundle_resource_eggplant.png';
import * as FiddleheadFernImage from '../assets/img/resources/bundle_resource_fiddlehead_fern.png';
import * as FireQuartzImage from '../assets/img/resources/bundle_resource_fire_quartz.png';
import * as FriedEggImage from '../assets/img/resources/bundle_resource_fried_egg.png';
import * as FrozenGeodeImage from '../assets/img/resources/bundle_resource_frozen_geode.png';
import * as FrozenTearImage from '../assets/img/resources/bundle_resource_frozen_tear.png';
import * as GhostfishImage from '../assets/img/resources/bundle_resource_ghostfish.png';
import * as GoatCheeseImage from '../assets/img/resources/bundle_resource_goat_cheese.png';
import * as GoldImage from '../assets/img/resources/bundle_resource_gold.png';
import * as GoldBarImage from '../assets/img/resources/bundle_resource_gold_bar.png';
import * as GrapeImage from '../assets/img/resources/bundle_resource_grape.png';
import * as GreenBeanImage from '../assets/img/resources/bundle_resource_green_bean.png';
import * as HardWoodImage from '../assets/img/resources/bundle_resource_hardwood.png';
import * as HayImage from '../assets/img/resources/bundle_resource_hay.png';
import * as HazelnutImage from '../assets/img/resources/bundle_resource_hazelnut.png';
import * as HoneyImage from '../assets/img/resources/bundle_resource_honey.png';
import * as HotPepperImage from '../assets/img/resources/bundle_resource_hot_pepper.png';
import * as IronBarImage from '../assets/img/resources/bundle_resource_iron_bar.png';
import * as JellyImage from '../assets/img/resources/bundle_resource_jelly.png';
import * as LargeEggBrownImage from '../assets/img/resources/bundle_resource_large_brown_egg.png';
import * as LargeEggImage from '../assets/img/resources/bundle_resource_large_egg.png';
import * as LargeGoatMilkImage from '../assets/img/resources/bundle_resource_large_goat_milk.png';
import * as LargeMilkImage from '../assets/img/resources/bundle_resource_large_milk.png';
import * as LargemouthBassImage from '../assets/img/resources/bundle_resource_largemouth_bass.png';
import * as LeekImage from '../assets/img/resources/bundle_resource_leek.png';
import * as LobsterImage from '../assets/img/resources/bundle_resource_lobster.png';
import * as MakiRollImage from '../assets/img/resources/bundle_resource_maki_roll.png';
import * as MapleSyrupImage from '../assets/img/resources/bundle_resource_maple_syrup.png';
import * as MelonImage from '../assets/img/resources/bundle_resource_melon.png';
import * as MorelImage from '../assets/img/resources/bundle_resource_morel.png';
import * as MusselImage from '../assets/img/resources/bundle_resource_mussel.png';
import * as NautilusShellImage from '../assets/img/resources/bundle_resource_nautilus_shell.png';
import * as OakResinImage from '../assets/img/resources/bundle_resource_oak_resin.png';
import * as OrangeImage from '../assets/img/resources/bundle_resource_orange.png';
import * as OysterImage from '../assets/img/resources/bundle_resource_oyster.png';
import * as ParsnipImage from '../assets/img/resources/bundle_resource_parsnip.png';
import * as PeachImage from '../assets/img/resources/bundle_resource_peach.png';
import * as PeriwinkleImage from '../assets/img/resources/bundle_resource_periwinkle.png';
import * as PineTarImage from '../assets/img/resources/bundle_resource_pine_tar.png';
import * as PomegranateImage from '../assets/img/resources/bundle_resource_pomegranate.png';
import * as PoppyImage from '../assets/img/resources/bundle_resource_poppy.png';
import * as PotatoImage from '../assets/img/resources/bundle_resource_potato.png';
import * as PufferfishImage from '../assets/img/resources/bundle_resource_pufferfish.png';
import * as PumpkinImage from '../assets/img/resources/bundle_resource_pumpkin.png';
import * as PurpleMushroomImage from '../assets/img/resources/bundle_resource_purple_mushroom.png';
import * as QuartzImage from '../assets/img/resources/bundle_resource_quartz.png';
import * as RabbitsFootImage from '../assets/img/resources/bundle_resource_rabbits_foot.png';
import * as RedCabbageImage from '../assets/img/resources/bundle_resource_red_cabbage.png';
import * as RedMushroomImage from '../assets/img/resources/bundle_resource_red_mushroom.png';
import * as SandfishImage from '../assets/img/resources/bundle_resource_sandfish.png';
import * as SardineImage from '../assets/img/resources/bundle_resource_sardine.png';
import * as SeaUrchinImage from '../assets/img/resources/bundle_resource_sea_urchin.png';
import * as ShadImage from '../assets/img/resources/bundle_resource_shad.png';
import * as ShrimpImage from '../assets/img/resources/bundle_resource_shrimp.png';
import * as SlimeImage from '../assets/img/resources/bundle_resource_slime.png';
import * as SnailImage from '../assets/img/resources/bundle_resource_snail.png';
import * as SnowYamImage from '../assets/img/resources/bundle_resource_snow_yam.png';
import * as SolarEssenceImage from '../assets/img/resources/bundle_resource_solar_essence.png';
import * as SpiceBerryImage from '../assets/img/resources/bundle_resource_spice_berry.png';
import * as StoneImage from '../assets/img/resources/bundle_resource_stone.png';
import * as SturgeonImage from '../assets/img/resources/bundle_resource_sturgeon.png';
import * as SunfishImage from '../assets/img/resources/bundle_resource_sunfish.png';
import * as SunflowerImage from '../assets/img/resources/bundle_resource_sunflower.png';
import * as SweetPeaImage from '../assets/img/resources/bundle_resource_sweet_pea.png';
import * as TigerTroutImage from '../assets/img/resources/bundle_resource_tiger_trout.png';
import * as TilapiaImage from '../assets/img/resources/bundle_resource_tilapia.png';
import * as TomatoImage from '../assets/img/resources/bundle_resource_tomato.png';
import * as TruffleImage from '../assets/img/resources/bundle_resource_truffle.png';
import * as TruffleOilImage from '../assets/img/resources/bundle_resource_truffle_oil.png';
import * as TunaImage from '../assets/img/resources/bundle_resource_tuna.png';
import * as VoidEssenceImage from '../assets/img/resources/bundle_resource_void_essence.png';
import * as WalleyeImage from '../assets/img/resources/bundle_resource_walleye.png';
import * as WheatImage from '../assets/img/resources/bundle_resource_wheat.png';
import * as WildHorseradishImage from '../assets/img/resources/bundle_resource_wild_horseradish.png';
import * as WildPlumImage from '../assets/img/resources/bundle_resource_wild_plum.png';
import * as WineImage from '../assets/img/resources/bundle_resource_wine.png';
import * as WinterRootImage from '../assets/img/resources/bundle_resource_winter_root.png';
import * as WoodImage from '../assets/img/resources/bundle_resource_wood.png';
import * as WoodskipImage from '../assets/img/resources/bundle_resource_woodskip.png';
import * as WoolImage from '../assets/img/resources/bundle_resource_wool.png';
import * as YamImage from '../assets/img/resources/bundle_resource_yam.png';
import {boiler, bulletin, craft, fishTank, pantry, vault} from './reducers';
import {StoreState} from './types';

export const CHECK_PANTRY_BUNDLE: string = 'CHECK_PANTRY_BUNDLE';
export const CHECK_CRAFT_BUNDLE: string = 'CHECK_CRAFT_BUNDLE';
export const CHECK_BOILER_BUNDLE: string = 'CHECK_BOILER_BUNDLE';
export const CHECK_VAULT_BUNDLE: string = 'CHECK_VAULT_BUNDLE';
export const CHECK_FISH_TANK_BUNDLE: string = 'CHECK_FISH_TANK_BUNDLE';
export const CHECK_BULLETIN_BUNDLE: string = 'CHECK_BULLETIN_BUNDLE';

export const appState: StoreState = {
    craft: [
        {
            checked: false,
            description: 'Spring Foraging Bundle',
            icon_url: BundleGreenImage,
            resources: [
                {
                    description: 'Wild Horseradish',
                    icon_url: WildHorseradishImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wild_Horseradish'
                }, {
                    description: 'Daffodil',
                    icon_url: DaffodilImage,
                    wiki_url: 'https://stardewvalleywiki.com/Daffodil'
                }, {
                    description: 'Leek',
                    icon_url: LeekImage,
                    wiki_url: 'https://stardewvalleywiki.com/Leek'
                }, {
                    description: 'Dandelion',
                    icon_url: DandelionImage,
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
                    icon_url: GrapeImage,
                    wiki_url: 'https://stardewvalleywiki.com/Grape'
                }, {
                    description: 'Spice Berry',
                    icon_url: SpiceBerryImage,
                    wiki_url: 'https://stardewvalleywiki.com/Spice_Berry'
                }, {
                    description: 'Sweet Pea',
                    icon_url: SweetPeaImage,
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
                    icon_url: CommonMushroomImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wild_Horseradish'
                }, {
                    description: 'Wild Plum',
                    icon_url: WildPlumImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wild_Plum'
                }, {
                    description: 'Hazelnut',
                    icon_url: HazelnutImage,
                    wiki_url: 'https://stardewvalleywiki.com/Hazelnut'
                }, {
                    description: 'Blackberry',
                    icon_url: BlackberryImage,
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
                    icon_url: WinterRootImage,
                    wiki_url: 'https://stardewvalleywiki.com/Winter_Root'
                }, {
                    description: 'Crystal Fruit',
                    icon_url: CrystalFruitImage,
                    wiki_url: 'https://stardewvalleywiki.com/Crystal_Fruit'
                }, {
                    description: 'Snow Yam',
                    icon_url: SnowYamImage,
                    wiki_url: 'https://stardewvalleywiki.com/Snow_Yam'
                }, {
                    description: 'Crocus',
                    icon_url: CrocusImage,
                    wiki_url: 'https://stardewvalleywiki.com/Crocus'
                }
            ]
        },
        {
            checked: false,
            description: 'Construction Bundle',
            icon_url: BundleRedImage,
            resources: [
                {
                    description: '99 x Wood',
                    icon_url: WoodImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wood'
                }, {
                    description: '99 x Wood',
                    icon_url: WoodImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wood'
                }, {
                    description: '99 x Stone',
                    icon_url: StoneImage,
                    wiki_url: 'https://stardewvalleywiki.com/Stone'
                }, {
                    description: '10 x Hardwood',
                    icon_url: HardWoodImage,
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
                    icon_url: CoconutImage,
                    wiki_url: 'https://stardewvalleywiki.com/Coconut'
                }, {
                    description: 'Cactus Fruit',
                    icon_url: CactusFruitImage,
                    wiki_url: 'https://stardewvalleywiki.com/Cactus_Fruit'
                }, {
                    description: 'Cave Carrot',
                    icon_url: CaveCarrotImage,
                    wiki_url: 'https://stardewvalleywiki.com/Cave_Carrot'
                }, {
                    description: 'Red Mushroom',
                    icon_url: RedMushroomImage,
                    wiki_url: 'https://stardewvalleywiki.com/Red_Mushroom'
                }, {
                    description: 'Purple Mushroom',
                    icon_url: PurpleMushroomImage,
                    wiki_url: 'https://stardewvalleywiki.com/Purple_Mushroom'
                }, {
                    description: 'Maple Syrup',
                    icon_url: MapleSyrupImage,
                    wiki_url: 'https://stardewvalleywiki.com/Maple_Syrup'
                }, {
                    description: 'Oak Resin',
                    icon_url: OakResinImage,
                    wiki_url: 'https://stardewvalleywiki.com/Oak_Resin'
                }, {
                    description: 'Pine Tar',
                    icon_url: PineTarImage,
                    wiki_url: 'https://stardewvalleywiki.com/Pine_Tar'
                }, {
                    description: 'Morel',
                    icon_url: MorelImage,
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
                    icon_url: ParsnipImage,
                    wiki_url: 'https://stardewvalleywiki.com/Parsnip'
                }, {
                    description: 'Green Bean',
                    icon_url: GreenBeanImage,
                    wiki_url: 'https://stardewvalleywiki.com/Green_Bean'
                }, {
                    description: 'Cauliflower',
                    icon_url: CauliflowerImage,
                    wiki_url: 'https://stardewvalleywiki.com/Cauliflower'
                }, {
                    description: 'Potato',
                    icon_url: PotatoImage,
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
                    icon_url: TomatoImage,
                    wiki_url: 'https://stardewvalleywiki.com/Tomato'
                }, {
                    description: 'Hot Pepper',
                    icon_url: HotPepperImage,
                    wiki_url: 'https://stardewvalleywiki.com/Hot_Pepper'
                }, {
                    description: 'Blueberry',
                    icon_url: BlueberryImage,
                    wiki_url: 'https://stardewvalleywiki.com/Blueberry'
                }, {
                    description: 'Melon',
                    icon_url: MelonImage,
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
                    icon_url: CornImage,
                    wiki_url: 'https://stardewvalleywiki.com/Corn'
                }, {
                    description: 'Eggplant',
                    icon_url: EggplantImage,
                    wiki_url: 'https://stardewvalleywiki.com/Eggplant'
                }, {
                    description: 'Pumpkin',
                    icon_url: PumpkinImage,
                    wiki_url: 'https://stardewvalleywiki.com/Pumpkin'
                }, {
                    description: 'Yam',
                    icon_url: YamImage,
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
                    icon_url: ParsnipImage,
                    wiki_url: 'https://stardewvalleywiki.com/Parsnip'
                }, {
                    description: '5 x Melon (Gold Quality)',
                    icon_url: MelonImage,
                    wiki_url: 'https://stardewvalleywiki.com/Melon'
                }, {
                    description: '5 x Pumpkin (Gold Quality)',
                    icon_url: PumpkinImage,
                    wiki_url: 'https://stardewvalleywiki.com/Pumpkin'
                }, {
                    description: '5 x Corn (Gold Quality)',
                    icon_url: CornImage,
                    wiki_url: 'https://stardewvalleywiki.com/Corn'
                }
            ]
        },
        {
            checked: false,
            description: 'Animal Bundle',
            icon_url: BundleRedImage,
            resources: [
                {
                    description: 'Large Milk',
                    icon_url: LargeMilkImage,
                    wiki_url: 'https://stardewvalleywiki.com/Large_Milk'
                }, {
                    description: 'Large Egg (Brown)',
                    icon_url: LargeEggBrownImage,
                    wiki_url: 'https://stardewvalleywiki.com/Large_Egg'
                }, {
                    description: 'Large Egg',
                    icon_url: LargeEggImage,
                    wiki_url: 'https://stardewvalleywiki.com/Large_Egg'
                }, {
                    description: 'Large Goat Milk',
                    icon_url: LargeGoatMilkImage,
                    wiki_url: 'https://stardewvalleywiki.com/Large_Goat_Milk'
                }, {
                    description: 'Wool',
                    icon_url: WoolImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wool'
                }, {
                    description: 'Duck Egg',
                    icon_url: DuckEggImage,
                    wiki_url: 'https://stardewvalleywiki.com/Duck_Egg'
                }
            ]
        },
        {
            checked: false,
            description: 'Artisan Bundle',
            icon_url: BundlePurpleImage,
            resources: [
                {
                    description: 'Truffle Oil',
                    icon_url: TruffleOilImage,
                    wiki_url: 'https://stardewvalleywiki.com/Truffle_Oil'
                }, {
                    description: 'Cloth',
                    icon_url: ClothImage,
                    wiki_url: 'https://stardewvalleywiki.com/Cloth'
                }, {
                    description: 'Goat Cheese',
                    icon_url: GoatCheeseImage,
                    wiki_url: 'https://stardewvalleywiki.com/Goat_Cheese'
                }, {
                    description: 'Cheese',
                    icon_url: CheeseImage,
                    wiki_url: 'https://stardewvalleywiki.com/Cheese'
                }, {
                    description: 'Honey',
                    icon_url: HoneyImage,
                    wiki_url: 'https://stardewvalleywiki.com/Honey'
                }, {
                    description: 'Jelly',
                    icon_url: JellyImage,
                    wiki_url: 'https://stardewvalleywiki.com/Jelly'
                }, {
                    description: 'Apple',
                    icon_url: AppleImage,
                    wiki_url: 'https://stardewvalleywiki.com/Apple'
                }, {
                    description: 'Apricot',
                    icon_url: ApricotImage,
                    wiki_url: 'https://stardewvalleywiki.com/Apricot'
                }, {
                    description: 'Orange',
                    icon_url: OrangeImage,
                    wiki_url: 'https://stardewvalleywiki.com/Orange'
                }, {
                    description: 'Peach',
                    icon_url: PeachImage,
                    wiki_url: 'https://stardewvalleywiki.com/Peach'
                }, {
                    description: 'Pomegranate',
                    icon_url: PomegranateImage,
                    wiki_url: 'https://stardewvalleywiki.com/Pomegranate'
                }, {
                    description: 'Cherry',
                    icon_url: CherryImage,
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
                    icon_url: CopperBarImage,
                    wiki_url: 'https://stardewvalleywiki.com/Copper_Bar'
                }, {
                    description: 'Iron Bar',
                    icon_url: IronBarImage,
                    wiki_url: 'https://stardewvalleywiki.com/Iron_Bar'
                }, {
                    description: 'Gold Bar',
                    icon_url: GoldBarImage,
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
                    icon_url: QuartzImage,
                    wiki_url: 'https://stardewvalleywiki.com/Quart'
                }, {
                    description: 'Earth Crystal',
                    icon_url: EarthCrystalImage,
                    wiki_url: 'https://stardewvalleywiki.com/Earth_Crystal'
                }, {
                    description: 'Frozen Tear',
                    icon_url: FrozenTearImage,
                    wiki_url: 'https://stardewvalleywiki.com/Frozen_tear'
                }, {
                    description: 'Fire Quartz',
                    icon_url: FireQuartzImage,
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
                    icon_url: SlimeImage,
                    wiki_url: 'https://stardewvalleywiki.com/Quart'
                }, {
                    description: '10 X Bat Wing',
                    icon_url: BatWingImage,
                    wiki_url: 'https://stardewvalleywiki.com/Bat_Wing'
                }, {
                    description: 'Solar Essence',
                    icon_url: SolarEssenceImage,
                    wiki_url: 'https://stardewvalleywiki.com/Solar_Essence'
                }, {
                    description: 'Void Essence',
                    icon_url: VoidEssenceImage,
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
                    icon_url: GoldImage,
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
                    icon_url: GoldImage,
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
                    icon_url: GoldImage,
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
                    icon_url: GoldImage,
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
                    icon_url: SunfishImage,
                    wiki_url: 'https://stardewvalleywiki.com/Sunfish'
                }, {
                    description: 'Catfish',
                    icon_url: CatfishImage,
                    wiki_url: 'https://stardewvalleywiki.com/Catfish'
                }, {
                    description: 'Shad',
                    icon_url: ShadImage,
                    wiki_url: 'https://stardewvalleywiki.com/Shad'
                }, {
                    description: 'Tiger Trout',
                    icon_url: TigerTroutImage,
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
                    icon_url: LargemouthBassImage,
                    wiki_url: 'https://stardewvalleywiki.com/Largemouth_Bass'
                }, {
                    description: 'Carp',
                    icon_url: CarpImage,
                    wiki_url: 'https://stardewvalleywiki.com/Carp'
                }, {
                    description: 'Bullhead',
                    icon_url: BullheadImage,
                    wiki_url: 'https://stardewvalleywiki.com/Bullhead'
                }, {
                    description: 'Sturgeon',
                    icon_url: SturgeonImage,
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
                    icon_url: SardineImage,
                    wiki_url: 'https://stardewvalleywiki.com/Sardine'
                }, {
                    description: 'Tuna',
                    icon_url: TunaImage,
                    wiki_url: 'https://stardewvalleywiki.com/Tuna'
                }, {
                    description: 'Bullhead',
                    icon_url: BullheadImage,
                    wiki_url: 'https://stardewvalleywiki.com/Red_Snapper'
                }, {
                    description: 'Tilapia',
                    icon_url: TilapiaImage,
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
                    icon_url: WalleyeImage,
                    wiki_url: 'https://stardewvalleywiki.com/Walleye'
                }, {
                    description: 'Bream',
                    icon_url: BreamImage,
                    wiki_url: 'https://stardewvalleywiki.com/Bream'
                }, {
                    description: 'Eel',
                    icon_url: EelImage,
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
                    icon_url: LobsterImage,
                    wiki_url: 'https://stardewvalleywiki.com/Lobster'
                }, {
                    description: 'Crayfish',
                    icon_url: CrayfishImage,
                    wiki_url: 'https://stardewvalleywiki.com/Crayfish'
                }, {
                    description: 'Crab',
                    icon_url: CrabImage,
                    wiki_url: 'https://stardewvalleywiki.com/Crab'
                }, {
                    description: 'Cockle',
                    icon_url: CockleImage,
                    wiki_url: 'https://stardewvalleywiki.com/Cockle'
                }, {
                    description: 'Mussel',
                    icon_url: MusselImage,
                    wiki_url: 'https://stardewvalleywiki.com/Mussel'
                }, {
                    description: 'Shrimp',
                    icon_url: ShrimpImage,
                    wiki_url: 'https://stardewvalleywiki.com/Shrimp'
                }, {
                    description: 'Snail',
                    icon_url: SnailImage,
                    wiki_url: 'https://stardewvalleywiki.com/Snail'
                }, {
                    description: 'Periwinkle',
                    icon_url: PeriwinkleImage,
                    wiki_url: 'https://stardewvalleywiki.com/Periwinkle'
                }, {
                    description: 'Oyster',
                    icon_url: OysterImage,
                    wiki_url: 'https://stardewvalleywiki.com/Oyster'
                }, {
                    description: 'Clam',
                    icon_url: ClamImage,
                    wiki_url: 'https://stardewvalleywiki.com/Clam'
                }
            ]
        },
        {
            checked: false,
            description: 'Specialty Fish Bundle',
            icon_url: BundleRedImage,
            resources: [
                {
                    description: 'Pufferfish',
                    icon_url: PufferfishImage,
                    wiki_url: 'https://stardewvalleywiki.com/Pufferfish'
                }, {
                    description: 'Ghostfish',
                    icon_url: GhostfishImage,
                    wiki_url: 'https://stardewvalleywiki.com/Ghostfish'
                }, {
                    description: 'Sandfish',
                    icon_url: SandfishImage,
                    wiki_url: 'https://stardewvalleywiki.com/Sandfish'
                }, {
                    description: 'Woodskip',
                    icon_url: WoodskipImage,
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
                    icon_url: MapleSyrupImage,
                    wiki_url: 'https://stardewvalleywiki.com/Maple_Syrup'
                }, {
                    description: 'Fiddlehead Fern',
                    icon_url: FiddleheadFernImage,
                    wiki_url: 'https://stardewvalleywiki.com/Fiddlehead_Fern'
                }, {
                    description: 'Truffle',
                    icon_url: TruffleImage,
                    wiki_url: 'https://stardewvalleywiki.com/Truffle'
                }, {
                    description: 'Poppy',
                    icon_url: PoppyImage,
                    wiki_url: 'https://stardewvalleywiki.com/Poppy'
                }, {
                    description: 'Maki Roll',
                    icon_url: MakiRollImage,
                    wiki_url: 'https://stardewvalleywiki.com/Maki_Roll'
                }, {
                    description: 'Fried Egg',
                    icon_url: FriedEggImage,
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
                    icon_url: RedMushroomImage,
                    wiki_url: 'https://stardewvalleywiki.com/Red_Mushroom'
                }, {
                    description: 'Sea Urchin',
                    icon_url: SeaUrchinImage,
                    wiki_url: 'https://stardewvalleywiki.com/Sea_Urchin'
                }, {
                    description: 'Sunflower',
                    icon_url: SunflowerImage,
                    wiki_url: 'https://stardewvalleywiki.com/Sunflower'
                }, {
                    description: 'Duck Feather',
                    icon_url: DuckFeatherImage,
                    wiki_url: 'https://stardewvalleywiki.com/Duck_Feather'
                }, {
                    description: 'Aquamarine',
                    icon_url: AquamarineImage,
                    wiki_url: 'https://stardewvalleywiki.com/Aquamarine'
                }, {
                    description: 'Red Cabbage',
                    icon_url: RedCabbageImage,
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
                    icon_url: PurpleMushroomImage,
                    wiki_url: 'https://stardewvalleywiki.com/Purple_Mushroom'
                }, {
                    description: 'Nautilus Shell',
                    icon_url: NautilusShellImage,
                    wiki_url: 'https://stardewvalleywiki.com/Nautilus_Shell'
                }, {
                    description: 'Chub',
                    icon_url: ChubImage,
                    wiki_url: 'https://stardewvalleywiki.com/Chub'
                }, {
                    description: 'Frozen Geode',
                    icon_url: FrozenGeodeImage,
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
                    icon_url: WheatImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wheat'
                }, {
                    description: '10 x Hay',
                    icon_url: HayImage,
                    wiki_url: 'https://stardewvalleywiki.com/Hay'
                }, {
                    description: '3 x Apple',
                    icon_url: AppleImage,
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
                    icon_url: OakResinImage,
                    wiki_url: 'https://stardewvalleywiki.com/Oak_Resin'
                }, {
                    description: 'Wine',
                    icon_url: WineImage,
                    wiki_url: 'https://stardewvalleywiki.com/Wine'
                }, {
                    description: 'Rabbit\'s Foot',
                    icon_url: RabbitsFootImage,
                    wiki_url: 'https://stardewvalleywiki.com/Rabbit%27s_Foot'
                }, {
                    description: 'Pomegranate',
                    icon_url: PomegranateImage,
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
