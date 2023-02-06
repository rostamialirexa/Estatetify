import React from 'react';

const FormSelect = ({
  value,
  name,
  className,
  onChange,
  listData,
  ...otherProps
}) => {
  return (
    <select
      value={value !== '' ? value : ''}
      name={name}
      onChange={onChange}
      className={className}
      {...otherProps}
    >
      <option value=''>Select</option>
      {listData?.map((listItem) => (
        <option key={listItem} value={listItem}>
          {listItem}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
