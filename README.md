# Redux Overview

## Table of Contents
1. [Introduction](#introduction)
2. [State Structure](#state-structure)
3. [Actions](#actions)
4. [Reducers](#reducers)
5. [Middleware](#middleware)
6. [Store Configuration](#store-configuration)
7. [Usage Example](#usage-example)
8. [Best Practices](#best-practices)
9. [References](#references)

---

<a name="introduction"></a>
## 1. Introduction
Redux is a predictable state container for JavaScript applications. It helps manage the state in a way that is consistent and scalable, making it easier to develop complex applications with a clear flow of data.

---

<a name="state-structure"></a>
## 2. State Structure
Redux state is typically organized into a single JavaScript object that contains various slices, each representing a different part of the application's data. Keeping the state normalized (flat structure) is crucial for performance and maintainability.

Example State Structure:
```javascript
{
  user: {
    isAuthenticated: false,
    userInfo: null,
  },
  posts: {
    byId: {
      "1": { id: 1, content: "Hello World" },
      "2": { id: 2, content: "Redux is great!" }
    },
    allIds: [1, 2]
  },
  comments: {
    byPostId: {
      "1": [{ id: 1, content: "Nice post!" }]
    }
  }
}

## 3. Actions
Actions are plain JavaScript objects that describe an event or change that needs to happen in the state. They must include a type property, which indicates the action's intent. Additional properties can be added to pass relevant data to reducers
