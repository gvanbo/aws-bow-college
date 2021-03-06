# aws-bow-college

### Note: This is not production code and simply meant as a demo

## Setup

The instructions below cover installation on Unix-based Operating systems like macOS and Linux.

### Requirements

You will need the following:

- [An AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)

and the following tooling in your local evironment:

- [Git](https://git-scm.com/)
- [Node.js LTS release or greater](https://nodejs.org/en/)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- [Expo CLI](https://docs.expo.io/get-started/installation/)

If you have not already, configure the aws cli to interact with AWS services using `aws configure`.

Note: If you are running into issues, look over the [expo-diag.txt](expo-diag.txt) file and make sure your versions are up to date.

## Instructions

To build your application you will complete the following steps:

1. [Create Your Application Backend with the Amplify Console](#1-create-your-application-backend-with-the-amplify-console)
2. [Enable User Authentication with the Amplify Admin UI](#2-enable-user-authentication-with-the-amplify-admin-ui)
3. [Create Your Application's Data Model with the Amplify Admin UI](#3-create-your-applications-data-model-with-the-amplify-admin-ui)
4. [Create A Product with the Amplify Admin UI](#4-create-a-product-with-the-amplify-admin-ui)
5. [Clone Our Sample Application](#5-clone-our-sample-application)
6. [Pull Our Amplify Configuration Into Our Application](#6-pull-our-amplify-configuration-into-our-application)
7. [Demo Our Application](#7-demo-our-application)

### 1. Create Your Application Backend with the Amplify Console

1. Login to your AWS account's [management console](https://aws.amazon.com/console/)
2. Navigate to the AWS Amplify service using the search box at the top
3. Create your application backend:
    * If you do not have any existing Amplify apps click the **Get Started Button**, and then the **Get Started** button under the *Create an app backend*
    * If you have other Amplify Apps click the **New App** button at the top right, and then **Create app backend**
4. Enter a name (i.e. `My Application`) and then select **Confirm deployment**
5. Your application will take several minutes to deploy, and then you will redirected to the App Settings page

### 2. Enable User Authentication with the Amplify Admin UI

1. Click the **Open admin UI** button under the *staging* environment 
2. Click the **Authentication** link under the *Set up* menu
3. Leave the defaults as is
4. Click the **Save and deploy** button
5. Click the **Confirm deployment** button

### 3. Create Your Application's Data Model with the Amplify Admin UI

1. Click the **Data** link under the *Set up* menu

#### Add a Product model

2. Click the **Add** dropdown and select the **Add model** option
3. Set the model title to `Product`
4. Add the following field names/types:
    - `sku` | `String`
    - `name` | `String`
    - `price` | `Float`
    - `image` | `String`

#### Add a LineItem model

5. Click the **Add** dropdown and select the **Add model** option
6. Set the model title to `LineItem`
7. Add the following field names/types:
    - `qty` | `Int`
    - `description` | `String`
    - `price` | `Float`
    - `total` | `Float`
8. Add the following relationship:
    - Related Model: `Product`
    - Model relationships: `One LineItem to one...`
    - Relationship name: `product`

#### Add an Order model

9. Click the **Add** dropdown and select the **Add model** option
10. Set the model title to `Order`
11. Add the following field names/types:
    - `total` | `Float`
    - `subtotal` | `Float`
    - `tax` | `Float`
    - `createdAt` | `String`
12. Add the following relationship:
    - Related Model: `LineItem`
    - Model relationships: `One Order to many...`
    - Relationship name: `lineItems`

#### Deploy your data model

13. Click the **Save and deploy** button
14. Click the **Deploy** button

### 4. Create A Product with the Amplify Admin UI

1. Click the **Content** link under the *Manage* menu
2. From the *Select table* dropdown select **Product**
3. Click the **Create Product** button
4. Add the following field names/types:
    - `sku` | `abc123`
    - `name` | `My Product`
    - `price` | `10.99`
    - `image` | `https://aws-appsync-refarch-offline-assets.s3-us-west-2.amazonaws.com/Cookie%402x.png`
5. Click **Save Product**

### 5. Clone Our Sample Application

1. Clone this repo to your local machine
```console
git clone https://github.com/mikeapted/aws-bow-college
cd aws-bow-college
```
2. Install the dependencies
```console
npm install
```

### 6. Pull Our Amplify Configuration Into Our Application

1. Install the latest Amplify CLI
```console
curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL
```
2. In the Amplify Admin UI click the *Local setup instructions* link at the top right
3. Copy the command to pull the latest into your source code
4. Run that command locally
```console
amplify pull --appId <YOUR_APP_ID> --envName staging
```
5. Follow the authentication flow in your browser
6. Accept all the defaults in the Amplify config process

### 7. Demo Our Application

1. Start our local development server
```console
expo start
```



