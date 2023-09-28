---
title: Creating a New Expo App
description: 
image: 
imageAlt: 
link: 
draft: true
createdDate: 2023-09-27T12:48:34Z
tags:
  - computer
  - blog
---
I've wanted to make an app for cataloging outfits and general wardrobe management for a while now. Today I'm going to give it a try using [Expo](https://expo.dev/). 

Expo has changed a little bit since I last used it. Or maybe I wasn't taking advantage of certain things in it before. There is a dashboard on the expo site to log into where you can manage your projects. I logged into my existing account after resetting my password and created a project in the dashboard.

## Setting up the Project

Once I created an Expo project in the Expo dashboard, it provided me with a shell command to run:

```bash
npm install --global eas-cli && npx create-expo-app outfits && cd outfits && eas init --id 983dcd7a-bccb-4bc6-a6af-5e4faec610f2
```

It appears that `eas-cli` is the Expo CLI tool that coordinates between the directory with the app inside of it and the project in the dashboard. EAS stands for "Expo Application Services". 

Going through the guide in the Expo docs, I started with [configuration](https://docs.expo.dev/workflow/configuration/). But I didn't really have much to do with any of this so I just skipped it for now.

The next bit was about Local app development but I still wanted to configure things like a linter and Prettier, so I went looking for the easiest way to do that. I found [this blog](https://www.headway.io/blog/react-native-quick-start-expo-eslint-typescript-and-prettier) which had a pretty comprehensive set-up guide and began following it. After copying and pasting things from the blog into my new project for a bit, what started as 5 medium-level vulnerabilities turned into a lot more higher-level vulnerabilities, so I stopped and just found the [Expo guide to using ESLint](https://docs.expo.dev/guides/using-eslint/) and [converting my project to Typescript](https://docs.expo.dev/guides/typescript/).

But even with these guides I was wrestling with very un-fun configuration for at least an hour and a half. I decided to start over and this time when I ran the `npx create-expo-app` command I included the `-t expo-template-blank-typescript` flag and value and then didn't worry about ESLint or Prettier for now. I also added [React Native Paper](https://callstack.github.io/react-native-paper/) to use as a UI library.

Then after even more consternation trying to get Expo Router to work, I found [this repo](https://github.com/thedevenvironment/expo-router-typescript) that is a template with all the things I was wanting in the first place and so I just used it! Thank you, Github user `haytherecharlie`.

