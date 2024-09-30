# `DONG Token`

This is a demonstration of a cryptocurrency token called DONG, showcasing fundamental operations such as
account management and transfer functionalities on the Internet Computer (IC) blockchain.

## Running locally

1. To run the DONG Token simulation locally with full functionality (including the frontend), you'll need to set it up on your local machine.
This requires the ICP development infrastructure and creating a local replica of the ICP blockchain for development purposes.
Follow this guide to get started: https://internetcomputer.org/docs/current/tutorials/developer-journey/level-0/dev-env

2. Alternatively, if you only want to inspect the backend code, you can use online ICP development tools such as Motoko Playground.
Link to Motoko Playground: https://m7sm4-2iaaa-aaaab-qabra-cai.ic0.app/


To run the project locally after setting the environment, execute the following commands:
1. In one terminal, start the local replica with:
```bash
dfx start
```
2. In another terminal, deploy the canisters and start the frontend with:
```bash
dfx deploy
npm start
```
3. Open your web browser and navigate to the URL displayed in your terminal.


***** Make sure to follow the instructions below to charge your local canister with tokens *****
***** The application expects that the canister will include some tokens for distribution of the Token *****


# Find out your principal id
```
dfx identity get-principal
```

# Charge the Canister


1. Check canister ID:
```
dfx canister id token
```

2. Save canister ID into a command line variable:
```
CANISTER_PUBLIC_KEY="principal \"$( \dfx canister id token )\""
```

3. Check canister ID has been successfully saved:
```
echo $CANISTER_PUBLIC_KEY
```

4. Transfer half a billion tokens to the canister Principal ID:
```
dfx canister call token transfer "($CANISTER_PUBLIC_KEY, 500_000_000)"
```
