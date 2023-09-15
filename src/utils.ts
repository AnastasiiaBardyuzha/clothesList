export const input: Array<Array<string>> = [
  ["t-shirt", "dress shirt"],
  ["dress shirt", "pants"],
  ["dress shirt", "suit jacket"],
  ["tie", "suit jacket"],
  ["pants", "suit jacket"],
  ["belt", "suit jacket"],
  ["suit jacket", "overcoat"],
  ["dress shirt", "tie"],
  ["suit jacket", "sun glasses"],
  ["sun glasses", "overcoat"],
  ["left sock", "pants"],
  ["pants", "belt"],
  ["suit jacket", "left shoe"],
  ["suit jacket", "right shoe"],
  ["left shoe", "overcoat"],
  ["right sock", "pants"],
  ["right shoe", "overcoat"],
  ["t-shirt", "suit jacket"],
];

export const getClothingOrder = (dependenciesList: Array<Array<string>>): string[] => {
  const clothingGraph: Record<string, Array<string>> = {};

  const dependencies: Array<string> = []

  //Build the clothing graph & getting dependencies list

  dependenciesList.forEach(([dependency, item]) => {
    clothingGraph[item] = clothingGraph[item] ? [ ...clothingGraph[item], dependency] : [dependency];

    dependencies.push(dependency);
  })

  const uniqDependencies = [ ...new Set(dependencies) ];
  const clothingGraphKeys = Object.keys(clothingGraph);

  //getting the start and end of a list
  const firstItems: string = uniqDependencies.filter((item) => !clothingGraphKeys.includes(item))
    .sort()
    .join(", ");

  const latsItems: string = clothingGraphKeys.find((item) => !uniqDependencies.includes(item))!;

  // getting pre-prepared order list
  const order: string[] = [latsItems]
  let currentStep = latsItems;

  
  while (clothingGraph[currentStep]) {
    const currentClothList = clothingGraph[currentStep]?.sort();
    order.push(currentClothList.join(", "))
    clothingGraphKeys.shift();
    currentStep = currentClothList[0]
  }

  // getting prepared order list (removing unnecessary repeated items)
  const preparedOrder: Array<string> = [];

  const fullOrder = [...order, firstItems];

  fullOrder.forEach((step, index) => {
      const checkingString = fullOrder.slice(index + 1).join(", ");

      const stepArray = step.split(", ");

      const itemsForRemoving = stepArray.reduce((acc, item) => {
        if (checkingString.includes(item)) { 
          return [...acc, item]
        }

        return acc
      }, [] as Array<string>);

      const newStepArray = stepArray.filter((value) => !itemsForRemoving.includes(value));

      preparedOrder[index] = newStepArray.join(", ");
  });

  return [...preparedOrder].reverse().filter(Boolean);
}