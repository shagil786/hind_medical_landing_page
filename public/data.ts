
const columns = [[
  {
    id: 0,
    title: "All The Service You Need",
    description: "It's important to address your health conditions during medications for best subsistence",
  },
  {
    id: 1,
    title: "Easy to use with us",
    description: "We provide the best service for you",
  },
  {
    id: 2,
    title: "The best product",
    description: "We provide the best product for you",
  }
], [
  {
    id: 3,
    title: "Med and Refill reminders",
    description: "We provide med and refills reminders through notifications",
  },
  {
    id: 4,
    title: "Drug Interaction Warning",
    description: "We provide drug interaction warning for your safety",
  },
  {
    id: 5,
    title: "24/7 Consultation",
    description: "We provide 24/7 consultation for your health",
  }
]]

const aboutData = [
  {
    title: "50+",
    description: "Years of experience"
  },
  {
    title: "10k+",
    description: "Happy customers"
  },
  {
    title: "800+",
    description: "Heatlhcare products"
  },
  {
    title: "100+",
    description: "Employees"
  }
]

const medicalData = {
  Vitamins: [
    {
      id: "vitamin_001",
      name: "Vitamin C+",
      price: "$39.00 USD",
      categories: ["Muscle Care", "Vitamins"]
    },
    {
      id: "vitamin_002",
      name: "Vitamin C",
      price: "$35.00 USD",
      categories: ["Personal Care", "Vitamins"]
    },
    {
      id: "vitamin_003",
      name: "Vitamin D",
      price: "$28.00 USD",
      categories: ["Health", "Vitamins"]
    }
  ],
  FaceCare: [
    {
      id: "facecare_001",
      name: "Hydrating Face Cream",
      price: "$22.00 USD",
      categories: ["Face Care", "Moisturizer"]
    },
    {
      id: "facecare_002",
      name: "Anti-Aging Serum",
      price: "$45.00 USD",
      categories: ["Face Care", "Serum"]
    },
    {
      id: "facecare_003",
      name: "Sunscreen SPF 50",
      price: "$30.00 USD",
      categories: ["Face Care", "Sun Protection"]
    }
  ],
  BodyCare: [
    {
      id: "bodycare_001",
      name: "Body Lotion",
      price: "$18.00 USD",
      categories: ["Body Care", "Moisturizer"]
    },
    {
      id: "bodycare_002",
      name: "Exfoliating Body Scrub",
      price: "$25.00 USD",
      categories: ["Body Care", "Exfoliator"]
    },
    {
      id: "bodycare_003",
      name: "Body Wash",
      price: "$15.00 USD",
      categories: ["Body Care", "Cleanser"]
    }
  ],
  MedicalEquipment: [
    {
      id: "medequip_001",
      name: "Blood Pressure Monitor",
      price: "$60.00 USD",
      categories: ["Medical Equipment", "Monitoring"]
    },
    {
      id: "medequip_002",
      name: "Digital Thermometer",
      price: "$20.00 USD",
      categories: ["Medical Equipment", "Temperature"]
    },
    {
      id: "medequip_003",
      name: "Stethoscope",
      price: "$50.00 USD",
      categories: ["Medical Equipment", "Diagnostics"]
    }
  ],
  Health: [
    {
      id: "health_001",
      name: "Probiotic Supplement",
      price: "$40.00 USD",
      categories: ["Health", "Probiotics"]
    },
    {
      id: "health_002",
      name: "Omega-3 Fish Oil",
      price: "$35.00 USD",
      categories: ["Health", "Supplements"]
    },
    {
      id: "health_003",
      name: "Multivitamins",
      price: "$30.00 USD",
      categories: ["Health", "Vitamins"]
    }
  ],
  PersonalCare: [
    {
      id: "personalcare_001",
      name: "Shampoo",
      price: "$12.00 USD",
      categories: ["Personal Care", "Hair Care"]
    },
    {
      id: "personalcare_002",
      name: "Conditioner",
      price: "$14.00 USD",
      categories: ["Personal Care", "Hair Care"]
    },
    {
      id: "personalcare_003",
      name: "Deodorant",
      price: "$8.00 USD",
      categories: ["Personal Care", "Hygiene"]
    }
  ],
  MuscleCare: [
    {
      id: "musclecare_001",
      name: "Muscle Relaxant Cream",
      price: "$25.00 USD",
      categories: ["Muscle Care", "Topical"]
    },
    {
      id: "musclecare_002",
      name: "Joint Pain Relief Spray",
      price: "$20.00 USD",
      categories: ["Muscle Care", "Spray"]
    },
    {
      id: "musclecare_003",
      name: "Electrolyte Drink",
      price: "$15.00 USD",
      categories: ["Muscle Care", "Hydration"]
    }
  ]
};

export {
  columns,
  aboutData,
  medicalData
};

