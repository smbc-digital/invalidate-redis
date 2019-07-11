const redis = require('redis')
const { promisify } = require('util')

function connectToRedis(redisUrl) {
    const client = redis.createClient({
        host: redisUrl
    })

    return new Promise((resolve, reject) => {
        client.on('connect', () => resolve(client))
        client.on('error', (error) => reject(error))
    })
}

exports.handler = async (event) => {
    try {
        const parsedRequest = JSON.parse(event.body)
        const redisUrl = process.env.REDIS_URL
        const client = await connectToRedis(redisUrl)
        const delAsync = promisify(client.del).bind(client)

        await delAsync(parsedRequest.userId)

        return {
            statusCode: 200
        }
    } catch (error) {
        console.log(error)

        return {
            statusCode: 500,
            body: error
        }
    }
}
