const convertTextToLink = text => `/${text.split(' ').join('-')}/`

export default convertTextToLink
