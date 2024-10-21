import { useFlipCard } from '@/hooks/useFlipCard';
import { useEffect, useState } from 'react';
import { useAccount, useConnect } from 'wagmi';

export function WalletOptions() {
  const { connectors, connect, error } = useConnect()
  const { isConnected } = useAccount();
  const [isClientSide, setIsClientSide] = useState(false);
  const { setFlipCard } = useFlipCard();

  useEffect(() => {
    setIsClientSide(true);

    if (isConnected) {
      setFlipCard(true);
    }
    else {
      setFlipCard(false);
    }
  }, [isConnected, setFlipCard]);

  // Prevent hydration errors
  if (!isClientSide) return null;

  return (
    <div
      className={`absolute w-full h-full bg-blue-500 text-white rounded-lg p-6 backface-hidden`}
    >
      <h2 className="text-2xl font-bold mb-4">Connect Wallet</h2>
      <p className='text-sm leading-snug'>Connect with one of the available wallet providers.</p>

      <div className='mt-4 flex flex-col gap-2 h-60 overflow-y-scroll pr-2'>
        {connectors.map((connector) => (
          <button key={connector.uid} onClick={() => connect({ connector })}

            className="py-2 px-4 bg-white text-blue-500 font-semibold rounded hover:bg-blue-100"
          >
            {connector.name}
          </button>
        ))}
        {error && <p>Error: {error.message}</p>}
      </div>
    </div>

  );
}