import React from 'react';
import axios from "axios";
import create from "zustand";

// const useStore = create((set, get) => ({
//     id: 2,
//     setId: (id) => set({id: id}),
//     userName: "d",
//     fetchUserName: async () => {
//         const response = await axios.get(`/api/user-name?id=${get().id}`);
//         set({userName: response.data.name});
//     }
// }));

const useStore = create((set) => ({
    userName: "",
    fetchUserName: async (id) => {
        const response = await axios.get(`/api/user-name?id=${id}`);
        set({userName: response.data.name});
    }
}));

const CurrentUser = () => {
    const userName = useStore((state) => state.userName);

    return <div>{userName}</div>
}

const CurrentUserInfo = () => {
    // const [id, setId] = useStore((state) => [state.id, state.setId]);
    const fetchUserName = useStore((state) => state.fetchUserName);
    // useEffect(() => {
    //     fetchUserName().then();
    // }, [id, fetchUserName]);


    return (
        <>
            <CurrentUser/>
            {/*<input type="text" value={id} onChange={(e) => setId(e.target.value)}/>*/}
            <input type="text" onChange={(e) => {fetchUserName(e.target.value).then()}}/>
        </>
    )
}

export default CurrentUserInfo;
