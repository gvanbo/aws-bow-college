# amplify-point-of-sale

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
2. [Create Your Application's Data Model with the Amplify Admin UI](#2-create-your-applications-data-model-with-the-amplify-admin-ui)
3. [Enable User Authentication with the Amplify Admin UI](#3-enable-user-authentication-with-the-amplify-admin-ui)
4. [Update Data Model Authorization with the Amplify Admin UI](#4-update-data-model-authorization-with-the-amplify-admin-ui)
5. [Create A Product with the Amplify Admin UI](#5-create-a-product-with-the-amplify-admin-ui)
6. [Clone Our Sample Application](#6-clone-our-sample-application)
7. [Pull Our Amplify Configuration Into Our Application](#7-pull-our-amplify-configuration-into-our-application)
8. [Demo Our Application](#8-demo-our-application)

### 1. Create Your Application Backend with the Amplify Console

1. Login to your AWS account's [management console](https://aws.amazon.com/console/)
2. Navigate to the AWS Amplify service using the search box at the top
3. Create your application backend:
    * If you do not have any existing Amplify apps click the **Get Started Button**, and then the **Get Started** button under the *Create an app backend*
    * If you have other Amplify Apps click the **New App** button at the top right, and then **Create app backend**
4. Enter a name (i.e. `My Application`) and then select **Confirm deployment**
5. Your application will take several minutes to deploy, and then you will redirected to the App Settings page

### 2. Create Your Application's Data Model with the Amplify Admin UI

1. Click the **Open admin UI** button under the *staging* environment 
2. Click the **Data** link under the *Set up* menu

#### Add a Product model

3. Click the **Add** dropdown and select the **Add model** option
4. Set the model title to `Product`
5. Add the following field names/types:
    - `sku` | `String`
    - `name` | `String`
    - `price` | `Float`
    - `image` | `String`

#### Add a LineItem model

6. Click the **Add** dropdown and select the **Add model** option
7. Set the model title to `LineItem`
8. Add the following field names/types:
    - `qty` | `Int`
    - `description` | `String`
    - `price` | `Float`
    - `total` | `Float`
9. Add the following relationship:
    - Related Model: `Product`
    - Model relationships: `One LineItem to one...`
    - Relationship name: `product`

#### Add an Order model

10. Click the **Add** dropdown and select the **Add model** option
11. Set the model title to `Order`
12. Add the following field names/types:
    - `total` | `Float`
    - `subtotal` | `Float`
    - `tax` | `Float`
    - `createdAt` | `String`
13. Add the following relationship:
    - Related Model: `LineItem`
    - Model relationships: `One Order to many...`
    - Relationship name: `lineItems`

#### Deploy your data model

14. Click the **Save and deploy** button at the top right of that pane
15. Click the **Deploy** button

### 3. Enable User Authentication with the Amplify Admin UI

1. Click the **Data** link under the *Set up* menu
2. Leave the defaults as is
3. Click the **Save and deploy** button
4. Click the **Confirm deployment** button

### 4. Update Data Model Authorization with the Amplify Admin UI

1. Click the **Data** link under the *Set up* menu

#### Update the backend to use our user authentication

2. Click the **Authorization mode** dropdown and select the **Cognito user pool** option
3. Enter `Change` and click the **Change authorization mode** button

#### Update our models to protect users data

4. Click the *Order* model and in the right panel open the *Add a new rule for...* dropdown and select the **Owners** option
5. In the *Owners can...* panel check only **Create** and **Read**
6. Click the *LineItem* model and in the right panel open the *Add a new rule for...* dropdown and select the **Owners** option
7. In the *Owners can...* panel check only **Create** and **Read**
6. Click the *Product* model and in the right panel open the *Add a new rule for...* dropdown and select the **Owners** option
7. In the *Owners can...* panel check only **Create**, **Read**, **Update**, and **Delete**
8. Open the *Add a new rule for...* dropdown and select the **Any signed-in Users** option
9. In the *Any signed-in users...* panel check only **Read**

#### Deploy your data model

4. Click the **Save and deploy** button
5. Click the **Deploy** button

### 5. Create A Product with the Amplify Admin UI

1. Click the **Content** link under the *Manage* menu
2. From the *Select table* dropdown select **Product**
3. Click the **Create Product** button
4. Add the following field names/types:
    - `sku` | `abc123`
    - `name` | `My Product`
    - `price` | `10.99`
    - `image` | `https://aws-appsync-refarch-offline-assets.s3-us-west-2.amazonaws.com/Cookie%402x.png`
5. Click **Save Product**

### 6. Clone Our Sample Application

1. Clone this repo to your local machine
```console
git clone https://github.com/mikeapted/amplify-point-of-sale
cd amplify-point-of-sale
```
2. Install the dependencies
```console
npm install
```

### 7. Pull Our Amplify Configuration Into Our Application

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

### 8. Demo Our Application

1. Start our local development server
```console
expo start
```



