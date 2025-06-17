// app/results/page.js
'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ResultsClientPage = dynamic(() => import('../../components/ResultsClientPage'), {
  ssr: false,
});

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsClientPage />
    </Suspense>
  );
}
