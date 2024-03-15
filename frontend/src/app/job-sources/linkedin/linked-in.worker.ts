/// <reference lib="webworker" />

import { SearchData } from 'src/app/job/easy-search/easy-search.types';
import { Job } from 'src/app/job/job.types';
import { mapToJob, setRepostings } from './linked-in.mapper';
import { LinkedInJob } from './linked-in.types';

type LinkedInWorkerInput = { jobs: LinkedInJob[]; searchData: SearchData };

addEventListener('message', ({ data }: MessageEvent<LinkedInWorkerInput>) => {
  const jobsByCompanyMap = new Map<string, Job[]>();

  const mappedJobs = data.jobs.map((jobs, index) => {
    postMessage({
      loadingProgress: (index + 1) / (data.jobs.length * 2),
    });

    return mapToJob(jobs, data.searchData, jobsByCompanyMap);
  });

  mappedJobs.forEach((job, index) => {
    setRepostings(job, jobsByCompanyMap);

    postMessage({
      loadingProgress: (data.jobs.length + index + 1) / (data.jobs.length * 2),
    });
  });

  mappedJobs.sort((a, b) => (a.publishedDate > b.publishedDate ? -1 : 1));

  postMessage(mappedJobs);
});
