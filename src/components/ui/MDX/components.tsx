import Heading from "./Heading/Heading";
import Link from "./Link/Link";
import Text from "./Text/Text";

const MDXComponents = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  h5: Heading.H5,
  p: Text,
  a: Link,
};

export default MDXComponents;
