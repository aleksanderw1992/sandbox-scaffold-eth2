"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
// import { useAccount } from "wagmi";
import { AddressInput } from "~~/components/scaffold-eth/Input";

// Custom function to validate Ethereum address
const isValidEthereumAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();
  const [inputAddress, setInputAddress] = useState("0x0016d51c0181e4B5c6A4C427F77a3CbB78C8564a");
  const [isValidAddress, setIsValidAddress] = useState(true);

  // Validate address whenever the input changes
  useEffect(() => {
    setIsValidAddress(isValidEthereumAddress(inputAddress));
  }, [inputAddress]);

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        {/* Address Input and Pink Elephant Section */}
        <div className="mt-10 flex flex-col items-center">
          <p className="mb-4 font-medium text-lg">
            Enter an address to send an NFT! When you click the Pink Elephant image, the NFT will be sent.
          </p>

          <div className="mb-4 font-medium text-lg">
            <AddressInput value={inputAddress} onChange={setInputAddress} placeholder="Enter wallet address" />
          </div>

          {/* Pink Elephant Image */}
          <div className="text-center">
            <Image
              src="/avatar_pink_elephant.png"
              alt="Pink Elephant"
              width={150}
              height={150}
              className={`cursor-pointer ${!isValidAddress ? "opacity-50" : ""}`}
              onClick={() => {
                if (isValidAddress) {
                  alert(`NFT sent to ${inputAddress}`);
                }
              }}
            />
            {!isValidAddress && (
              <p className="text-red-500 mt-2">Please enter a valid address to enable the Pink Elephant.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
