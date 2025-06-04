// Popular car makes and models in Ireland

export const carMakes = [
    'Audi',
    'BMW',
    'Ford',
    'Hyundai',
    'Kia',
    'Mercedes-Benz',
    'Nissan',
    'Opel',
    'Peugeot',
    'Renault',
    'Skoda',
    'Tesla',
    'Toyota',
    'Volkswagen',
    'Volvo'
  ];
  
  export const carModels: Record<string, string[]> = {
    'Audi': [
      'A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8',
      'Q2', 'Q3', 'Q5', 'Q7', 'Q8',
      'TT', 'R8', 'e-tron GT'
    ],
    'BMW': [
      '1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series', '8 Series',
      'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7',
      'Z4', 'i3', 'i4', 'iX'
    ],
    'Ford': [
      'Fiesta', 'Focus', 'Mondeo', 'Mustang',
      'EcoSport', 'Kuga', 'Edge', 'Explorer',
      'Ranger', 'Transit', 'Transit Connect'
    ],
    'Hyundai': [
      'i10', 'i20', 'i30', 'i40',
      'Tucson', 'Santa Fe', 'Nexo',
      'Ioniq', 'Kona Electric'
    ],
    'Kia': [
      'Picanto', 'Rio', 'Ceed', 'Optima', 'Stinger',
      'Stonic', 'Niro', 'Sportage', 'Sorento',
      'EV6', 'Soul'
    ],
    'Mercedes-Benz': [
      'A-Class', 'B-Class', 'C-Class', 'E-Class', 'S-Class',
      'CLA', 'CLS', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS',
      'AMG GT', 'EQC', 'EQS'
    ],
    'Nissan': [
      'Micra', 'Sentra', 'Altima', 'Maxima',
      'Juke', 'Qashqai', 'X-Trail', 'Pathfinder',
      'Leaf', 'Ariya'
    ],
    'Opel': [
      'Corsa', 'Astra', 'Insignia',
      'Crossland', 'Grandland', 'Mokka',
      'Combo', 'Vivaro'
    ],
    'Peugeot': [
      '108', '208', '308', '508',
      '2008', '3008', '5008',
      'Partner', 'Expert'
    ],
    'Renault': [
      'Clio', 'Megane', 'Talisman',
      'Captur', 'Kadjar', 'Koleos',
      'Zoe', 'Kangoo', 'Master'
    ],
    'Skoda': [
      'Citigo', 'Fabia', 'Scala', 'Octavia', 'Superb',
      'Kamiq', 'Karoq', 'Kodiaq',
      'Enyaq'
    ],
    'Tesla': [
      'Model 3', 'Model S', 'Model X', 'Model Y'
    ],
    'Toyota': [
      'Aygo', 'Yaris', 'Corolla', 'Camry', 'Avalon',
      'C-HR', 'RAV4', 'Highlander', 'Land Cruiser',
      'Prius', 'Mirai'
    ],
    'Volkswagen': [
      'Up!', 'Polo', 'Golf', 'Jetta', 'Passat', 'Arteon',
      'T-Cross', 'T-Roc', 'Tiguan', 'Touareg',
      'ID.3', 'ID.4', 'ID.Buzz'
    ],
    'Volvo': [
      'V40', 'V60', 'V90',
      'S60', 'S90',
      'XC40', 'XC60', 'XC90',
      'C40 Recharge', 'XC40 Recharge'
    ]
  };
  
  // Irish counties for location filtering
  export const irishCounties = [
    'Antrim', 'Armagh', 'Carlow', 'Cavan', 'Clare', 'Cork', 'Derry', 'Donegal', 
    'Down', 'Dublin', 'Fermanagh', 'Galway', 'Kerry', 'Kildare', 'Kilkenny', 
    'Laois', 'Leitrim', 'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath', 
    'Monaghan', 'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Tyrone', 
    'Waterford', 'Westmeath', 'Wexford', 'Wicklow'
  ];
  
  // Price ranges for filtering
  export const priceRanges = [
    { label: 'Under €10,000', min: 0, max: 10000 },
    { label: '€10,000 - €20,000', min: 10000, max: 20000 },
    { label: '€20,000 - €30,000', min: 20000, max: 30000 },
    { label: '€30,000 - €50,000', min: 30000, max: 50000 },
    { label: '€50,000 - €75,000', min: 50000, max: 75000 },
    { label: 'Over €75,000', min: 75000, max: 999999 }
  ];
  
  // Year ranges
  export const yearRanges = [
    { label: '2024', min: 2024, max: 2024 },
    { label: '2023', min: 2023, max: 2023 },
    { label: '2022', min: 2022, max: 2022 },
    { label: '2021', min: 2021, max: 2021 },
    { label: '2020', min: 2020, max: 2020 },
    { label: '2019', min: 2019, max: 2019 },
    { label: '2018', min: 2018, max: 2018 },
    { label: '2017 and older', min: 2000, max: 2017 }
  ];
  
  // Popular car features
  export const popularFeatures = [
    'Air Conditioning',
    'Alloy Wheels',
    'Android Auto',
    'Apple CarPlay',
    'Automatic Transmission',
    'Bluetooth',
    'Central Locking',
    'Cruise Control',
    'Electric Windows',
    'GPS Navigation',
    'Heated Seats',
    'Leather Seats',
    'LED Headlights',
    'Multiple Airbags',
    'Parking Sensors',
    'Rear Camera',
    'Reversing Camera',
    'Sunroof',
    'USB Ports'
  ];