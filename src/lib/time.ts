import dayjs from 'dayjs'

export const echoTime = (current: string) => {
  return dayjs(current).format('D MMM, YYYY')
}
