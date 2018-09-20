import ticketListReducer from './../../src/reducers/ticket-list-reducer';

describe('ticketListReducer', () => {

  let action;
  const sampleTicketData = {
    names : 'Eddie & Ed',
    location : '111DD',
    issue : 'Jest is not working',
    timeOpen : 1500000000000,
    id: 0
  }

  test('Should return something good', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test('should add ew ticket', () => {

    const { names, location, issue, timeOpen, id } = sampleTicketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });

  });


});
