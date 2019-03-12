module.exports = {
    plugins: [
      {
        resolve: "gatsby-source-graphql",
        options: {
          // This type will contain remote schema Query type
          typeName: "AQAR",
          // This is the field under which it's accessible
          fieldName: "aqar",
          // URL to query from
          url: "https://sa.aqar.fm/graphql",
        },
      },
    ],
  }