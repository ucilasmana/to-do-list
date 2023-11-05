// reducers.js
export function tasksReducer(state, action) {
    switch (action.type)
  {
    case 'added':{
      return[...state, 
        {  
          id:action.id,
          activity:action.activity,
          date:action.date,
          status:false
        }
      ]
    }
    case 'completed':{
      return state.map(task=>task.id === action.id? {
            ...task, status:true}: task)
           
    }
    case 'changed': {
        return state.map(task=>task.id === action.id? {
            ...task,  activity:action.activity, date:action.date}: task)
        
      }
      case 'deleted': {
        return state.filter(task=>task.id !== action.id)
      }
      default:{
        return state
      }
  }
}
  export function modalReducer(state, action) {
    switch (action.type)
    {
        case 'openModal': {
              return {
                show:true,
                selectedId:action.id,
                modalType:action.modalType
                }
          }
          case 'closeModal':{
            return {
              show:false,
              selectedId:null,
              modalType:null
              }
            }          
          default:{
            return state
          }
    }
}
  