# Redux Overview

Redux is a predictable state container for JavaScript applications. It helps you manage your application state efficiently and ensures that the state transitions are predictable, making it easier to debug and maintain your code.

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

## 1. Introduction

Redux is widely used with React but can be applied to any JavaScript-based application. It revolves around three core principles:  
1. **Single Source of Truth**: The state of the entire application is stored in a single object tree.  
2. **State is Read-Only**: The only way to change the state is by dispatching actions.  
3. **Changes are Made with Pure Functions**: Reducers are pure functions that specify how the state changes in response to actions.

---

## 2. State Structure

Redux uses a centralized state stored as a single JavaScript object. To maintain scalability and performance, the state is often divided into slices that represent distinct parts of the application.

### Example State Structure:
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
