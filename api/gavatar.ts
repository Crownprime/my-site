import useSWR from 'swr'
import md5 from 'crypto-js/md5'

function useAvatar() {
  const email = 'MyCrown1234@hotmail.com'
  const emailMd5 = md5(email.toLocaleLowerCase())
  const { data, error } = useSWR()
  return {
    loading: !error && !data,
    error,
  }
}
