"use client";
import React from "react";

interface InputObject {
  [key: string]: string[];
}

interface OutputObject {
  [key: string]: string[];
}

// find second largest number here in react and typescript
// const arr = [4,6,5,2,3,1,5,7,8,9,6,7,8,9]
const numArrRepInt = [4, 6, 5, 2, 3, 1, 5, 7, 8, 9, 6, 7, 8, 9];

const findSecondLargest = (array: number[]): number | null => {
  if (array.length < 2) return null;

  let first = -Infinity;
  let second = -Infinity;

  for (const num of array) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  return second === -Infinity ? null : second;
};

const InterviewQuestions = () => {
  const inputObject: InputObject = {
    a: ["1", "2", "3"],
    b: ["2", "1", "4"],
    c: ["1", "3"],
    d: ["4", "4"],
    e: ["5"],
  };

  const transformObject1 = (input: InputObject): OutputObject => {
    // const outputObject = {
    //   "1": ["a", "b", "c"],
    //   "2": ["a", "b"],
    //   "3": ["a", "c"],
    //   "4": ["b","d","d"],
    //   "5": ["e"]
    // }

    const output: OutputObject = {};

    Object.keys(input).forEach((key) => {
      input[key].forEach((value) => {
        if (!output[value]) {
          output[value] = [];
        }
        output[value].push(key);
      });
    });
    console.log("LOG  output ", output);
    return output;
  };

  const transformObject2 = (input: InputObject): OutputObject => {
    // const outputObject = {
    //   "1": ["a", "b", "c"],
    //   "2": ["a", "b"],
    //   "3": ["a", "c"],
    //   "4": ["b","d"],
    //   "5": ["e"]
    // }

    const output: OutputObject = {};

    Object.keys(input).forEach((key) => {
      input[key].forEach((value) => {
        if (!output[value]) {
          output[value] = [];
        }
        if (!output[value].includes(key)) {
          output[value].push(key);
        }
      });
    });
    console.log("LOG  output ", output);
    return output;
  };

  const countDuplicates = () => {
    const itemCount: { [key: string]: number } = {};
    const arr = [2, 4, 1, 4, 6, 7, 3, 7, 9, 5, 3, 5, 8, 4, 3];
    arr.forEach((element) => {
      if (itemCount[element]) {
        itemCount[element]++;
      } else {
        itemCount[element] = 1;
      }
    });
    for (const key in itemCount) {
      if (itemCount[key] > 1) {
        console.log("LOG Duplicate  ", key);
      }
    }
  };

  const removeDuplicates = () => {
    const itemCount: { [key: string]: boolean } = {};
    const arr = [2, 4, 1, 4, 6, 7, 3, 7, 9, 5, 3, 5, 8, 4, 3];
    const test = arr.filter((e: number) => {
      if (itemCount[e]) {
        return false;
      } else {
        itemCount[e] = true;
        return true;
      }
    });

    console.log("LOG   ", test);
  };

  return (
    <div>
      <button onClick={() => countDuplicates()}>Count Duplicates</button>
      <button onClick={() => removeDuplicates()}>Remove Duplicates</button>
      <button onClick={() => findSecondLargest(numArrRepInt)}>Second Largest</button>
      <button onClick={() => transformObject1(inputObject)}>
        Transform Object 1
      </button>
      <button onClick={() => transformObject2(inputObject)}>
        Transform Object 1
      </button>
    </div>
  );
};

export default InterviewQuestions;
