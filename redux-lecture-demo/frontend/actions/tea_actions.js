// Actions are POJOs
// All actions have a "type"

// types should be constants to help us avoid spelling errors
export const RECEIVE_TEA = "RECEIVE_TEA";

// Action creators
//  functions that create and return an action (POJO) for us!

// note the implicit return of an object (our action!)
export const receiveTea = tea => ({
  type: RECEIVE_TEA,  // type
  tea                 // payload (shorthand tea: tea (same name -- es6)
});

// useful for testing
window.receiveTea = receiveTea;
