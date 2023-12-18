import { UserEvent } from "./04_UserEvents.mjs";

const userEvent = new UserEvent();



function saveToDatabase() {
    console.log('saving post to database');
}

function sendNotification() {
    console.log('sending notification');
}

function updateTimeline() {
    console.log('updating timeline');
}

userEvent.addListener('postCreated', saveToDatabase)
userEvent.addListener('postCreated', sendNotification)
userEvent.addListener('postCreated', updateTimeline)

userEvent.createPost('This is my first post')
