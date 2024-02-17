import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
  cleanup();
});