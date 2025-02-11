/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
  /* openApiSidebar: [
    {
      type: "category",
      label: "Petstore",
      link: {
        type: "generated-index",
        title: "Petstore API",
        description:
          "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/petstore-api"
      },
      // @ts-ignore
      items: require("./docs/petstore/sidebar.js")
    } 
  ] */
  /* openApiSidebar: [
    {
      type: "category",
      label: "Referencia de la API",
      link: {
        type: "generated-index",
        title: "Referencia de la API",
      slug: "/category/api-reference"
      },
      // @ts-ignore
      items: require("./docs/api-reference/sidebar.js")
    }
  ] */

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
