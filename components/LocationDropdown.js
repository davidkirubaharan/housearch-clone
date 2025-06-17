import { useState, useRef, useEffect } from 'react';

const allLocations = [
  'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah',
  'Fujairah', 'Umm Al Quwain'
];

export default function LocationDropdown({ selected = [], onChange }) {
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Filter list
  const filtered = allLocations.filter(
    loc =>
      loc.toLowerCase().includes(input.toLowerCase()) &&
      !selected.includes(loc)
  );

  const handleAdd = (loc) => {
    onChange([...selected, loc]);
    setInput('');
  };

  const handleRemove = (loc) => {
    onChange(selected.filter((l) => l !== loc));
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
        Location {selected.length > 0 ? `(${selected.length})` : ''}
      </div>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            background: '#fff',
            width: '400px',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            zIndex: 100,
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          {/* Selected tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '8px', gap: '6px' }}>
            {selected.map(loc => (
              <span
                key={loc}
                style={{
                  background: '#f3f3f3',
                  padding: '4px 8px',
                  borderRadius: '16px',
                  fontSize: '14px'
                }}
              >
                {loc}
                <span
                  onClick={() => handleRemove(loc)}
                  style={{
                    marginLeft: '8px',
                    cursor: 'pointer',
                    color: '#888'
                  }}
                >
                  ×
                </span>
              </span>
            ))}
          </div>

          {/* Input box */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search location..."
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginBottom: '10px'
            }}
          />

          {/* Filtered options */}
          <div>
            {filtered.length > 0 ? (
              filtered.map(loc => (
                <div
                  key={loc}
                  onClick={() => handleAdd(loc)}
                  style={{
                    padding: '6px',
                    cursor: 'pointer',
                    borderBottom: '1px solid #eee'
                  }}
                >
                  {loc}
                </div>
              ))
            ) : (
              <div style={{ color: '#999' }}>No matches found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
