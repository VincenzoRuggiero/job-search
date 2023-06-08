const nextElementInList = (list, value) => {
  const currentValueIndex = list.indexOf(value) // Get the index of the matching action word
  const nextValueIndex = (currentValueIndex + 1) % list.length // Adds 1 to index each time and restarts
  const nextValue = list[nextValueIndex]
  return nextValue
}

export default nextElementInList
