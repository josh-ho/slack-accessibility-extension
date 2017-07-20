describe('greeter', function () {
  it('should say Hello to the World', function () {
    expect(testHello('World')).toEqual('hello World');
  });
});

describe( 'application loaded', () => {
  it('should add a slack class to the document body', function() {
    initAccessibility();
    expect(document.body.className).toContain( 'slack-accessible' )
  })
} )
