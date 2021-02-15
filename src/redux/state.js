import { rerenderEntireTree } from "../render";

let state = {

    profilePage: {
        postsData: [
            { id: 1, message: "Good morning", likesCount: 3 },
            { id: 2, message: "Hi you are owesome", likesCount: 2 },
            { id: 3, message: "Do not jouke with me", likesCount: 1 },
            { id: 4, message: "Do not jouke with me", likesCount: 7 }
        ]
    },

    dialogPage: {
        dialogsData: [
            { id: 1, name: "Kirill" },
            { id: 2, name: "Sergey" },
            { id: 3, name: "Bogdan" },
            { id: 4, name: "Mira" },
            { id: 5, name: "Jack" },
            { id: 6, name: "London" }
        ],

        messagesData: [
            { id: 1, message: "Good morning" },
            { id: 2, message: "Hi you are owesome" },
            { id: 3, message: "Do not jouke with me" },
        ]
    }



};

export let addPost = (postMessage) => {
    let newMessage = {
        id: 5,
        message: postMessage,
        likesCount: 3
    };
    state.profilePage.postsData.push(newMessage)
    rerenderEntireTree(state);
}


export default state;