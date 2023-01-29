// Function to get Repo data from Github API
import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from '@octokit/rest'

export const octokit = new Octokit({
    auth: process.env.CLIENT_TOKEN,
});

export default async function getUser(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const username = "timo1227"
    const { data } = await octokit.request('GET /users/{username}/repos', {
        username,
    })
    res.status(200).json(data)
}

