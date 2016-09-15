/** @flow */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Head extends Component {

  render() :Object {
    const head: {
      title: { toComponent: Function },
      meta: { toComponent: Function },
      link: { toComponent: Function },
      script: { toComponent: Function }
    } = Helmet.rewind();

    return (
        <head>
          { head.title.toComponent() }
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.indigo-amber.min.css" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link href="/dist/assets/css/base.css" rel="stylesheet" type="text/css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          { head.meta.toComponent() }
          { head.link.toComponent() }
          { head.script.toComponent() }
          <script defer src="https://code.getmdl.io/1.1.3/material.min.js"></script>
        </head>
    );
  }
}