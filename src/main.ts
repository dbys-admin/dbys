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


	WA.chat.sendChatMessage('Hello, Welcome to DBYs Coding Academy Metaverse!', 'DBYs Coding Academy Admin');

	WA.ui.modal.openModal({
		title: "DBYs Coding Academy Metaverse,// mandatory, title of the iframe modal.
		src: "https://www.dbyoungs.com", // mandatory, url of the iframe modal.
		allow?: "fullscreen", // optional by default null.
		allowApi?: true, // optional by default false.
		position?: "center", // optional by default right. Reference for position: center / left / right.
		() => {
			console.log("The modal was closed");
		} // optionall, function when the user close the modal.
	}): void
	
	
	
	
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
