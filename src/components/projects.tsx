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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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

const Projects = async () => {
  const data = await fetchRepositories();

  return (
    <div
      id='project'
      className='container relative flex flex-col items-center justify-center'
    >
      <h2 className='mt-7 text-4xl font-bold'>Projects</h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-full md:max-w-lg lg:max-w-4xl'
      >
        <CarouselContent className='-ml-1'>
          {data.map(repo => {
            if (
              repo.name === 'timo1227' ||
              repo.name === 'data-mining' ||
              !repo.description
            ) {
              return null;
            }
            return (
              <CarouselItem
                key={repo.id}
                className='pl-1 md:basis-1/2 lg:basis-1/3'
              >
                <div className='flex justify-center p-1'>
                  <Card className='my-10 flex aspect-square max-w-sm flex-col justify-around'>
                    <CardHeader>
                      <CardTitle>{repo.name}</CardTitle>
                    </CardHeader>
                    <CardContent className=''>
                      <CardDescription className='line-clamp-3'>
                        {repo.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className='relative bottom-0'>
                      <Button className='w-auto'>
                        <Link href={repo.html_url} target='_blank'>
                          Visit Repo
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Projects;
