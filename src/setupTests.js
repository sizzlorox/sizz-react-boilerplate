/* eslint import/no-extraneous-dependencies: 0 */

import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import classnames from 'classnames';
import PropTypes from 'prop-types';
// Needed for fetch
// require('isomorphic-fetch');
Enzyme.configure({ adapter: new Adapter() });

global.React = React;
global.toJson = toJson;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.classnames = classnames;
global.PropTypes = PropTypes;
