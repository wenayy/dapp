import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import   { useState } from 'react'
import { ed25519 } from "@noble/curves"
import bs58 from 'bs58'

function RequestAirdrop() {
  const [count, setcount] = useState(0);
  const [address, setaddress] = useState("");
  const [message, setmessage] = useState("");
  const { connection } = useConnection();
  const wallet = useWallet();

  const sendtoken = async () => {
    if (!wallet.publicKey || !address || !count) return;
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(address),
        lamports: Number(count) * LAMPORTS_PER_SOL,
      })
    );
    await wallet.sendTransaction(transaction, connection);
  };

  const onClick = async () => {
    if (!wallet.publicKey || !message) return;
    const sign = new TextEncoder().encode(message);
    const signature = await wallet.signMessage(sign);
    if (!ed25519.verify(signature, wallet.publicKey, sign)) throw new Error("wrong sign and key");
    alert("done successfully send message");
    console.log(`message${bs58.encode(signature)}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Recipient address"
        value={address}
        onChange={e => setaddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (SOL)"
        value={count}
        onChange={e => setcount(e.target.value)}
        min="0"
        step="any"
      />
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={e => setmessage(e.target.value)}
      />
      <button onClick={sendtoken}>Send Token</button>
      <button onClick={onClick}>Sign Message</button>
    </div>
  );
}

export default RequestAirdrop;