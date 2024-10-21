import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'

export function SendTransaction() {
    const { data: hash, sendTransaction } = useSendTransaction()

    async function sendTx() {
        const to = document.getElementById("to").value;
        const value = document.getElementById("value").value;
        sendTransaction({ to, value: parseEther(value) });
    }

    // Todo: use refs here
    return <div className='bg-green-400 h-36 w-full rounded-lg mt-5 flex flex-col items-center justify-center gap-2 px-6'>
        <input id="to" placeholder="Receiver's Public Key" required className='border bg-transparent rounded-sm p-1 placeholder-white' />
        <input id="value" placeholder="Amount" required className='border bg-transparent placeholder-white rounded-sm p-1' />
        <button onClick={sendTx} className='py-1 px-2 bg-white text-green-500 font-semibold rounded text-center w-full hover:bg-green-100'>Send</button>
        {hash && <div>Transaction Hash: {hash}</div>}
    </div>
}