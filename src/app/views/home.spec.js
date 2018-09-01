/*
  eslint
  max-len: 0,
  func-names: 0
*/

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Hero from '../components/hero/Hero';
import Card from '../components/card/Card';
import Profile from '../components/profile/Profile';
import Footer from '../components/footer/Footer';

// VIEW
import Home from './Home';

describe('View Home', function () {
  beforeEach(() => {
    this.wrapper = shallow(<Home />);
  });

  it('Initialized with Content Container', () => {
    const contentDiv = this.wrapper.find('.content');
    expect(contentDiv.exists()).toBe(true);
    expect(contentDiv.length).toBe(1);
  });

  it('Initialized with Hero', () => {
    const heroContent = this.wrapper.find(Hero);
    expect(heroContent.exists()).toBe(true);
    expect(heroContent.length).toBe(1);
  });

  it('Initialized with Home content', () => {
    const homeContent = this.wrapper.find('.home-content');
    expect(homeContent.exists()).toBe(true);
    expect(homeContent.length).toBe(1);
    expect(homeContent.find('p').length).toBe(1);
    expect(homeContent.text()).toEqual('This was made for me to keep a well structured boilerplate for personal use. It\'s intended to keep being updated as I learn more about structuring React Apps. I\'m trying to get as much knowledge as I can with ReactJS\'s best practices and applying it here.');
  });

  it('Initialized with Cards', () => {
    let cardContent = this.wrapper.find(Card);
    expect(cardContent.exists()).toBe(true);
    expect(cardContent.length).toBe(3);

    cardContent = cardContent.getElements();
    expect(cardContent[0].props.cardTitle).toEqual('Minimal');
    expect(cardContent[0].props.children).toEqual('As minimal as can be.');
    expect(cardContent[1].props.cardTitle).toEqual('Easy');
    expect(cardContent[1].props.children).toEqual('Made to be easy to change and maintain');
    expect(cardContent[2].props.cardTitle).toEqual('Practice');
    expect(cardContent[2].props.children).toEqual('Made for practice!');
  });

  it('Initialized with Profiles', () => {
    const profileDiv = this.wrapper.find('.profile-content');
    expect(profileDiv.exists());
    expect(profileDiv.length).toBe(1);

    let profileHeaders = profileDiv.find('h3');
    expect(profileHeaders.exists()).toBe(true);
    expect(profileHeaders.length).toBe(2);
    profileHeaders = profileHeaders.getElements();
    expect(profileHeaders[0].type).toBe('h3');
    expect(profileHeaders[0].props.children).toEqual('Creator');
    expect(profileHeaders[1].type).toBe('h3');
    expect(profileHeaders[1].props.children).toEqual('Contributors');

    const profileParagraph = profileDiv.find('p');
    expect(profileParagraph.exists()).toBe(true);
    expect(profileParagraph.length).toBe(1);
    expect(profileParagraph.text()).toEqual('Hopefully people will contribute in the future');

    let profileContent = this.wrapper.find(Profile);
    expect(profileContent.exists()).toBe(true);
    expect(profileContent.length).toBe(3);

    profileContent = profileContent.getElements();
    expect(profileContent[0].props.github).toEqual('https://github.com/sizzlorox');
    expect(profileContent[0].props.children).toEqual('sizzlorox');
    expect(profileContent[1].props.github).toBeUndefined();
    expect(profileContent[1].props.children).toEqual('Some other guy with no github');
    expect(profileContent[2].props.github).toEqual('//google.com');
    expect(profileContent[2].props.children).toEqual('Some other guy');
  });

  it('Initialized with Footer', () => {
    const footerContent = this.wrapper.find(Footer);
    expect(footerContent.exists()).toBe(true);
    expect(footerContent.length).toBe(1);
  });

  it('Should render correctly', () => {
    const renderJSON = render((
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    ));
    expect(toJson(renderJSON)).toMatchSnapshot();
  });
});
