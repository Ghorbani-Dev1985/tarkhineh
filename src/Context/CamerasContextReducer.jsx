import { createContext, useContext, useReducer } from "react";

const CamerasContext = createContext(null);
const CamerasDispatchContext = createContext(null);

function CamerasReducer(cameras, action) {
  switch (action.type) {
    case "add": {
      return [...cameras, action.payload];
    }
    case "delete": {
      return cameras.filter((s) => s.id !== action.payload);
    }
    case "edit": {
      return cameras.map((camera) =>
        camera.id === action.payload
          ? { ...camera, completed: !camera.completed }
          : camera
      );
    }
    default:
      throw new Error("unknown action" + action.type);
  }
}

export function CamerasReducerProvider({ children }) {
  const [users, dispatch] = useReducer(CamerasReducer, []);
  return (
    <CamerasContext.Provider value={users}>
      <CamerasDispatchContext.Provider value={dispatch}>
        {children}
      </CamerasDispatchContext.Provider>
    </CamerasContext.Provider>
  );
}

export function useCameras() {
  return useContext(CamerasContext);
}

export function useCamerasDispatch() {
  return useContext(CamerasDispatchContext);
}
