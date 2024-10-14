export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiter: RegExp = /[\n,]/; // Default delimiter: comma or newline

  // Handle custom delimiter
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }

  const numArray: number[] = numbers.split(delimiter).map(Number);
  const negatives: number[] = numArray.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
