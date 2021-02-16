let store = {

    _state: {

        profilePage: {
            postsData: [
                { id: 1, message: "Good morning", likesCount: 3 },
                { id: 2, message: "Hi you are owesome", likesCount: 2 },
                { id: 3, message: "Do not jouke with me", likesCount: 1 },
                { id: 4, message: "Do not jouke with me", likesCount: 7 }
            ],
            newPostText: "kirill earns 10000$."
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



    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('state has changed')
    },
    //_callSubscriber зто переименованный rerenderEntireTree, он просто слушает актуальный state;

    addPost() {
        let newMessage = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 3
        };
        this._state.profilePage.postsData.push(newMessage)
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state);

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }




}


export default store;