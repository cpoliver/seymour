import React from 'react';
import { shallow } from 'enzyme';

import FeedList from '../../src/components/feed-list';

import { responseData } from '../test-data/mock-feed-data';

const mockFeedListData = [responseData.feed];

describe('the feed-list component', () => {
  it('should render without crashing', () => {
    const feedList = shallow(<FeedList feeds={[]}/>);
  });

  describe('when the feed list contains no feeds', () => {
    it('should render the feed list', () => {
      const feedList = shallow(<FeedList feeds={[]}/>);

      expect(feedList.children().length).toEqual(0);
    });
  });

  describe('when the feed list contains one feed', () => {
    it('should render the feed list', () => {
      const feedList = shallow(<FeedList feeds={mockFeedListData}/>);

      expect(feedList.children().length).toEqual(1);
    });
  });

  describe('when the feed list contains several feeds', () => {
    it('should render the feed list', () => {
      const mockFeedListDataWithMultipleFeeds = [responseData.feed, responseData.feed, responseData.feed],
            feedList = shallow(<FeedList feeds={mockFeedListDataWithMultipleFeeds}/>);

      expect(feedList.children().length).toEqual(3);
    });
  });
});
