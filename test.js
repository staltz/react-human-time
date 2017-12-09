const test = require('tape');
const React = require('React');
const HumanTime = require('./index').default;
const TestRenderer = require('react-test-renderer');

test('updates human time after a minute', {timeout: 70e3}, function (t) {
  class TestComponent extends React.Component {
    render() {
      return React.createElement('h1', null,
        React.createElement(HumanTime, {time: Date.now()})
      );
    }
  }

  const elem = React.createElement(TestComponent);
  const testRenderer = TestRenderer.create(elem);

  const result1 = testRenderer.toJSON();
  t.ok(result1, 'should have rendered');
  t.equal(result1.children.length, 1, 'should have one child');
  t.equal(result1.children[0], 'now', 'should show "now"');

  setTimeout(() => {
    const result1 = testRenderer.toJSON();
    t.equal(result1.children[0], 'now', 'should (still) show "now" after 30s');
  }, 30e3)

  setTimeout(() => {
    const result2 = testRenderer.toJSON();
    t.ok(result2, 'should have rendered');
    t.equal(result2.children.length, 1, 'should have one child');
    t.equal(result2.children[0], '1 min ago', 'should show "1 min ago"');
    testRenderer.unmount();
    t.end();
  }, 63e3);
});

