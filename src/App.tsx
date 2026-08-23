/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider } from './context/AppContext';
import { NativeAppShell } from './components/NativeAppShell';

export default function App() {
  return (
    <AppProvider>
      <NativeAppShell />
    </AppProvider>
  );
}

