import { useFlipCard } from "@/hooks/useFlipCard";
import { useDisconnect } from "wagmi";
import { UserBalance } from "./UserBalance";
import { SendTransaction } from "./SendTxn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WalletAddress from "./WalletAddress";


export const TheWallet = () => {
    const { setFlipCard } = useFlipCard();
    const { disconnect } = useDisconnect()

    return (
        <div
            className={`absolute w-full h-full bg-green-500 text-white rounded-lg p-6 backface-hidden transform rotate-y-180`}
        >
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold ">Weith</h2>
                <button
                    className="py-1 px-2 bg-white text-green-500 text-sm rounded text-center"
                    onClick={() => {
                        disconnect();
                        setFlipCard(false);
                    }}
                >
                    Disconnect
                </button>
            </div>

            <p>Your web based ethereum wallet!</p>

            <WalletAddress />

            <Tabs defaultValue="my_wallet" >
                <TabsContent value="my_wallet">
                    <UserBalance />
                </TabsContent>

                <TabsContent value="send">
                    <SendTransaction />
                </TabsContent>

                <TabsList className="w-full mt-4 ">
                    <TabsTrigger value="my_wallet" className="w-full">My wallet</TabsTrigger>
                    <TabsTrigger value="send" className="w-full">Send ETH</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}