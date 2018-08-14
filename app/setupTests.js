const React = require('react');
import Enzyme, { shallow, render, mount } from 'enzyme';
const { expect } = require('chai');
const sinon = require('sinon');
const enumHelper = require('./app/utils/enumHelper');
const Adapter = require('enzyme-adapter-react-16');
// Needed for fetch
require('isomorphic-fetch');
Enzyme.configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.expect = expect;
global.sinon = sinon;
global.enumHelper = enumHelper;