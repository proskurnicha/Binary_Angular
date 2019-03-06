import { SortFlightsByDeparturePointsPipe } from './sort-flights-by-departure-points.pipe';

describe('SortFlightsByDeparturePointsPipe', () => {
  let pipe: SortFlightsByDeparturePointsPipe;
  
  const mockList = [];
  const users = [
      { 'user': 'fred',   'age': 48 },
      { 'user': 'andr', 'age': 34 },
      { 'user': 'nata',   'age': 40 },
      { 'user': 'barney', 'age': 36 }
    ];
     
  const outputByAgeUsers = [
    { 'user': 'andr', 'age': 34 }, 
    { 'user': 'barney', 'age': 36 }, 
    { 'user': 'nata',   'age': 40 },
    { 'user': 'fred',   'age': 48 }
  ];  

  const outputByUsers = [
    { 'user': 'andr', 'age': 34 }, 
    { 'user': 'barney', 'age': 36 }, 
    { 'user': 'fred',   'age': 48 },
    { 'user': 'nata',   'age': 40 }
  ];  

  beforeEach(() => {
    pipe = new SortFlightsByDeparturePointsPipe();
  });

  it('create an instance', () => {
    const pipe = new SortFlightsByDeparturePointsPipe();
    expect(pipe).toBeTruthy();
  });

  it(`Sort by age in ascending order`, () => {
    const result = pipe.transform(users, 'age', 'asc');
    expect(result).toEqual(outputByAgeUsers);
  });

  it(`Sort by user in ascending order`, () => {
    const result = pipe.transform(users, 'user', 'asc');
    expect(result).toEqual(outputByUsers);
  });

  it(`Sort by '' in ascending order`, () => {
    const result = pipe.transform(users, '', 'asc');
    expect(result).toEqual(users);
  });

  it(`Sort by '' in '' order`, () => {
    const result = pipe.transform(users, '', '');
    expect(result).toEqual(users);
  });
});
