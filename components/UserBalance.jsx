
import { useAccount, useBalance } from 'wagmi'

export function UserBalance() {
  const { address } = useAccount()

  const balance = useBalance({
    address
  })

  return (
    <div className='bg-green-400 h-36 w-full rounded-lg mt-5 flex items-center justify-center'>
      {address && <div className='text-3xl font-bold'>
        {balance.data?.formatted} <span className='uppercase text-sm font-light'>eth</span>
      </div>}
    </div>
  )
}