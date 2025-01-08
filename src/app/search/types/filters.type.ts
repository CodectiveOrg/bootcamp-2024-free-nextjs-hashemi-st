export type FiltersType = {
  specialty?: string[],
  gender?: string,
  city?: string[],
  rate?: { min?: number, max?: number },
  trait?: string[]
}