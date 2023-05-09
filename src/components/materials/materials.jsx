import React from 'react';
import { MaterialCard } from 'components/MaterialCard/MaterialCard';

export function Materials({ items, ...otherProps }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <MaterialCard item={item} {...otherProps} />
        </li>
      ))}
    </ul>
  );
}
