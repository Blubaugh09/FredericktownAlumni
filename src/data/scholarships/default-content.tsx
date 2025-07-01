import React from 'react';

export default function DefaultScholarshipContent({ name }: { name: string }) {
  return (
    <p className="italic text-gray-600">
      This section will contain press release information about the {name} Scholarship. Content will be added manually.
    </p>
  );
} 