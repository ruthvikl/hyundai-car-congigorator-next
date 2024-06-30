const cars = {
    'IONIQ5': {
        'image': 'ioniq5',
        'SE': {
            'image': 'SE',
            'description': 'The base trim with the most affordable price',
            'exteriorModel': {
                'model': 'ioniq5_SE_Exterior',
                'material': 'SE',
                'removables': ['Limited', 'D100']
            },
            'interiorModel': {
                'model': {
                    'Black': 'Ioniq5_Interior_SE',
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
                'model': 'ioniq5_Limited_Exterior',
                'material': 'Limited',
                'removables': ['SE', 'D100']
            },
            'interiorModel': {
                'model': {
                    'Black': 'Ioniq_5_Interior_Limited_Black',
                    'Gray Green 2 Tone': 'Ioniq_5_Interior_Limited_Grey_Green'
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
                    'image': 'shooting-star-matte',
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
                    'image': 'gravity-gold-matte',
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
                    'color': '#ffffff'
                },
                'Gray Green 2 Tone': {
                    'image': 'abyss-black',
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
                'model': 'ioniq5_D100_Exterior',
                'material': 'D100',
                'removables': ['SE', 'Limited']
            },
            'interiorModel': {
                'model': {
                    'Terra Brown 2 Tone': 'Ioniq_5_Interior_D100',
                },
                'material': 'Leather',
            },
            'exteriorColors': {
                'Gravity Gold Matte': {
                    'image': 'gravity-gold-matte',
                    'name': 'Gravity Gold Matte',
                    'color': '#A4A3A3'
                },
            },
            'interiorColors': {
                'Terra Brown 2 Tone': {
                    'image': 'gravity-gold-matt',
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
                'model': 'ioniq5_SE_Exterior',
                'material': 'Paint',
            },
            'interiorModel': {
                'model': 'ioniq6SeInterior',
                'material': 'Leather',
            },
            'exteriorColors': {
                'Onyx Black': {
                    'image': 'onyx-black',
                    'name': 'Onyx Black',
                    'color': '#000000'
                },
                'Digital Green': {
                    'image': 'digital-green',
                    'name': 'Digital Green',
                    'color': '#BCBDBE'
                },
                'Curated Silver': {
                    'image': 'curated-silver',
                    'name': 'Curated Silver',
                    'color': '#707172'
                },
                'Ulitmate Red': {
                    'image': 'ultimate-red',
                    'name': 'Ulitmate Red',
                    'color': '#1E3639'
                },
                'Serenity White': {
                    'image': 'serenity-white',
                    'name': 'Serenity White',
                    'color': '#354450'
                },
                'Transmission Blue': {
                    'image': 'transmission-blue',
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
                'model': 'ioniq5_Limited_Exterior',
                'material': 'Paint',
            },
            'interiorModel': {
                'model': 'ioniq6SeInterior',
                'material': 'Leather',
            },
            'exteriorColors': {
                'Onyx Black': {
                    'image': 'onyx-black',
                    'name': 'Onyx Black',
                    'color': '#000000'
                },
                'Digital Green': {
                    'image': 'digital-green',
                    'name': 'Digital Green',
                    'color': '#BCBDBE'
                },
                'Curated Silver': {
                    'image': 'curated-silver',
                    'name': 'Curated Silver',
                    'color': '#707172'
                },
                'Ulitmate Red': {
                    'image': 'ultimate-red',
                    'name': 'Ulitmate Red',
                    'color': '#1E3639'
                },
                'Serenity White': {
                    'image': 'serenity-white',
                    'name': 'Serenity White',
                    'color': '#354450'
                },
                'Transmission Blue': {
                    'image': 'transmission-blue',
                    'name': 'Transmission Blue',
                    'color': '#354450'
                },
                'Gravity Gold Matte': {
                    'image': 'gravity-gold-matte',
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
                    'image': 'abyss-black',
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
                    'image': 'onyx-black',
                    'name': 'Onyx Black',
                    'color': '#000000'
                },
                'Digital Green': {
                    'image': 'digital-green',
                    'name': 'Digital Green',
                    'color': '#BCBDBE'
                },
                'Curated Silver': {
                    'image': 'curated-silver',
                    'name': 'Curated Silver',
                    'color': '#707172'
                },
                'Ulitmate Red': {
                    'image': 'ultimate-red',
                    'name': 'Ulitmate Red',
                    'color': '#1E3639'
                },
                'Serenity White': {
                    'image': 'serenity-white',
                    'name': 'Serenity White',
                    'color': '#354450'
                },
                'Transmission Blue': {
                    'image': 'transmission-blue',
                    'name': 'Transmission Blue',
                    'color': '#354450'
                },
                'Gravity Gold Matte': {
                    'image': 'gravity-gold-matte',
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
                    'image': 'abyss-black',
                    'name': 'Gray',
                    'color': '#6D6E6F'
                }
            },
        },
    },
}

export { cars };