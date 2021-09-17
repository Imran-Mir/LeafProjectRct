import { gql } from "@apollo/client";

export const UPDATE_SPECIFICATION = gql`
  mutation updateSpecification($id: ID!, $values: CreateSpecification) {
    updateSpecification(id: $id, values: $values) {
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
