### ✨ Electron-React-Vite Boilerplate

This repository provides a bare bones boilerplate for an Electron application using React as the frontend framework with Vite.

#### 🚀 Getting Started

To get started with the project, follow these steps:

1. Clone the GitHub repository.
2. Run `npm i` to install the necessary dependencies.
3. Open the `vite.config.js` file and locate the server port configuration. This is the port where the React application will be running.
4. In the `package.json` file, navigate to the scripts section and ensure that the TCP port matches the one specified in the configuration file.
5. Run `npm run dev` to start the development server.
6. To build for production, run `npm run build` make sure all "your-icon" placeholder with the path to your icon.

#### 📋 Project Details

For colleagues who want to dive deeper into the project, here are some key details:

- In the `vite.config.js` file, the `base: "./"` configuration ensures that the application runs on the root file.
- The `main` property in the `package.json` file specifies the entry point for the Electron file.
- Within the `scripts` section, the `serve` script runs Vite to serve the React application on a server, while the `electron` script starts the Electron app but waits until the server is running on the specified port before launching Electron.
- The `npm run dev` command simplifies this process into one command and sets the environment variable to development using `cross-env`.
- The `build` script builds the React app with Vite, and `electron-build` builds the Electron app using `electron-builder`.
- The `npm run prod` command combines these two processes.
- The `build` folder outside of the scripts section is used by Electron Builder to build the application. The `mac` and `win` objects in the `config` section of `electron-builder.json` show configurations targeted for different operating systems. The `directories` object specifies the output folder of the built app, and the `files` array indicates which files should be included in the build process. Please pay attention to the `files` array.

#### ⚙️ Electron Configuration

In the `electron.cjs` file, after creating the window, the current environment of the app is checked, and the files are served accordingly. In development mode, React runs on a specific port, while in production, it will be located in the `dist` folder. The file path is adjusted accordingly.

Feel free to explore and modify this boilerplate to suit your needs. Happy coding! 🎉
