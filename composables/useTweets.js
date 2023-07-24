import useFetchApi from "~/composables/useFetchApi";

export default () => {
    const postTweet = (formData) => {
        const form = new FormData()
        form.append('text',formData.text)
        form.append('replyTo',formData.replyTo)
        if(formData.MediaFiles){
            formData.MediaFiles.forEach((mediaFile, index) => {
                form.append('media_file' + index, mediaFile)
            })
        }
        return useFetchApi('/api/user/tweets', {
            method: "POST",
            body: form
        })
    }

    const getHomeTweets = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await useFetchApi('/api/tweets', {
                    method: 'GET'
                })
                resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    }

    const getTweetById = (tweetId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await useFetchApi(`/api/tweets/${tweetId}`, {
                    method: 'GET'
                })

                resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    }

    return {
        postTweet,
        getHomeTweets,
        getTweetById
    }
}