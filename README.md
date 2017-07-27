
## Install
1. Clone this repo `git clone https://github.com/drocheMN/react-app.git`
2. In project's root directory (react-app), `npm install && npm start`
3. Open browser of choice to `http://localhost:3000/` or as directed in terminal.

## Tools
Additional libraries used for this project are:
  * [Create React App](https://github.com/facebookincubator/create-react-app)
    - Used for application bootstrap.
  * [React-Router](https://reacttraining.com/react-router/web/guides/philosophy)
    - Routing for this application was done through this library.
  * [Material-UI](http://www.material-ui.com/)
    - Several components from this library were used.
  * [React-Tap-Event-Plugin](https://github.com/zilverline/react-tap-event-plugin)
    - This is required to support onTouchTap.
    - See [this](http://stackoverflow.com/a/34015469/988941) for more.




## Assessment
This was a fun project! There are a few things I would like to improve:
1. Better architect styles to have all inline styles via the `style` prop.  Right now I used both inline and CSS styles.
2. Figure out how to override Material UI state styles (hover, focus, ect.) and update those styles.
3. The form validation is lacking.  I would have liked to build out a full form validation system.  At this time, minimal required and pattern matching is implemented.
4. Eject from create-react-app and update the build process.  Specifically, I'd like to include postCSS.
5. Documentation is lacking.  I intend to update this as soon as possible.