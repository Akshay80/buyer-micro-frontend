import { render } from '@testing-library/react';

import CardCarousel from './card-carousel';

describe('CardCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardCarousel />);
    expect(baseElement).toBeTruthy();
  });
});