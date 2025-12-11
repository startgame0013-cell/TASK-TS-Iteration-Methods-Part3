/**
 * You can use these temperatures
 * to manually test your code
 */
const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

/**
 * `filterHighTemperatures` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns a new array containing temperatures greater than or equal to 25 degrees Celsius.
 * Example:
 *  filterHighTemperatures(temperatures); // => [25, 28, 30, 27, 29, 26, 28, 30, 27, 26, 25, 28, 29, 27, 26]
 */
function filterHighTemperatures(temps: number[]): number[] {
return temps.filter((temp) => temp >= 25);
}

/**
 * `filterLowTemperatures` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns a new array containing temperatures less than 20 degrees Celsius.
 * Example:
 *  filterLowTemperatures(temperatures); // => [19, 18, 19, 19]
 */
function filterLowTemperatures(temps: number[]): number[] {
return temps.filter((temp) => temp < 20);
}

/**
 * `convertCelsiusToFahrenheit` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Converts the entire list of temperatures to Fahrenheit using the formula (Celsius * 9/5) + 32.
 *  - Returns a new array containing temperatures in Fahrenheit.
 * Example:
 *  convertCelsiusToFahrenheit([25, 30, 20]); // => [77, 86, 68]
 */
function convertCelsiusToFahrenheit(temps: number[]): number[] {
return temps.map((temp) => (temp * 9/5) + 32);
}

/**
 * `labelTemperatures` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns a new array labeling each temperature as:
 *    - "Warm" for temperatures >= 25
 *    - "Mild" for temperatures between 20 and 24
 *    - "Cool" for temperatures < 20
 * Example:
 *  labelTemperatures([25, 22, 18]); // => ["Warm", "Mild", "Cool"]
 */
type TemperatureLabel = "Warm" | "Mild" | "Cool";

function labelTemperatures(temps: number[]): TemperatureLabel[] {
return temps.map((temp) => {
    if (temp >= 25) return "Warm";
    if (temp >= 20) return "Mild";
    return "Cool";
});
}

/**
 * `getMaxTemperature` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns the highest temperature recorded in the list.
 * Example:
 *  getMaxTemperature([25, 30, 20]); // => 30
 */
function getMaxTemperature(temps: number[]): number {
    return Math.max(...temps);
}

/**
 * `getMinTemperature` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns the lowest temperature recorded in the list.
 * Example:
 *  getMinTemperature([25, 30, 20]); // => 20
 */
function getMinTemperature(temps: number[]): number {
return Math.min(...temps);
}

export {
  filterHighTemperatures,
  filterLowTemperatures,
  convertCelsiusToFahrenheit,
  labelTemperatures,
  getMaxTemperature,
  getMinTemperature,
};
