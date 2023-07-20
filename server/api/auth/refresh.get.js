import {getRefreshTokenByToken} from "~/server/db/refreshTokes";
import {decodeRefreshToken, generateTokens} from "~/server/utils/jwt";
import {getUserById} from "~/server/db/users";

export default  defineEventHandler(async (event)=>{
    const refreshToken = getCookie(event,'refresh_token')

    if(!refreshToken){
        return sendError(event,createError({
            statusMessage:"Refresh token is invalid",
            statusCode:401
        }))
    }
    const rToken = await  getRefreshTokenByToken(refreshToken)
    if (!rToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Refresh token is invalid'
        }))
    }
    const token = decodeRefreshToken(refreshToken)

    try {
        const user = await getUserById(token.userId)
        const {accessToken} = generateTokens(user);
        return  {
            access_token : accessToken,

        }
    }catch (error){
        return sendError(event,createError({
            statusMessage:"Something was wrong",
            statusCode:500
        }))
    }

})