import { useState, useRef, useEffect } from 'react';

export default function PriceDropdown({ min = '', max = '', onChange }) {
  const [open, setOpen] = useState(false);
  const [priceMin, setPriceMin] = useState(min);
  const [priceMax, setPriceMax] = useState(max);
  const wrapperRef = useRef(null);

  const handleChange = () => {
    onChange({ priceMin, priceMax });
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
      <div className="filter-button ghost" onClick={() => setOpen(!open)}>
        Price, USD
      </div>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            background: '#fff',
            padding: '16px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            zIndex: 10,
            marginTop: '4px',
            display: 'flex',
            gap: '12px',
            width: '400px'
          }}
        >
          <input
            type="number"
            placeholder="Min"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            onBlur={handleChange}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '14px'
            }}
          />
          <input
            type="number"
            placeholder="Max"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            onBlur={handleChange}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '14px'
            }}
          />
        </div>
      )}
    </div>
  );
}
