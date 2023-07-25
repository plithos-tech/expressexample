# Express Example Application for Plithos PAAS Engine

This repository contains an example Express application that is ready to be deployed on Plithos, a PAAS (Platform as a Service) engine. Plithos provides a web-based dashboard for managing applications, and this guide will walk you through the steps to deploy this application using the dashboard.

## Getting Started

To deploy this Express example application on Plithos, follow these steps:

### 1. Copy Repository URL

Copy the repository URL for this project: `https://github.com/plithos-tech/expressexample.git`. This URL will be used to import the application into your Plithos dashboard.

### 2. Sign Up and Log In to Plithos

If you don't have a Plithos account, sign up for a free account at [Plithos Sign Up](https://plithos.me/). After signing up, log in to your Plithos account using your credentials.

### 3. Create a New Project

Once you are logged in, you will be redirected to the Plithos dashboard. To create a new project, follow these steps:

- Click on the "New Project" button.
- Enter a name for your project (e.g., "Express Example App").
- On the "Repositories" form field add the url of your git deployment
- Paste the repository URL (`https://github.com/plithos-tech/expressexample.git`) into the URL field (for example).
- Set the port to be 3000
- Then on the "Environment Variable" field add environment variables as required by the application.
  - For this usecase you can define `ENV_ENV=plithos is fun`
  - For example, you can set the `PORT` variable to the desired port number for the application to listen on.

### 4. Deploy the Application

With the repository information added and the environment variables set, you are ready to deploy the application. To deploy the application, follow these steps:
- Click on the "Submit" button to deploy the application.

### 5. Access Your Application

Once the application is successfully deployed, you can access it by navigating to the provided URL in your web browser. The application should be running on the port specified in the environment variables.

## Additional Customization

Feel free to explore and modify the Express example application to suit your needs. You can make changes to the code and environment variables as required and redeploy the application on Plithos.

For more information or assistance, refer to the [Plithos Documentation](https://plithos.io/) or contact the Plithos support team.

Happy coding!
