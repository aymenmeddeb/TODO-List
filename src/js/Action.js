import {addtask,deletetask,isdone,edittask } from "./ActionType"

export const  CreateTask = (payload) => {
 return{type:addtask,
 payload,
};
} ;


export const  DeleteTask = (payload) => {
   return{ type:deletetask,
    payload,
   };
  }; 
  
  export const  IsDone = (payload) => {
   return{ type:isdone,
    payload,
   };
  }; 

  export const  editTask = (payload) => {
   return{ type:edittask,
    payload,
   };
  }; 