import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          url
          image
          keywords
          gtag
        }
      }
    }
  `)

  return data.site.siteMetadata
}
