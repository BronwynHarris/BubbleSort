describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Jasmine tests for a bubble sort implementation', function() {

  it ('- should sort a simple integer list', function() {
    var unsorted = [17, 43, 216, 3, 9, 27],
        sorted = bubbleSort(unsorted);

    expect(sorted[0]).toEqual(3);
    expect(sorted[1]).toEqual(9);
    expect(sorted[2]).toEqual(17);
    expect(sorted[3]).toEqual(27);
    expect(sorted[4]).toEqual(43);
    expect(sorted[5]).toEqual(216);
    expect(sorted.length).toEqual(6);
  });

  it('- should sort positive and negative integers', function() {
    var unsorted = [17, -43, 216, 3, -9, 27],
        sorted = bubbleSort(unsorted);

    expect(sorted[0]).toEqual(-43);
    expect(sorted[1]).toEqual(-9);
    expect(sorted[2]).toEqual(3);
    expect(sorted[3]).toEqual(17);
    expect(sorted[4]).toEqual(27);
    expect(sorted[5]).toEqual(216);
    expect(sorted.length).toEqual(6);
  });

});
