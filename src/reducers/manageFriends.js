export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return { ...state, friends: [...state.friends, action.friend] };
    case 'REMOVE_FRIEND':
      // The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
      // Otherwise, it returns -1, indicating that no element passed the test.
      const removalIndex = state.friends.findIndex(
        (friend) => friend.id === action.id
      );
      return {
        ...state,
        friends: [
          ...state.friends.slice(0, removalIndex),
          ...state.friends.slice(removalIndex + 1),
        ],
      };
    default:
      return state;
  }
}
