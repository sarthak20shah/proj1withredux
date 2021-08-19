import { createStore } from "redux";
import { reducer } from "./rowData-redux/reducer";

const store = createStore(reducer);
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
