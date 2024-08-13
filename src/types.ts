export type Timer = {
  id: number
  label: string
  secondsLeft: number
  started: boolean
  intervalId: number | null
}
