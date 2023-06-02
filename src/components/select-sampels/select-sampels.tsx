import './select-sampels.scss';

export interface SelecSampel {
  id: string;
  name: string;
};

interface SelectSampelsProps {
  options: SelecSampel[];
  onSelect: (id: string) => void;
};

export const SalectSamples: React.FC<SelectSampelsProps> = ({
  options,
  onSelect,
}) => {
  // const handleSelect = (name: string, value: string) => {
  //   const sample = {
  //     name: name,
  //     value: value,
  //   };
  //   console.log(sample);
  // };

  return (
    <form className='select-sampels'>
      <div className='select-sampels__wrapper'>
        <label className='select-sampels__wrapper__label' htmlFor='sample1'>Select first sampel</label>
        <select
          className='select-sampels__wrapper__select'
          name='sample1'
          onChange={(e) => onSelect(e.target.value)}
          // onChange={(e) => handleSelect(e.target.name, e.target.value)}
        >
          <option value=''></option>
          {options.map(option => (
            <option key={option.id} value={option.id}>{option.name}</option>
          ))}
        </select>
      </div>
      <div className='select-sampels__wrapper'>
        <label className='select-sampels__wrapper__label' htmlFor='sampel2'>Select second sampel</label>
        <select
          className='select-sampels__wrapper__select'
          name='sampel2'
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value=''></option>
          {options.map(option => (
            <option key={option.id} value={option.id}>{option.name}</option>
          ))}
        </select>
      </div>
    </form>
  );
};
