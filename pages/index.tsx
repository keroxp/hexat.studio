import * as React from "react";
import {Page} from "../components/layout";

export default () => (
  <Page>
    <section className="container">
      <div>
        <h2 className="subtitle">
          Nuxt.js project
        </h2>
        <div className="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            className="button--green">Documentation</a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            className="button--grey">GitHub</a>
        </div>
      </div>
    </section>
  </Page>
)
