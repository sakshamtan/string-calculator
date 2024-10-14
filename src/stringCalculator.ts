export function add(numbers: string): number {
  if (numbers === "") return 0;

  if(numbers.length === 1) return Number(numbers);

  return -1;
}
