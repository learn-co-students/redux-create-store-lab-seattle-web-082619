const createStore = (reducer) => {
  let state

  const getState = () => {
    return state
  }

  const dispatch = (action) => {
    state = candyReducer(state, action)
    render()
  }

  return {
    getState,
    dispatch
  }
}

function candyReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy]
    default:
      return state
  }
}

function render () {
  const container = document.getElementById('container')
  if (store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

const initialAction = { type: '@@INIT' }

const store = createStore(candyReducer)
store.dispatch(initialAction)
