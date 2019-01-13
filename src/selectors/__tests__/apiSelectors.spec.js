import generateAppState from '../../testMocks/appState.mock';
import { IAppState, IFrpData, ITeamData } from '../../types/state.d';
import * as apiSelectors from '../apiSelectors';
import makePhotoUrl from '../../utils/makePhotoUrl';
import { BLANK_RICHEDITOR_STATE } from '../../consts';
import { makePhotoSquare } from '../../utils';

describe('apiSelectors', () => {
  const state: IAppState = generateAppState();
  const teamDataFromState = state.api.teamData as ITeamData;

  describe('getTeamData', () => {
    it('should return the teamData', () => {
      const actual = apiSelectors.getTeamData(state);
      expect(actual).toEqual(state.api.teamData);
    });
    it('returns empty object as initial value', () => {
      const localState = { ...state, api: { ...state.api, teamData: null } };
      const actual = apiSelectors.getTeamData(localState);
      expect(actual).toEqual({});
    });
  });

  describe('getFundraisingConfiguration', () => {
    it('should return the fundraisingConfiguration', () => {
      const actual = apiSelectors.getFundraisingConfiguration(state);
      expect(actual).toEqual({
        currencyCode: 'GBP',
        targetAmount: '123',
      });
    });
  });

  describe('getCurrencyCode', () => {
    it('should return the currencyCode', () => {
      const actual = apiSelectors.getCurrencyCode(state);
      expect(actual).toEqual('GBP');
    });
  });

  describe('getCharityId', () => {
    it('should return the charity Id', () => {
      const actual = apiSelectors.getCharityId(state);
      expect(actual).toEqual(123);
    });
  });

  describe('getShortName', () => {
    it('should return the short name', () => {
      const actual = apiSelectors.getShortName(state);
      expect(actual).toEqual(teamDataFromState.shortName);
    });
    it('returns empty string as initial value', () => {
      const localState = {
        ...state,
        api: {
          ...state.api,
          teamData: { ...teamDataFromState, shortName: null },
        },
      };
      const actual = apiSelectors.getShortName(localState as any);
      expect(actual).toBe('');
    });
  });

  describe('getTeamFundraisingTarget', () => {
    it('should return the FRP target', () => {
      const actual = apiSelectors.getTeamFundraisingTarget(state);
      expect(actual).toEqual('123');
    });
    it('returns empty string as initial value', () => {
      const localState = {
        ...state,
        api: {
          ...state.api,
          teamData: {
            ...teamDataFromState,
            fundraisingConfiguration: {
              ...teamDataFromState.fundraisingConfiguration,
              targetAmount: null,
            },
          },
        },
      };
      const actual = apiSelectors.getTeamFundraisingTarget(localState as any);
      expect(actual).toEqual('');
    });
  });

  describe('isShortNameValid', () => {
    it('should return the value of isShortNameValid', () => {
      const actual = apiSelectors.isShortNameValid(state);
      expect(actual).toEqual(state.api.isShortNameValid);
    });
  });

  describe('getTeamGuid', () => {
    it('should return the value of page guid', () => {
      const actual = apiSelectors.getTeamGuid(state);
      expect(actual).toEqual(teamDataFromState.teamGuid);
    });
  });

  describe('getStory', () => {
    it('JSON parses when string', () => {
      const story = { json: true };
      const localState = {
        ...state,
        api: {
          ...state.api,
          teamData: { ...teamDataFromState, story: JSON.stringify(story) },
        },
      };
      const actual = apiSelectors.getStory(localState);
      expect(actual).toEqual(story);
    });
    it('returns blank state when null', () => {
      const localState = {
        ...state,
        api: {
          ...state.api,
          teamData: { ...teamDataFromState, story: null },
        },
      };
      const actual = apiSelectors.getStory(localState);
      expect(actual).toEqual(BLANK_RICHEDITOR_STATE);
    });
    it('returns the story', () => {
      const story = { json: true };
      const localState = {
        ...state,
        api: { ...state.api, teamData: { ...teamDataFromState, story } },
      };
      const actual = apiSelectors.getStory(localState as any);
      expect(actual).toEqual(story);
    });
  });

  describe('getTeamName', () => {
    it('should return the value of team name', () => {
      const actual = apiSelectors.getTeamName(state);
      expect(actual).toEqual('teamNameTest');
    });
    it('returns empty string as initial value', () => {
      const localState = {
        ...state,
        api: {
          ...state.api,
          teamData: { ...teamDataFromState, name: null },
        },
      };
      const actual = apiSelectors.getTeamName(localState as any);
      expect(actual).toBe('');
    });
  });

  describe('getHeroImage', () => {
    it('should return the value of team name', () => {
      const actual = apiSelectors.getHeroImage(state);
      expect(actual).toEqual('heroImage');
    });
  });
  describe('getEventId', () => {
    it('should return the value of team name', () => {
      const actual = apiSelectors.getEventId(state);
      expect(actual).toEqual(100);
    });
  });
  describe('getTotalAmount', () => {
    it('should return the value of team name', () => {
      const actual = apiSelectors.getTotalAmount(state);
      expect(actual).toEqual(300);
    });
  });
  describe('getEventData', () => {
    it('should return the value of team name', () => {
      const actual = apiSelectors.getEventData(state);
      expect(actual).toEqual(state.api.eventData && state.api.eventData);
    });
  });
  describe('getFundraisingPagesData', () => {
    it('should return fundraising pages data', () => {
      const actual = apiSelectors.getFundraisingPagesData(state);
      expect(actual).toEqual(state.api.fundraisingPagesData);
    });
  });
  describe('getMembersListData', () => {
    it('should return members list data', () => {
      const actual = apiSelectors.getMembersListData(state);
      expect(actual).toEqual(state.api.membersListData);
    });
  });
  describe('getNumberOfMembers', () => {
    it('should return number of members', () => {
      const actual = apiSelectors.getNumberOfMembers(state);
      expect(actual).toEqual(state.api.membersListData.numberOfMembers);
    });
  });
  describe('getSlicedMembersList', () => {
    it('should return sliced members list data', () => {
      const actual = apiSelectors.getSlicedMembersList(2)(state);
      expect(actual).toEqual([
        {
          picture: makePhotoUrl(makePhotoSquare('profileImage')),
          id: '12',
        },
        {
          picture: makePhotoUrl(makePhotoSquare('profileImage')),
          id: '13',
        },
      ]);
    });
    it('should return an empty array when there are no members list', () => {
      const localState = {
        ...state,
        api: {
          ...state.api,
          membersListData: { numberOfMembers: 0, members: [] },
        },
      };
      const actual = apiSelectors.getSlicedMembersList(2)(localState);
      expect(actual).toEqual([]);
    });
  });
  describe('getMembersListExcludingLinkedFRP', () => {
    it('should return sliced member list data when there is no matching linked FRP', () => {
      const actual = apiSelectors.getMembersListExcludingLinkedFRP(state);
      expect(actual).toEqual([
        {
          picture: makePhotoUrl(makePhotoSquare('profileImage')),
          id: '12',
        },
        {
          picture: makePhotoUrl(makePhotoSquare('profileImage')),
          id: '13',
        },
      ]);
    });
    it('returns sliced member list excluding linked frp', () => {
      const actual = apiSelectors.getMembersListExcludingLinkedFRP({
        ...state,
        api: {
          ...state.api,
          frpData: {
            ...state.api.frpData,
            pageGuid: '12',
          },
        },
      });
      expect(actual).toEqual([
        {
          picture: makePhotoUrl(makePhotoSquare('profileImage')),
          id: '13',
        },
        {
          picture: makePhotoUrl(makePhotoSquare('profileImage')),
          id: '23',
        },
      ]);
    });
  });
  describe('getFrpData', () => {
    it('should return the frpData', () => {
      const actual = apiSelectors.getFrpData(state);
      expect(actual).toEqual(state.api.frpData);
    });
  });
  describe('getMembershipPolicy', () => {
    it('should return the inviteOnly', () => {
      const actual = apiSelectors.getMembershipPolicy(state);
      expect(actual).toEqual(state.api.teamData!.membershipPolicy);
    });
  });
  describe('getFrpCoverPhoto', () => {
    it('should return the frp cover photo', () => {
      const actual = apiSelectors.getFrpCoverPhoto(state);
      expect(actual).toEqual((state.api.frpData as IFrpData).photo);
    });
  });
  describe('getFrpShortName', () => {
    it('should return the short name', () => {
      const actual = apiSelectors.getFrpShortName(state);
      expect(actual).toEqual((state.api.frpData as IFrpData).shortName);
    });
  });
  describe('getCaptain', () => {
    it('should return the captain', () => {
      const actual = apiSelectors.getCaptain(state);
      expect(actual).toEqual((state.api.teamData as ITeamData).captain);
    });
  });
  describe('getCaptainId', () => {
    it('should return the captain id', () => {
      const actual = apiSelectors.getCaptainId(state);
      expect(actual).toEqual(
        (state.api.teamData as ITeamData).captain.userGuid,
      );
    });
  });
});
