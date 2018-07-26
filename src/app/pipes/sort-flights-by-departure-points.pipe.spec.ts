import { SortFlightsByDeparturePointsPipe } from './sort-flights-by-departure-points.pipe';

describe('SortFlightsByDeparturePointsPipe', () => {
  it('create an instance', () => {
    const pipe = new SortFlightsByDeparturePointsPipe();
    expect(pipe).toBeTruthy();
  });
});
