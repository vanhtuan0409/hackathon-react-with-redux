import { clone, setWith, curry } from "lodash/fp";

export default curry((path, value, obj) =>
  setWith(clone, path, value, clone(obj))
);
