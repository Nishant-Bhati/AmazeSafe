import React from 'react'

const AddressCard = () => {
  return (
    <div>
      <div className='flex flex-col space-y-3'>
        <p className='font-semibold'>Raam Kumar</p>
        <p>Mujhari Industrial Area, Ballabgarh, Faridabad, Haryana-121004</p>
        <div className='pace-x-1'>
          <p className='font-semibold'>Phone Number</p>
          <p>9876543210</p>
        </div>
      </div>
    </div>
  );
}

export default AddressCard