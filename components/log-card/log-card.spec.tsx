import { render } from '@testing-library/react';

import LogCard from './log-card';

describe('LogCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogCard />);
    expect(baseElement).toBeTruthy();
  });
});
