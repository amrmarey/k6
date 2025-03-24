import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 20,              // Number of virtual users
  duration: '2m',       // Test duration
};

export default function () {
  const res = http.get('https://example.com');

  check(res, {
    'is status 200': (r) => r.status === 200,
    'response < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);  // Pause between iterations
}
