# react-native-notes-application-codetribe


**Objective

The objective of this project is to demonstrate an understanding of React Native navigation systems, routing, and core React Native concepts introduced in Lesson 2 and Lesson 3. The application focuses on secure navigation, protected routes, and CRUD functionality using Async Storage as local persistence.

**Project Description**

This is a secure note-taking mobile application built with React Native. The application allows users to register, log in, and manage personal notes. Notes are organized into categories such as work, study, and personal, with each category accessible on a separate screen through navigation routing.

The application implements authentication, protected routing, and full CRUD functionality for notes, including searching and sorting features.

**Technologies Used**

React Native

React Navigation

Async Storage

JavaScript / TypeScript (depending on implementation)

**Features**

User Management

Authentication

Users can register using:

Email address

Username

Password

Users can log in using their registered credentials.

Authentication state is stored securely using Async Storage.

Authorization

Protected routing is implemented.

Logged-in users cannot access login or registration screens.

Unauthenticated users cannot access protected pages such as notes and profile screens.

**Profile Management**

Users can update their login credentials.

Updated credentials are saved in Async Storage.

Notes Management
Create (Add Note)

Users can create a new note with the following details:

Note content (text)

Date added (automatically generated)

Category (e.g. Work, Study, Personal)

Title (optional)

Read (View Notes)

Users can view all notes they have created.

Notes are displayed per category on different screens.

Update (Edit Notes)

Users can edit existing notes.

Edited notes include a timestamp indicating when the note was last updated.

Delete (Remove Notes)

Users can delete existing notes permanently.

Search Notes

Users can search notes by typing keywords.

The search function attempts to match each typed word against the saved note content.

Sort Notes

Users can sort notes by:

Date added (ascending)

Date added (descending)

Navigation

Stack and/or tab navigation is used for routing between screens.

Each note category is displayed on a separate page.

Navigation is protected based on authentication state.

**Data Storage**

Async Storage is used as the local database for:

User authentication data

User profile information

Notes data
