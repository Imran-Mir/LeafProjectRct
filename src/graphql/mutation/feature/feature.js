import { gql } from "@apollo/client";

export const UPDATE_FEATURE = gql`
  mutation updateFeature($id: ID!, $values: createFeature!) {
    updateFeature(id: $id, values: $values) {
      id
      powerSteering
      PowerWindowsFront
      abs
      ac
      driverAirbag
      passangerAirbag
      autoClimateCrontol
      alloyWheels
      mfSteering
    }
  }
`;
