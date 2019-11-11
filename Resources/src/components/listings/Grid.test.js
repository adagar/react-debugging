import data from '../../data/courses.json';

const numItems = data.length;

describe('Number tests', () => {
  test('Number of items = 12', () => {
    expect(numItems).toBe(12);
  });

  test('Number of items to be greater than 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

describe('String tests', () => {
  const dataTest = data[0].title;

  test('There is a JS in this title', () => {
    expect(dataTest).toMatch(/JS/);
  });

  test('The title contains React', () => {
    expect(dataTest).toContain('React');
  });
});


describe('Arrays and objects', () => {
  const data2 = ['React Native', 'MeteorJS'];

  test('The list of course mentions react native and meteorjs', () => {
    expect(['React Native', 'MeteorJS', 'React']).toEqual(expect.arrayContaining(data2));
  });

  test('The first course to have property of title', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});
