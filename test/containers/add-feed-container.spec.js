import { mapStateToProps, mapDispatchToProps} from '../../src/containers/add-feed-container';

import { FEED_ACTION_TYPES as actionType } from '../../src/actions/action-types';

describe('the add feed container', () => {
  const mockDispatch = jest.fn(),
        mockState = {};

  describe('the map state to props function', () => {
    it('should be defined', () => {
      expect(mapStateToProps).toBeDefined();
    });

    describe('when called', () => {
      it('should return a map containing the correct props', () => {
        const props = Object.keys(mapStateToProps(mockState));

        expect(props).toEqual([])
      });
    });
  });

  describe('the map dispatch to props function', () => {
    it('should be defined', () => {
      expect(mapDispatchToProps).toBeDefined();
    });

    describe('when called', () => {
      it('should return a map containing the correct props', () => {
        const props = Object.keys(mapDispatchToProps(mockDispatch));

        expect(props).toEqual([
          'onAddFeed'
        ]);
      });

      describe('the on click handler', () => {
        describe('when called', () => {
          it('should call dispatch with the correct action', () => {
            const url = 'http://newfeed.seymour.com',
                  handler = mapDispatchToProps(mockDispatch).onAddFeed;

            handler(url);

            expect(mockDispatch).toBeCalledWith({
              url,
              type: actionType.ADD_FEED
            });
          });
        });
      });
    });
  });
});
