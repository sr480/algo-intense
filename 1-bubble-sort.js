function bubbleSort(numbers) {
  for (i = 0; i < numbers.length - 1; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      const a = numbers[i];
      const b = numbers[j];
      if (a > b) {
        numbers[i] = b;
        numbers[j] = a;
      }
    }
  }
  return numbers;
}

console.log(bubbleSort([5, 3, 1, 4, 42]));