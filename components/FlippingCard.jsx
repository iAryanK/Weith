"use client";

import { useFlipCard } from "@/hooks/useFlipCard";
import { WalletOptions } from "@/components/WalletOptions";
import { TheWallet } from "./TheWallet";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from "@/lib/config";

const queryClient = new QueryClient()

export default function FlippingCard() {
  const { flipCard } = useFlipCard();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-80 h-96 perspective-1000">
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flipCard ? "rotate-y-180" : ""
            }`}
        >

          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              {/* Front Side */}
              <WalletOptions />

              {/* Other Side */}
              <TheWallet />
            </QueryClientProvider>
          </WagmiProvider>


        </div>
      </div>
    </div>
  );
}