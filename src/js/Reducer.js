import {addtask, deletetask,isdone,edittask} from "./ActionType"

 const initialstate={
 todo :[]
}

const Reducer=(state=initialstate,action)=>{
        switch(action.type){
            case addtask:
return {...state,todo:[...state.todo,action.payload]}
            case deletetask:
return {...state,todo:state.todo.filter(el=>el.id!==action.payload)}
            case isdone:
return  {...state,todo:state.todo.map((el)=>el.id==action.payload ?{...el, isdone:!el.isdone}:el )} ;       
            case edittask :
return  {...state,todo:state.todo.map((el)=>el.id==action.payload.id ?{...el,description:action.payload.description}:el )} ;                                                        
                
default:
        return state

        }
}





export default Reducer;