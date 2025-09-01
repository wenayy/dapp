import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import React, { useState } from 'react'

  function RequestAirdrop() {
    const [count,setcount]=useState(0);
     const [address ,setaddress]=useState("");
    const {connection}= useConnection();
    const [message,setmessage]=useState();
    const wallet =useWallet();
    const _key=wallet.publicKey;
    const transaction = new Transaction()

 const sendtoken= async()=>{
       transaction.add(SystemProgram.transfer({
            fromPubkey : _key ,
            toPubkey : new PublicKey(address) ,
            lamports :  Number(count)*LAMPORTS_PER_SOL
        }))

      
     
     

    }

    const onClick=async()=>{
        const sign = new TextDecoder().encode(message);
     const signature = await wallet.signMessage(sign);
     ed25519


    }


    


  return (
    <div> 
         <input type="text"  value={address}onChange={(e)=>setaddress(e.target.value)}>
        
        </input>
        <input type="number" value={count} onChange={(e)=>setcount(e.target.value)}>
        
        </input>
         <input type="number" value={ message} onChange={(e)=>setmessage(e.target.value)}>
        
        </input>
        <button onClick={onClick}> Send</button>
    </div>
  )
}

export default RequestAirdrop;