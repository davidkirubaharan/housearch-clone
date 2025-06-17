import { useEffect, useRef, useState } from 'react';

const propertyTypes = ['Apartment', 'Duplex', 'Townhouse', 'Villa', 'Studio'];

export default function MoreFiltersDropdown({ selectedTypes = [], onChange }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const toggleType = (type) => {
    let updated;
    if (selectedTypes.includes(type)) {
      updated = selectedTypes.filter((t) => t !== type);
    } else {
      updated = [...selectedTypes, type];
    }
    onChange(updated);
  };

  const handleClickOutside = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="filter-dropdown" ref={wrapperRef} style={{ position: 'relative' }}>
      <div className="filter-button ghost" onClick={() => setOpen(!open)}>
        More filters
      </div>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '4px',
            background: '#fff',
            padding: '16px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            zIndex: 10,
            minWidth: '200px'
          }}
        >
          {propertyTypes.map((type) => (
            <label key={type} style={{ display: 'block', marginBottom: '8px' }}>
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
                style={{ marginRight: '8px' }}
              />
              {type}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
