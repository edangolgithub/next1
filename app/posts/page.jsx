import React from 'react'
import { delayFunction } from './utils';


  export default async function Page() {
    await delayFunction();
    return (
      <main>
        <h1>posts</h1>
      </main>
    );
  }