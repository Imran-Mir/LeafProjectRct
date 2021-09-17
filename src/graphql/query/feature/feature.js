import { gql } from "@apollo/client";

export const FEATURES = gql`
  query features {
    features {
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
