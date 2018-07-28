import { getNavs }  from './../services/index'
export default {

    namespace: 'navs',
  
    state: {
      list: [],
      active: 0
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        history.listen(({ pathname }) => {
            if (pathname === '/') {
              dispatch({
                type: 'fetch',
              });
            }
          });
      },
    },
  
    effects: {
      *fetch({}, {call, put }) { // eslint-disable-line
        const { data } = yield call(getNavs);
        yield put({ 
          type: 'save', 
          payload: data.list
        });
      }
    },
  
    reducers: {
      save(state, { payload:  list  } ) {
        return { 
            ...state, 
            list:list
        };
      },
      change(state, {payload:  active }) {
        return { 
          ...state, 
          active: active
        };
      }
    },
  
  };
  