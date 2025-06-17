// pages/api/locations.js

export default function handler(req, res) {
  const query = req.query.q?.toLowerCase() || '';

  const locations = [
    { id: 1, name: 'Dubai' },
    { id: 2, name: 'Abu Dhabi' },
    { id: 3, name: 'Sharjah' },
    { id: 4, name: 'Ras Al Khaimah' },
    { id: 5, name: 'Ajman' },
  ];

  const filtered = locations.filter((loc) =>
    loc.name.toLowerCase().includes(query)
  );

  res.status(200).json(filtered);
}
