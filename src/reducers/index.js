export default function reducer(state = [], action) {
  const actions = {
  };

  return actions[action.type] ? actions[action.type]() : state;
}
