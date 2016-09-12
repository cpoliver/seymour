import React from 'react';
import { shallow } from 'enzyme';

import FeedItem from '../../src/components/feed-item';

import mockFeedItemData from '../test-data/mock-feed-item-data';

describe('the feed item component', () => {
  it('should render without crashing', () => {
    const feedItem = shallow(<FeedItem feedItem={mockFeedItemData}/>);
  });

  it('should render the published date/time', () => {
    const feedItem = shallow(<FeedItem feedItem={mockFeedItemData}/>),
          published = feedItem.find('.c-feed-item__published');

    expect(published.text()).toBe('Posted: Mon, 05 Sep 2016 14:07:56 -0700');
  });

  it('should render the title', () => {
    const feedItem = shallow(<FeedItem feedItem={mockFeedItemData}/>),
          title = feedItem.find('.c-feed-item__title');

    expect(title.props().href).toBe('https://www.theguardian.com/society/2016/sep/05/violent-crimes-against-women-in-england-and-wales-reach-record-high');
    expect(title.text()).toBe('Violent crimes against women in England and Wales reach record high');
  });

  it('should render the content', () => {
    const feedItem = shallow(<FeedItem feedItem={mockFeedItemData}/>),
          content = feedItem.find('.c-feed-item__content');

    const expected = '<p class="c-feed-item__content"><p>Director of public prosecutions says use of social media to threaten and control is driving factor behind 10% rise in number of cases to 117,568 in 2015-16</p><p>The number of prosecutions relating to violence against women and girls in England and Wales reached a record level last year, the director of public prosecutions said, as she warned of the increasing use of social media to threaten and control.</p><p>Alison Saunders said the ease with which such crimes could be committed online was contributing to the increasing number of prosecutions for offences against women, including domestic abuse, rape and sexual assaults, which rose by almost 10% to 117,568 in 2015-6. </p> <a href="https://www.theguardian.com/society/2016/sep/05/violent-crimes-against-women-in-england-and-wales-reach-record-high">Continue reading...</a></p>';

    expect(content.html()).toBe(expected);
  });

  it('should render the categories', () => {
    const feedItem = shallow(<FeedItem feedItem={mockFeedItemData}/>),
          categories = feedItem.find('.c-feed-item__categories');

    const expectedText = [
      'Domestic violence',
      'Rape and sexual assault',
      'Wales',
      'Gender',
      'Society',
      'UK news'
    ];

    // TODO: add check for href once implemented

    categories.children().map((cat, i) => {
      expect(cat.text()).toBe(expectedText[i]);
    });
  });
});
