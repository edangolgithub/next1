import React from 'react'
export async function delayFunction() {
    console.log('called');
    try {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Function executed after 5 seconds");
        }, 5000); 
      });
    } catch (error) {
      throw new Error("Error in delayFunction: " + error.message);
    }
  }


  export default async function Page() {
    await delayFunction();
    return (
      <main>
        <h1>posts</h1>
      </main>
    );
  }