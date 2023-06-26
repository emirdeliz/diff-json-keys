import example1 from './__mocks__/example1.json';
import example2 from './__mocks__/example2.json';
import example3 from './__mocks__/example3.json';
import example4 from './__mocks__/example4.json';
import example5 from './__mocks__/example5.json';
import { runDiff } from '..';


describe("Diff keys json", function () {
  it("Compare simple json no diff", function () {
    const result = runDiff(example1, example1);
    expect(result).toEqual({});
  });

  it("Compare simple json with diff", function () {
    const result = runDiff(example1, example2);
    expect(result).toEqual({
      TECH: 'Technician',
      TECH_ATTACH: 'Attach Technician',
      TECH_DETAILS: 'technician details',
      TECH_GROUP: 'Tech Group'
    });
  });

  it("Compare simple json with diff array", function () {
    const result = runDiff(example3, example2);
    expect(Object.keys(result)).toContain('TYPE_PROJECT_ITEMS');
    expect(result.TYPE_PROJECT_ITEMS[0]).toEqual({
        color: "info",
        icon: "fas fa-compass",
        label: "Strategic",
        value: 1,
    });
  });

  it("Compare simple json with diff two diff", function () { 
    const result = runDiff(example3, example4);
    expect(Object.keys(result)).toContain('TYPE_PROJECT_ITEMS');
    expect(Object.keys(result)).toContain('YEAR_OPTIONS');
  });

  it("Compare simple json with six diff", function () { 
    const result = runDiff(example1, example5);
    expect(Object.keys(result)).toContain('TECH');
    expect(Object.keys(result)).toContain('TECH_ATTACH');
    expect(Object.keys(result)).toContain('TECH_DETAILS');
    expect(Object.keys(result)).toContain('TECH_GROUP');
    expect(Object.keys(result)).toContain('YEAR_OPTIONS');
    expect(Object.keys(result)).toContain('TASK_STATUS');
  });

  it("Compare simple json with undefined params", function () { 
    const result = runDiff(undefined, undefined);
    expect(result).toEqual({});
  });
});