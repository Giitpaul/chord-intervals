import React, { useState } from 'react';
import { Title } from './components/Title';
import { Explanation } from './components/Explanation';
import { KeySelector } from './components/KeySelector';
import { ChordTable } from './components/ChordTable';

function App() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Title />
      <Explanation />
      <KeySelector selectedKey={selectedKey} onKeyChange={setSelectedKey} />
      <ChordTable selectedKey={selectedKey} />
    </div>
  );
}

export default App;