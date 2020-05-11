# My Garage-Kaera

---

Deployed App: [MyGarage](https://lit-scrubland-58683.herokuapp.com/).

---

## Elevator Pitch

Are you a kind of person who sometimes cannot find time from your busy schedule to take care your vehicle? Let this App help you to cater to your Vehicles needs.
My Garage is an Application that provides you with the facility of

- Buying the parts.
- Create your personal account to add Vehicles that will be taken care for you.
- Book an appointment to get your vehicle serviced.
- Chat with Technicians with any concerns that you might have.

---

# Technologies/ Roles/ challenges/ successes

---

#### Technologies

- MERN stack
- Node.js/Express
- MongoDB/Mongoose
- reactstrap, react-bootstrap for basic components
- Passport for Authentication
- React-simple-chat-Bot for customer support chatBot
- React-datepicker
- Market check API for VIN decoding
- Stripe SecurePaymentGateway

#### Roles

- Sign in and Authentication - **Eric**
- Landing Dashboard - **Rekha**
- Parts Catalogue - **Andrew**
- Appointment scheduler and Chatbot - **Augustine**

#### Challenges

- User Authentication.
- secure payment gateway.

#### Successes

- All API calls worked.
- Secure Payment Gateway accomplished.
- Heroku deployment.

---

### Screenshots

![login](https://user-images.githubusercontent.com/54964461/81601928-b68a0780-9399-11ea-95e4-a5d3227a6971.png)

![addcars](https://user-images.githubusercontent.com/54964461/81601972-cbff3180-9399-11ea-8ccf-577a042beb10.png)

![schedule](https://user-images.githubusercontent.com/54964461/81602004-d8838a00-9399-11ea-81e6-53a4f08c7f2e.png)

![parts](https://user-images.githubusercontent.com/54964461/81602029-e20cf200-9399-11ea-86ae-65cef6ccb674.png)

![stripe](https://user-images.githubusercontent.com/54964461/81602032-e46f4c00-9399-11ea-8d7e-bbd9b94bd96a.png)

# Future Development

Team would like to add the below Options and Functionalities to whole application.

1. More cutomised messages
2. Disabling the selected appointment slots
3. Provisioning for service payment
4. Adding the parts payment with the service payment
5. Sending appointment confirmation and reminder to the cutomer

---

## Contributors

1. Andrew Christopher Lawn - https://github.com/Lawna12

2. Augustine Stella Maria - https://github.com/smaji08

3. Eric King - https://github.com/zvlu

4. Rekha Madalli - https://github.com/rnm-code-repo

---

## Instructions

Whoever interested to develop it further, can clone and install and start working on it.

- `Git clone https://github.com/smaji08/mygarage-kaera.git` to the destination folder
- `cd mygarage-kaera`
- `npm install`
- add `"proxy": "http://localhost:3001/"` to package.json in client folder
- `npm start`
- You may have to register and get your API key from https://apidocs.marketcheck.com/?version=latest and add it to `.env.dev`
