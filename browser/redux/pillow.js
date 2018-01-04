//This is for pillow State --> update until addToCart --> no need for store in my opinion.
//needs link with user after add shopping cart then check out

import axios from 'axios';

///////INITIAL STATE/////
const initialState = {
  pillowSize: '',
  pattern: '',
  colors: []
}

//////ACTION TYPES/////
//const CREATE_PILLOW = 'CREATE_PILLOW';
const UPDATE_PILLOW = 'UPDATE_PILLOW';
//MAYBE ADDTOCART???



// ///////ACTION CREATORS/////
// function createPillow (pillow) {
//   return {
//     type: CREATE,
//     pillow
//   }
// }

//After addToCart
function updatePillow (pillow) {
  return {
    type: UPDATE,
    pillow
  }
}
// const create = pillow   => ({ type: CREATE, pillow });
// const update = pillow   => ({ type: UPDATE, pillow });



///////REDUCERS///////
export default function reducer (state = initialState, action) {
  switch (action.type) {

    case UPDATE_PILLOW :
    return Object.assign({}, state, {

    })

    // case REMOVE:
    //   return stories.filter(story => story.id !== action.id);

    // case REMOVE_USER:
    //   return stories.filter(story => story.author_id !== action.id);

    // case UPDATE:
    //   return stories.map(story => (
    //     action.story.id === story.id ? action.story : story
    //   ));

    default:
      return state;
  }
}

/////THUNK CREATORS/////

export const fetchStories = () => dispatch => {
  axios.get('/api/stories')
       .then(res => dispatch(init(res.data)))
       .catch(err => console.error('Fetching stories unsuccessful', err));
};

export const removeStory = id => dispatch => {
  axios.delete(`/api/stories/${id}`)
       .then(() => dispatch(remove(id)))
       .catch(err => console.error(`Removing story: ${id} unsuccessful`, err));
};

export const addStory = story => dispatch => {
  axios.post('/api/stories', story)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating story: ${story} unsuccessful`, err));
};

export const updateStory = (id, story) => dispatch => {
  axios.put(`/api/stories/${id}`, story)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating story: ${story} unsuccessful`, err));
};
