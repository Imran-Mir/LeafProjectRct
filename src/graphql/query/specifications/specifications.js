import { gql } from "@apollo/client";

export const SPECIFICATIONS = gql`
  query specifications {
    specifications {
      id
      mileage
      fuelType
      engineDisplacement
      maxPower
      maxTorque
      seatingCapacity
      transmissionType
      bootspace
      fuelTankCapacity
      bodyType
    }
  }
`;
