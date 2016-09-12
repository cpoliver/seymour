import React from 'react';
import { shallow } from 'enzyme';

import Feed from '../../src/components/feed';
import FeedItem from '../../src/components/feed-item';

import { responseData } from '../test-data/mock-feed-data'; 
const mockFeedData = responseData.feed;

describe('the feed component', () => {
  it('should render without crashing', () => {
    const feed = shallow(<Feed feed={mockFeedData}/>);
  });

  it('should render a title', () => {
    const feed = shallow(<Feed feed={mockFeedData}/>),
          title = feed.find('.c-feed__title');

    expect(title.props().href).toBe('https://www.theguardian.com/uk');
    expect(title.text()).toBe('The Guardian');
  });

  it('should render a description', () => {
    const feed = shallow(<Feed feed={mockFeedData}/>),
          description = feed.find('.c-feed__description');

    const expected = 'Latest news, sport, business, comment, analysis and reviews from the Guardian, the world\'s leading liberal voice';

    expect(description.text()).toEqual(expected);
  });

  describe('when the feed contains no items', () => {
    it('should render the feed list', () => {
      const mockFeedDataWithNoEntries = Object.assign({}, mockFeedData, { entries: [] }),
            feed = shallow(<Feed feed={mockFeedDataWithNoEntries}/>);

      expect(feed.containsMatchingElement(<FeedItem/>)).toEqual(false);
    });
  });
  
  describe('when the feed contains one item', () => {
    it('should render the feed list', () => {
      const mockFeedDataWithSingleEntry = Object.assign({}, mockFeedData, { entries: [ mockFeedData.entries[0] ] }),
            feed = shallow(<Feed feed={mockFeedDataWithSingleEntry}/>);
      
      expect(feed.find('.c-feed__items').children().length).toEqual(1);
    });
  });
  
  describe('when the feed contains several items', () => {
    it('should render the feed list', () => {
      const feed = shallow(<Feed feed={mockFeedData}/>);
      
      expect(feed.find('.c-feed__items').children().length).toEqual(3);
    });
  });
});
