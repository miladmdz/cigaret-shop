"use client";

import React, { useState } from "react";

import AddressItem from "./AddressItem.component";

function AddressList({ addresses }) {
  const [selectedAddress, setSelectedAddress] = useState();

  return (
    <div className="w-full flex items-center gap-5 flex-wrap">
      {addresses.map((address) => (
        <AddressItem
          key={address.id}
          address={address}
          isSelected={selectedAddress?.id === address.id}
          setAddress={(newValue) => setSelectedAddress(newValue)}
        />
      ))}
    </div>
  );
}

export default AddressList;
