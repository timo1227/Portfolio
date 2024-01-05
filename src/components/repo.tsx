import React from 'react';
import { Octokit } from '@octokit/rest';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from './ui/button';

/**
 * Fetches repositories from GitHub
 */
const fetchRepositories = async () => {
  const octokit = new Octokit({
    auth: process.env.CLIENT_TOKEN,
  });

  const username = 'timo1227';

  const { data } = await octokit.request('GET /users/{username}/repos', {
    username,
  });

  return data;
};

const Repo = async () => {
  const data = await fetchRepositories();

  return (
    <div className='flex min-w-fit flex-wrap justify-around py-20'>
      <h2 className='font-Burtons mt-7 w-full text-center text-4xl'>
        My Projects
      </h2>
      <ul className='flex flex-wrap justify-center gap-10 px-20'>
        {data.map(repo => {
          if (repo.name === 'timo1227' || repo.name === 'data-mining') {
            return null;
          }
          return (
            <li key={repo.id}>
              <Card className='min-d my-10 max-w-sm'>
                <CardHeader>{repo.name}</CardHeader>
                <CardContent>
                  <p>{repo.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className='w-auto'>
                    <Link href={repo.html_url} target='_blank'>
                      Visit Repo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Repo;
