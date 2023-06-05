import React from 'react';
import './select-samples.scss';

export interface SelecSample {
  id: string;
  name: string;
};

interface SelectSamplesProps {
  options: SelecSample[];
  isDisabled: boolean;
  onSelect: (sampel: string, id: string) => void;
};

export const SalectSamples: React.FC<SelectSamplesProps> = ({
  options,
  isDisabled,
  onSelect,
}) => {
  const [selectedSample, setSeletedSample] = React.useState<string>();

  const handleSelect = (name: string, value: string) => {
    setSeletedSample(value);
    onSelect(name, value);
  };

  return (
    <form className='select-samples'>
      <div className='select-samples__wrapper'>
        <label className='select-samples__wrapper__label' htmlFor='sample1'>Select first sampel</label>
        <select
          className='select-samples__wrapper__select'
          name='sample1'
          onChange={(e) => handleSelect(e.target.name, e.target.value)}
        >
          <option value=''></option>
          {options.map(option => (
            <option key={option.id} value={option.id} disabled={selectedSample === option.id ? true : false}>{option.name}</option>
          ))}
        </select>
      </div>
      <div className='select-samples__wrapper'>
        <label className='select-samples__wrapper__label' htmlFor='sampel2'>Select second sampel</label>
        <select
          className='select-samples__wrapper__select'
          name='sampel2'
          disabled={isDisabled}
          onChange={(e) => handleSelect(e.target.name, e.target.value)}
        >
          <option value=''></option>
          {options.map(option => (
            <option key={option.id} value={option.id} disabled={selectedSample === option.id ? true : false}>{option.name}</option>
          ))}
        </select>
      </div>
    </form>
  );
};
