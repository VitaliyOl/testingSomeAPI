import React from 'react';

export function MaterialCard({ item, onDelete, onUpdate }) {
  return (
    <div>
      <b>
        <p>Title: {item.title}</p>
      </b>
      <b>
        <p>Link: {item.link}</p>
      </b>

      <button
        type="button"
        onClick={() => {
          onDelete(item.id);
        }}
      >
        DELETE
      </button>
      <button
        type="button"
        onClick={() => {
          onUpdate({ ...item, title: Date.now() });
        }}
      >
        Update
      </button>
      <hr />
    </div>
  );
}
