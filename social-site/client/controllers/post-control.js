const Post = require('../models/post-model');
const posts = {};

posts.uploadPost = async(postMessage)=>{
    try{
        const postmessage = new Post(postMessage);
        const savePost = await postmessage.save(postMessage);
    }catch(e){
        console.log('unable to post message',e);
    }
}




module.exports = posts;