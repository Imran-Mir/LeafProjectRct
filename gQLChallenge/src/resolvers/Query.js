const Query = {
  me: () => {
    return "My name is Imran";
  },
  specifications: (parent, args, { db }, ifno) => {
    return db.specifications;
  },
  features: (parent, args, { db }, ifno) => {
    return db.features;
  },
};

export default Query;
