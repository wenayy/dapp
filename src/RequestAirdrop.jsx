import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import React, { useState } from 'react';
import { ed25519 } from "@noble/curves/ed25519";
import bs58 from 'bs58';

function RequestAirdrop() {
  const [count, setCount] = useState(0);
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const { connection } = useConnection();
  const wallet = useWallet();

  // Send Token
  const sendToken = async () => {
    if (!wallet.publicKey || !address || !count) return;
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(address),
        lamports: Number(count) * LAMPORTS_PER_SOL,
      })
    );
    await wallet.sendTransaction(transaction, connection);
    alert(`✅ Sent ${count} SOL to ${address}`);
  };

  // Sign Message
  const signMessage = async () => {
    if (!wallet.publicKey || !message) return;
    const encoded = new TextEncoder().encode(message);
    const signature = await wallet.signMessage(encoded);

    const isValid = ed25519.verify(signature, encoded, wallet.publicKey.toBytes());
    if (!isValid) throw new Error("Signature verification failed");

    alert("✅ Message signed successfully!");
    console.log(`Signature (base58): ${bs58.encode(signature)}`);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Send Token Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          💸 <span>Send SOL</span>
        </h2>
        <input
          type="text"
          placeholder="Recipient Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="number"
          placeholder="Amount (SOL)"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          min="0"
          step="any"
          className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={sendToken}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-all py-3 rounded-xl shadow-md font-semibold"
        >
          Send Token
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600"></div>

      {/* Sign Message Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          ✍️ <span>Sign a Message</span>
        </h2>
        <input
          type="text"
          placeholder="Enter your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={signMessage}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90 transition-all py-3 rounded-xl shadow-md font-semibold"
        >
          Sign Message
        </button>
      </div>
    </div>
  );
}

export default RequestAirdrop;
