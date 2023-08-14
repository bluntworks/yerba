export type TInput = {
  data: string
}

export function bluntIt(input:TInput) {
  console.log('bluntInput', input)
  return input.data.toUpperCase()
}