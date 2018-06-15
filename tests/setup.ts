export const setUpTests = () => {
  const Enzyme = require('enzyme');
  const Adapter = require('enzyme-adapter-react-16');
  Enzyme.configure({ adapter: new Adapter() });
  return Enzyme;
};

export const setUpTestsWithDOM = () => {
  const Enzyme = setUpTests();
  const { JSDOM } = require('jsdom');

  const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
  const { window } = jsdom;

  function copyProps(src: any, target: any) {
    const props = Object.getOwnPropertyNames(src)
      .filter(prop => typeof target[prop] === 'undefined')
      .reduce((result, prop) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(src, prop),
      }), {});
    Object.defineProperties(target, props);
  }

  (global as any).window = window;
  (global as any).document = window.document;
  (global as any).navigator = {
    userAgent: 'node.js',
  };
  copyProps(window, global);
  return Enzyme;
};