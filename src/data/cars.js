// Model Images
// // Car Trims ioniq5
// import SE from '../assets/ioniq5/se.webp'
// import limited from '../assets/ioniq5/limited.webp'
// import D100PlatinumEdition from '../assets/ioniq5/D100-Platinum-Edition.webp'

// // Car Trims ioniq6
// import SEL6 from '../assets/ioniq6/SEL.webp'
// import SE6 from '../assets/ioniq6/SE.webp'
// import Limited6 from '../assets/ioniq6/Limited.webp'


// // Car Models
// import ioniq6SeInterior from '../assets/models/Ioniq5_SE_Black_V2.glb'
// import ioniq6Exterior from '../assets/models/ioniq6Exterior.glb'
// import ioniq5LimitedGreyGreen from '../assets/models/Ioniq_5_Limited_Grey.glb'
// import ioniq5LimitedBlack from '../assets/models/Ioniq_5_Limited_Black.glb'
// import ioniq5D100 from '../assets/models/Ioniq_5_D100.glb'
// import ioniq5SEExterior from '../assets/models/ioniq5_SE_Viewer.glb'
// import ioniq5LimitedExterior from '../assets/models/ioniq5_Limited_Viewer.glb'
// import ioniq5D100Exterior from '../assets/models/ioniq5_D100_Viewer.glb'

// // Car Colors
// import 'abyssBlack' from '../assets/colors/abyss-black.png'
// import 'atlasWhite' from '../assets/colors/atlas-white.png'
// import 'cyberGray' from '../assets/colors/cyber-gray.png'
// import 'digitalTeal' from '../assets/colors/digital-teal.png'
// import lucidBlue from '../assets/colors/lucid-blue.png'
// import shootingStarMatte from '../assets/colors/shooting-star-matte.png'
// import 'gravityGoldMatte' from '../assets/colors/gravity-gold-matte.png'
// import grayGreen2Tone from '../assets/colors/curated-silver.png'
// import terraBrown2Tone from '../assets/colors/ultimate-red.png'

// // ionic6 colors
// import 'onyxBlack' from '../assets/colors/onyx-black.png'
// import 'digitalGreen' from '../assets/colors/digital-green.png'
// import 'curatedSilver' from '../assets/colors/curated-silver.png'
// import 'ultimateRed' from '../assets/colors/ultimate-red.png'
// import serenityWhite from '../assets/colors/serenity-white.png'
// import transmissionBlue from '../assets/colors/transmission-blue.png'

