export const countries = [
  {
    name: "China",
    description:
      "Capacity: China has the world’s largest installed solar capacity, surpassing 300 GW, and plans to expand to 1,200 GW of renewable energy by 2030",
    population: "1.412 billion",
    flag: "https://emanuelmunoztorigino.github.io/wdd231/renewableEnergy/images/china-flag.webp",
    details:
      "leads the world in solar energy capacity, holding about 30% of global capacity",
    incentives:
      "include subsidies and investment support for renewable energy, helping to increase solar adoption across the country",
  },
  {
    name: "United States",
    description:
      "Growth: The U.S. solar industry has grown by over 200% in the last decade.",
    population: "332 million",
    flag: "https://emanuelmunoztorigino.github.io/wdd231/renewableEnergy/images/united-states-flag.webp",
    details:
      "around 20% of households in California and other leading cities use solar power.",
    incentives:
      "vary by state and often include tax credits and deductions, which have driven solar energy adoption, especially in sunny states.",
  },
  {
    name: "Germany",
    description:
      "Community Solar Projects: Many German towns operate community solar projects where residents collectively invest in solar installations, benefiting from shared clean energy.",
    population: "83 million",
    flag: "https://emanuelmunoztorigino.github.io/wdd231/renewableEnergy/images/germany-flag.webp",
    details:
      "A pioneer in renewable energy policies, generates 10% of its electricity from solar.",
    incentives:
      "Include feed-in tariffs and subsidies for solar installations, promoting renewable energy at both residential and commercial levels.",
  },
];

export async function LoadData(dataJSON) {
  try {
    const response = await fetch(dataJSON);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading data", error);
    return [];
  }
}

export function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomDec = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2);
}



export  const tariffTable = [
    {
      min: 0,
      max: 100,
      CF: 2630.8500,
      additional: { N1: 124.7809, N2: 62.3089, N3: 76.1896}
    },
    {
      min: 100.01,
      max: 200,
      CF: 4037.3900,
      additional: { N1: 128.9670, N2: 67.1311, N3: 80.8705}
    },
    {
      min: 200.01,
      max: 250,
      CF: 5513.3200,
      additional: { N1: 136.4581, N2: 75.1174, N3: 88.7467}
    },
    {
      min: 250.01,
      max: 350,
      CF: 5513.3200,
      additional: { N1: 136.4581, N2: 75.1174, N3: 88.7467}
    },
    {
      min: 350.01,
      max: 400,
      CF: 5513.3200,
      additional: { N1: 136.4581, N2: 75.1174, N3: 88.7467}
    },
    {
      min: 400.01,
      max: 500,
      CF: 6849.0300,
      additional: { N1: 142.3927, N2: 81.5439, N3: 95.0640}
    },
    {
      min: 500.01,
      max: 700,
      CF: 10997.4500,
      additional: { N1: 147.4544, N2: 86.6056, N3: 100.1257}
    },
    {
      min: 700.01,
      max: 1400,
      CF: 17816.8900,
      additional: { N1: 154.8143, N2: 93.9655, N3: 107.4856}
    },
    {
      min: 1400.01,
      max: 999999999.99,
      CF: 21753.8400,
      additional: { N1: 164.8299, N2: 103.9811, N3: 117.5012}
    }
  ];