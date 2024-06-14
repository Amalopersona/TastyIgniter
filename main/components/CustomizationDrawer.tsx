import React, { useState } from 'react';
import { RadioGroup } from '@/components/ui/radio-group';
import { Drawer } from '@/components/ui/drawer';
import { Checkbox } from '@/components/ui/checkbox';

const CustomizationDrawer = ({ item, isOpen, onClose, onSave }) => {
  const [customizations, setCustomizations] = useState({
    addCheese: false,
    addExtraVeggies: false,
    breadType: 'white',
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCustomizations((prev) => ({ ...prev, [name]: checked }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setCustomizations((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(customizations);
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-bold mb-4">Customize your {item.name}</h2>
      <Checkbox
        name="addCheese"
        checked={customizations.addCheese}
        onChange={handleCheckboxChange}
      >
        Add Cheese
      </Checkbox>
      <Checkbox
        name="addExtraVeggies"
        checked={customizations.addExtraVeggies}
        onChange={handleCheckboxChange}
      >
        Add Extra Veggies
      </Checkbox>
      <RadioGroup name="breadType" value={customizations.breadType} onChange={handleRadioChange}>
      </RadioGroup>
      <button
        onClick={handleSave}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </Drawer>
  );
};

export default CustomizationDrawer;
