/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })
	

    WA.room.area.onLeave('clock').subscribe(closePopup)

    console.log("Jeff", WA.ui.actionBar.toString());
	// WA.chat.sendChatMessage('Hello, Welcome to DBYs Coding Academy Metaverse!', 'DBYs Coding Academy Admin');
    // localStorage.setItem("Modal", "False");
    WA.ui.actionBar.removeButton("invite-btn");
    WA.ui.actionBar.removeButton("menuIcon");

    WA.ui.actionBar.removeButton("backOfficeIcon");
    WA.ui.modal.openModal({
        title: "DBYs Coding Academy Metaverse",
        src: "https://www.dbyoungs.com", 
        allow: "fullscreen", 
        allowApi: true, 
        position: "center"
    });


    // if (localStorage.getItem("Modal") == "False"){
    //     WA.ui.modal.openModal({
    //         title: "DBYs Coding Academy Metaverse",
    //         src: "https://www.dbyoungs.com", 
    //         allow: "fullscreen", 
    //         allowApi: true, 
    //         position: "center"
    //     }, (() => {
    //             localStorage.setItem("Modal", "True");
    //             console.log("Modal Closed")
    //         })
    //     )
    // }

	
	
	
	
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
