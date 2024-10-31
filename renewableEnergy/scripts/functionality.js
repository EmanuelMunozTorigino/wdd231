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
