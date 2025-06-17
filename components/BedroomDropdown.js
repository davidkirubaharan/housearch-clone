import { useState, useEffect, useRef } from 'react';

const bedroomOptions = ['Studio', '1', '2', '3', '4+'];

export default function BedroomDropdown({ selected = [], onChange }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const toggleOption = (value) => {
    const updated = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
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
    <div className="filter-dropdown" style={{ position: 'relative' }} ref={wrapperRef}>
      <div
        className="filter-button ghost"
        onClick={() => setOpen(!open)}
      >
        Bedrooms {selected.length > 0 ? `(${selected.length})` : ''}
      </div>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            background: '#fff',
            width: '300px',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            zIndex: 100,
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {bedroomOptions.map(option => (
              <button
                key={option}
                onClick={() => toggleOption(option)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '16px',
                  border: '1px solid #ccc',
                  background: selected.includes(option) ? '#111' : '#fff',
                  color: selected.includes(option) ? '#fff' : '#000',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
