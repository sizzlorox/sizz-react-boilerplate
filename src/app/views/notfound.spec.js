// COMPONENTS
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';

// VIEWS
import NotFound from './NotFound';

describe.only('View Not Found', function () {

  beforeEach(() => {
    this.wrapper = shallow(<NotFound history={{ goBack: jest.fn() }} />);
  });

  it('Initialized with Content Container', () => {
    const contentDiv = this.wrapper.find('.content');
    expect(contentDiv.exists()).toBe(true);
    expect(contentDiv.length).toBe(1);
  });

  // TODO: Think of better name for this unit test
  it('Initialized with Not Found Class', () => {
    const notFoundDiv = this.wrapper.find('.not-found');
    expect(notFoundDiv.exists()).toBe(true);
    expect(notFoundDiv.length).toBe(1);

    const notFoundHeader = notFoundDiv.find('h3');
    expect(notFoundHeader.exists()).toBe(true);
    expect(notFoundHeader.length).toBe(1);
    expect(notFoundHeader.text()).toEqual(`Don't Panic!`);

    const notFoundSpan = notFoundDiv.find('span');
    expect(notFoundSpan.exists()).toBe(true);
    expect(notFoundSpan.length).toBe(1);
    expect(notFoundSpan.text()).toEqual('The page you visited does not exist.');
  });

  it('Initialized with Not Found Buttons', () => {
    const notFoundDiv = this.wrapper.find('.not-found-btns');
    expect(notFoundDiv.exists()).toBe(true);
    expect(notFoundDiv.length).toBe(1);

    let linkButton = this.wrapper.find('.hero-btn');
    expect(linkButton.exists()).toBe(true);
    expect(linkButton.length).toBe(2);

    linkButton = linkButton.getElements();
    expect(linkButton[0].type).toBe(Link);
    expect(linkButton[0].props.to).toEqual('/');
    expect(linkButton[0].props.children).toEqual('Home');
    expect(linkButton[1].type).toBe('a');
    // TODO: Make this test better, possibly simulate click as well with mocked result
    expect(linkButton[1].props.onClick).toBeDefined();
    expect(linkButton[1].props.children).toEqual('Back');
  });

  it('Initialized with Not Found Body', () => {
    const notFoundDiv = this.wrapper.find('.not-found-body');
    expect(notFoundDiv.exists()).toBe(true);
    expect(notFoundDiv.length).toBe(1);

    const notFoundParagraph = this.wrapper.find('p');
    expect(notFoundParagraph.exists()).toBe(true);
    expect(notFoundParagraph.length).toBe(1);
    expect(notFoundParagraph.text()).toEqual('Think of something witty and beautiful to fill up this space!');
  });

  it('Initialized with Footer', () => {
    const footerContent = this.wrapper.find(Footer);
    expect(footerContent.exists()).toBe(true);
    expect(footerContent.length).toBe(1);
  });

});