const cars = {
    'IONIQ 5': {
        'image': 'ioniq5',
        'SE': {
            'image': 'SE',
            'description': 'The base trim with the most affordable price',
            'exteriorModel': {
                'model': 'ioniq5_SE_Viewer',
                'material': 'SE',
                'removables': ['Limited', 'D100']
            },
            'interiorModel': {
                'model': {
                    'Black': 'ioniq6SeInterior',
                },
                'material': 'Leather',
            },
            'exteriorColors': {
                'Atlas White': {
                    'image': 'atlas-white',
                    'name': 'Atlas White',
                    'color': '#BCBDBE'
                },
                'Abyss Black': {
                    'image': 'abyss-black',
                    'name': 'Abyss Black',
                    'color': '#000000'
                },
                'Cyber Gray': {
                    'image': 'cyber-gray',
                    'name': 'Cyber Gray',
                    'color': '#707172'
                },
                'Digital Teal': {
                    'image': 'digital-teal',
                    'name': 'Digital Teal',
                    'color': '#1E3639'
                },
                'Lucid Blue': {
                    'image': 'lucid-blue',
                    'name': 'Lucid Blue',
                    'color': '#354450'
                }
            },
            'interiorColors': {
                'Black': {
                    'image': 'abyss-black',
                    'name': 'Black',
                    'color': '#000000'
                },
            },
            "hotspots": {
                "exterior": {
                    "LED Projector headlights": {
                        "description": "",
                        "position": [-17, 9, -2],
                        "rotation": [0, 11, 0],
                        "scale": [2, 2, 2],
                        "cameraTarget": [-50, 20, 10],
                        "showNebulaCharging": false
                    },
                    "Ultra-fast charging": {
                        "description": "With up to 350-kW 800 volt charger, charge your vehicle from 10 - 80 percent in just 80 minutes",
                        "position": [8.5, 10, -47],
                        "rotation": [0, 11, 0],
                        "scale": [2, 2, 2],
                        "cameraTarget": [8.5, 15, -65],
                        "showNebulaCharging": true
                    }
                },
                "interior": {
                    "Interactive touch screen with sounds": {
                        "description": "The widescreen display dominates the dashboard, seamless integrating with the 12.3 inch digital gauges",
                        "position": [0, 0, 0],
                        "rotation": [0, 0, 0],
                        "scale": [1, 1, 1],
                        "cameraTarget": [0, 0, 0],
                        "showNebulaCharging": false
                    },
                }
            }
        },
        'Limited': {
            'image': 'limited',
            'description': 'The base trim with the most affordable price',
            'exteriorModel': {
                'model': 'ioniq5_Limited_Viewer',
                'material': 'Limited',
                'removables': ['SE', 'D100']
            },
            'interiorModel': {
                'model': {
                    'Black': 'ioniq5LimitedBlack',
                    'Gray Green 2 Tone': 'ioniq5LimitedGreyGreen'
                },
                'material': 'Leather',
            },
            'exteriorColors': {
                'Abyss Black': {
                    'image': 'abyss-black',
                    'name': 'Abyss Black',
                    'color': '#000000'
                },
                'Shooting Star Matte': {
                    'image': 'shootingStarMatte',
                    'name': 'Shooting Star Matte',
                    'color': '#434449'
                },
                'Lucid Blue': {
                    'image': 'lucid-blue',
                    'name': 'Lucid Blue',
                    'color': '#354450'
                },
                'Digital Teal': {
                    'image': 'digital-teal',
                    'name': 'Digital Teal',
                    'color': '#1E3639'
                },
                'Gravity Gold Matte': {
                    'image': 'gravityGoldMatte',
                    'name': 'Gravity Gold Matte',
                    'color': '#A4A3A3'
                },
                'Cyber Gray': {
                    'image': 'cyber-gray',
                    'name': 'Cyber Gray',
                    'color': '#707172'
                },
                'Atlas White': {
                    'image': 'atlas-white',
                    'name': 'Atlas White',
                    'color': '#BCBDBE'
                }
            },
            'interiorColors': {
                'Black': {
                    'image': 'abyss-black',
                    'name': 'Black',
                    'color': '#000000'
                },
                'Gray Green 2 Tone': {
                    'image': 'grayGreen2Tone',
                    'name': 'Gray Green 2 Tone',
                    'color': '#6D6E6F'
                }
            },
            "hotspots": {
                "Blind Spot View Monitor ": {
                    "description": "When you signal to change lanes, a live camera feed of the lane will appear on the digital instrument gauge display",
                },
                "Ultra-fast charging": {
                    "description": "With up to 350-kW 800 volt charger, charge your vehicle from 10 - 80 percent in just 80 minutes",
                },
                "Premium front LED accent lighting": {
                    "description": "Spanning Across the front, between the headlines and bumper, this lighting accents adds a premium touch",
                },
            }
        },
        'D100 Platinum Edition': {
            'image': 'D100PlatinumEdition',
            'description': 'The base trim with the most affordable price',
            'exteriorModel': {
                'model': 'ioniq5_D100_Viewer',
                'material': 'D100',
                'removables': ['SE', 'Limited']
            },
            'interiorModel': {
                'model': {
                    'Terra Brown 2 Tone': 'ioniq5D100',
                },
                'material': 'Leather',
            },
            'exteriorColors': {
                'Gravity Gold Matte': {
                    'image': 'gravityGoldMatte',
                    'name': 'Gravity Gold Matte',
                    'color': '#A4A3A3'
                },
            },
            'interiorColors': {
                'Terra Brown 2 Tone': {
                    'image': 'terraBrown2Tone',
                    'name': 'Terra Brown 2 Tone',
                    'color': '#6D6E6F'
                }
            },
            "hotspots": {
                "Blind Spot View Monitor ": {
                    "description": "When you signal to change lanes, a live camera feed of the lane will appear on the digital instrument gauge display",
                },
                "Disney/mickey badges": {
                    "description": "",
                },
                "Ultra-fast charging": {
                    "description": "With up to 350-kW 800 volt charger, charge your vehicle from 10 - 80 percent in just 80 minutes",
                },
                "Premium front LED accent lighting": {
                    "description": "Spanning Across the front, between the headlines and bumper, this lighting accents adds a premium touch",
                },
            }
        },
    },
    'IONIQ 6': {
        'image': 'ioniq6',
        'SE': {
            'image': 'SE6',
            'exteriorModel': {
                'model': 'ioniq5_SE_Viewer',
                'material': 'Paint',
            },
            'interiorModel': {
                'model': 'ioniq6SeInterior',
                'material': 'Leather',
            },
            'exteriorColors': {
                'Onyx Black': {
                    'image': 'onyxBlack',
                    'name': 'Onyx Black',
                    'color': '#000000'
                },
                'Digital Green': {
                    'image': 'digitalGreen',
                    'name': 'Digital Green',
                    'color': '#BCBDBE'
                },
                'Curated Silver': {
                    'image': 'curatedSilver',
                    'name': 'Curated Silver',
                    'color': '#707172'
                },
                'Ulitmate Red': {
                    'image': 'ultimateRed',
                    'name': 'Ulitmate Red',
                    'color': '#1E3639'
                },
                'Serenity White': {
                    'image': 'serenityWhite',
                    'name': 'Serenity White',
                    'color': '#354450'
                },
                'Transmission Blue': {
                    'image': 'transmissionBlue',
                    'name': 'Transmission Blue',
                    'color': '#354450'
                },
            },
            'interiorColors': {
                'Black': {
                    'image': 'abyss-black',
                    'name': 'Black',
                    'color': '#000000'
                },
            },
        },
        'SEL': {
            'image': 'SEL6',
            'exteriorModel': {
                'model': 'ioniq5_Limited_Viewer',
                'material': 'Paint',
            },
            'interiorModel': {
                'model': 'ioniq6SeInterior',
                'material': 'Leather',
            },
            'exteriorColors': {
                'Onyx Black': {
                    'image': 'onyxBlack',
                    'name': 'Onyx Black',
                    'color': '#000000'
                },
                'Digital Green': {
                    'image': 'digitalGreen',
                    'name': 'Digital Green',
                    'color': '#BCBDBE'
                },
                'Curated Silver': {
                    'image': 'curatedSilver',
                    'name': 'Curated Silver',
                    'color': '#707172'
                },
                'Ulitmate Red': {
                    'image': 'ultimateRed',
                    'name': 'Ulitmate Red',
                    'color': '#1E3639'
                },
                'Serenity White': {
                    'image': 'serenityWhite',
                    'name': 'Serenity White',
                    'color': '#354450'
                },
                'Transmission Blue': {
                    'image': 'transmissionBlue',
                    'name': 'Transmission Blue',
                    'color': '#354450'
                },
                'Gravity Gold Matte': {
                    'image': 'gravityGoldMatte',
                    'name': 'Gravity Gold Matte',
                    'color': '#A4A3A3'
                },

            },
            'interiorColors': {
                'Black': {
                    'image': 'abyss-black',
                    'name': 'Black',
                    'color': '#000000'
                },
                'Gray': {
                    'image': 'grayGreen2Tone',
                    'name': 'Gray',
                    'color': '#6D6E6F'
                }
            },
        },
        'Limited': {
            'image': 'Limited6',
            'exteriorModel': {
                'model': 'Ioniq_5_D100',
                'material': 'Paint',
            },
            'interiorModel': {
                'model': 'ioniq6SeInterior',
                'material': 'Leather',
            },
            'exteriorColors': {
                'Onyx Black': {
                    'image': 'onyxBlack',
                    'name': 'Onyx Black',
                    'color': '#000000'
                },
                'Digital Green': {
                    'image': 'digitalGreen',
                    'name': 'Digital Green',
                    'color': '#BCBDBE'
                },
                'Curated Silver': {
                    'image': 'curatedSilver',
                    'name': 'Curated Silver',
                    'color': '#707172'
                },
                'Ulitmate Red': {
                    'image': 'ultimateRed',
                    'name': 'Ulitmate Red',
                    'color': '#1E3639'
                },
                'Serenity White': {
                    'image': 'serenityWhite',
                    'name': 'Serenity White',
                    'color': '#354450'
                },
                'Transmission Blue': {
                    'image': 'transmissionBlue',
                    'name': 'Transmission Blue',
                    'color': '#354450'
                },
                'Gravity Gold Matte': {
                    'image': 'gravityGoldMatte',
                    'name': 'Gravity Gold Matte',
                    'color': '#A4A3A3'
                },

            },
            'interiorColors': {
                'Black': {
                    'image': 'abyss-black',
                    'name': 'Black',
                    'color': '#000000'
                },
                'Gray': {
                    'image': 'grayGreen2Tone',
                    'name': 'Gray',
                    'color': '#6D6E6F'
                }
            },
        },
    },
}

export { cars };