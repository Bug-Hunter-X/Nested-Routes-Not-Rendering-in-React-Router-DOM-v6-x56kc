# React Router DOM v6 Nested Route Rendering Issue

This repository demonstrates a bug encountered when using nested routes in React Router DOM v6.  The issue involves nested routes failing to render properly under a parent route, even with seemingly correct path definitions.

The `App.js` file contains the buggy code.  The `AppSolution.js` demonstrates the solution.

## Bug

The primary issue is that nested routes within a parent route are not being recognized or rendered. This prevents the application from rendering the expected components based on the URL. The expected behavior is that each nested route should render correctly when the appropriate route is accessed.

## Solution

The solution involves using the `useParams` hook to access the parameters from the parent route's path. This allows the nested routes to access and handle parameters correctly.