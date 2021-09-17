import { v4 } from "uuid";

const Mutation = {
  updateSpecification: (parent, args, { db, pubsub }, info) => {
    let old = db.specifications.find((val) => {
      console.log(val.id, " === ", args.id);
      return val.id == args.id;
    });
    if (!old) {
      throw new Error("Id not found Please check di");
    }
    // const uid = v4();
    let a = db.specifications.filter((val) => val.id != args.id);
    const newVal = {
      ...old,
      ...args.values,
    };
    a.push(newVal);
    db.specifications = a;
    return newVal;
  },

  updateFeature: (parent, args, { db, pubsub }, info) => {
    let old = db.features.find((val) => {
      console.log(val.id, " === ", args.id);
      return val.id == args.id;
    });
    if (!old) {
      throw new Error("Id not found Please check di");
    }
    // const uid = v4();
    let a = db.features.filter((val) => val.id != args.id);
    const newVal = {
      ...old,
      ...args.values,
    };
    a.push(newVal);
    db.features = a;
    return newVal;
  },
};

export default Mutation;
