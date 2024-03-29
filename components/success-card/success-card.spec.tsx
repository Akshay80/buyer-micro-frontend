import { render } from '@testing-library/react';

import SuccessCard from './success-card';

describe('SuccessCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SuccessCard />);
    expect(baseElement).toBeTruthy();
  });
});
