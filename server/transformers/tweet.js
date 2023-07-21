import {mediaFilesTransformer} from "~/server/transformers/mediaFilesTransformer";
import {userTransformer} from "~/server/transformers/user";

export const tweetTransformer = (tweet)=>{
    return {
        id : tweet.id,
        text : tweet.text,
        mediaFiles : tweet.MediaFiles ? tweet.MediaFiles.map(mediaFilesTransformer): [],
        author : tweet.author? userTransformer(tweet.author):null,
        replies : tweet.replies?tweet.replies.map(tweetTransformer):[],
        replyTo : !!tweet.replyTo? tweetTransformer(tweet.replyTo): null
    }
}