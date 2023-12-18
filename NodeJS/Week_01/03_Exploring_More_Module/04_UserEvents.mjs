// const eventEmitter = require('events')
import * as Events from "events";


export class UserEvent extends Events.EventEmitter{
    // event
    createPost(content){
        console.log('post is created');
        this.emit('postCreated');
    }
}