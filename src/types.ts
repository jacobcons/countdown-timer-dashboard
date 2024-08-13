export type Timer = {
  id: number
  label: string
  startingSeconds: number
  secondsLeft: number
  started: boolean
  intervalId: number | null
}
