import { DTO } from "./models/DTO";

export const resolvers = {
  Query: {
    input: () => "Pablo",
    name: () => DTO.find()
  },
  Mutation: {
    createUser: async (_, { name }) => {
      const names = new DTO({ name });
      await names.save();
      console.log(names);
      return names;
    }
  }
};