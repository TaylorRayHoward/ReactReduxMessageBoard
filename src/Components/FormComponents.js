import React from 'react';

export function renderInputField(field) {
  return (
    <input type="text" placeholder={`Enter a ${field.label}...`} {...field.input} className={field.class}/>
  );
}
