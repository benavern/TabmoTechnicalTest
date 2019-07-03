import messagesReducer from './messages';
jest.mock('uniqid', () => jest.fn(() => 'uniqid'));

describe('messages reducer', () => {
  describe('NEW_MESSAGE', () => {
    test('new message without text', () => {
      expect(messagesReducer(
        [],
        {
          type: 'NEW_MESSAGE',
          payload: {}
        }
      )).toEqual([]);
    })

    test('new message without type', () => {
      expect(messagesReducer(
        [],
        {
          type: 'NEW_MESSAGE',
          payload: { text: 'message test' }
        }
      )).toEqual([{
        type: 'info',
        text: 'message test',
        id: 'uniqid'
      }]);
    })

    test('new message with custom type', () => {
      expect(messagesReducer(
        [],
        {
          type: 'NEW_MESSAGE',
          payload: { type: 'error', text: 'message test' }
        }
      )).toEqual([{
        type: 'error',
        text: 'message test',
        id: 'uniqid'
      }]);
    })
  })

  describe('CLOSE_MESSAGE', () => {
    test('1 match in the store', () => {
      expect(messagesReducer(
        [{ type: 'error', text: 'message test', id: 'xxx' }],
        {
          type: 'CLOSE_MESSAGE',
          payload: 'xxx',
        }
      )).toEqual([]);
    })

    test('no match in the store', () => {
      expect(messagesReducer(
        [{ type: 'error', text: 'message test', id: 'xxx' }],
        {
          type: 'CLOSE_MESSAGE',
          payload: 'yyy',
        }
      )).toEqual([{ type: 'error', text: 'message test' ,id: 'xxx'}]);
    })
  })
})
