import messagesReducer from './messages';

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
      const testMessages = messagesReducer(
        [],
        {
          type: 'NEW_MESSAGE',
          payload: { text: 'message test' }
        }
      );
      // no need to verify the id, it is uniq ;)
      expect(testMessages[0].type).toBe('info');
      expect(testMessages[0].text).toBe('message test');
    })

    test('new message with custom type', () => {
      const testMessages = messagesReducer(
        [],
        {
          type: 'NEW_MESSAGE',
          payload: { type: 'error', text: 'message test' }
        }
      );
      // no need to verify the id, it is uniq ;)
      expect(testMessages[0].type).toBe('error');
      expect(testMessages[0].text).toBe('message test');
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
