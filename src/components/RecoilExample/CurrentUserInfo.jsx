import React from 'react';
import {atom, selector, selectorFamily, useRecoilValue, useRecoilValueLoadable} from "recoil";
import axios from "axios";
import {ErrorBoundary} from "./ErrorBoundary";

const currentUserIDState = atom({
    key: 'CurrentUserID',
    default: 1,
});

// const tableOfUsers = [{name: "jimmy"}, {name: "kim"}];

// const currentUserNameState = selector({
//     key: 'CurrentUserName',
//     get: ({get}) => {
//         return tableOfUsers[get(currentUserIDState)].name;
//     },
// });

// const currentUserNameQuery = selector({
//     key: 'CurrentUserName',
//     get: async ({get}) => {
//         const response = await axios.get(`/api/user-name?id=${get(currentUserIDState)}`);
//         return response.data.name;
//     },
// });

const currentUserNameQuery = selectorFamily({
    key: 'CurrentUserName',
    get: (id) => {
        return async () => {
            const response = await axios.get(`/api/user-name?id=${id}`);
            return response.data.name;
        }
    },
});

const CurrentUser = () => {
    // const userName = useRecoilValue(currentUserNameQuery);
    // const userName = useRecoilValue(currentUserNameQuery(1));
    // const [id, setId] = useRecoilState(currentUserIDState);

    // return (
    //     <div>
    //         {userName}
    //         {/*<input type="text" value={id} onChange={(e) => {setId(e.target.value);}}/>*/}
    //     </div>
    // );
    const userName = useRecoilValueLoadable(currentUserNameQuery(1));
    if(userName.state === "loading") {
        return <div>loading...</div>;
    }
    if(userName.state === "hasError") {
        return <div>Something wrong...</div>;
    }
    return <div>{userName.contents}</div>
};

const CurrentUserInfo = () => {
    return (
        // <ErrorBoundary>
        //     <React.Suspense fallback={<div>Loading...</div>}>
                <CurrentUser/>
        //     </React.Suspense>
        // </ErrorBoundary>
    )
}

export default CurrentUserInfo;
