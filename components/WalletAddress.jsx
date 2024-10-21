import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { useAccount } from "wagmi";


const WalletAddress = () => {
    const { address } = useAccount();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        navigator.clipboard.writeText(address);
        setTimeout(() => setCopied(false), 3000);
    }

    return (
        <>
            {address && (
                <div className="flex w-full">
                    <div
                        className="mt-4 py-2 px-4 bg-white text-green-500 font-semibold rounded-l border-r w-full text-center"
                    >
                        {address.slice(0, 6)}...{address.slice(-4)}
                    </div>
                    <div className="mt-4 py-2 px-4 bg-white text-green-500 font-semibold rounded-r border-l cursor-pointer" onClick={handleCopy}> {copied ? <Check /> : <Copy />}</div>
                </div>
            )}
        </>
    )
}

export default WalletAddress