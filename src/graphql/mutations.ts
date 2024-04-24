/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMilitant = /* GraphQL */ `mutation CreateMilitant(
  $input: CreateMilitantInput!
  $condition: ModelMilitantConditionInput
) {
  createMilitant(input: $input, condition: $condition) {
    id
    name
    nni
    phone
    partisans {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMilitantMutationVariables,
  APITypes.CreateMilitantMutation
>;
export const updateMilitant = /* GraphQL */ `mutation UpdateMilitant(
  $input: UpdateMilitantInput!
  $condition: ModelMilitantConditionInput
) {
  updateMilitant(input: $input, condition: $condition) {
    id
    name
    nni
    phone
    partisans {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMilitantMutationVariables,
  APITypes.UpdateMilitantMutation
>;
export const deleteMilitant = /* GraphQL */ `mutation DeleteMilitant(
  $input: DeleteMilitantInput!
  $condition: ModelMilitantConditionInput
) {
  deleteMilitant(input: $input, condition: $condition) {
    id
    name
    nni
    phone
    partisans {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMilitantMutationVariables,
  APITypes.DeleteMilitantMutation
>;
export const createPartisan = /* GraphQL */ `mutation CreatePartisan(
  $input: CreatePartisanInput!
  $condition: ModelPartisanConditionInput
) {
  createPartisan(input: $input, condition: $condition) {
    id
    first_name
    last_name
    nni
    place_of_birth
    number_in_office
    genre
    office_id
    militant {
      id
      name
      nni
      phone
      createdAt
      updatedAt
      __typename
    }
    office {
      id
      label
      commune
      center
      mougataa
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    militantPartisansId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePartisanMutationVariables,
  APITypes.CreatePartisanMutation
>;
export const updatePartisan = /* GraphQL */ `mutation UpdatePartisan(
  $input: UpdatePartisanInput!
  $condition: ModelPartisanConditionInput
) {
  updatePartisan(input: $input, condition: $condition) {
    id
    first_name
    last_name
    nni
    place_of_birth
    number_in_office
    genre
    office_id
    militant {
      id
      name
      nni
      phone
      createdAt
      updatedAt
      __typename
    }
    office {
      id
      label
      commune
      center
      mougataa
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    militantPartisansId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePartisanMutationVariables,
  APITypes.UpdatePartisanMutation
>;
export const deletePartisan = /* GraphQL */ `mutation DeletePartisan(
  $input: DeletePartisanInput!
  $condition: ModelPartisanConditionInput
) {
  deletePartisan(input: $input, condition: $condition) {
    id
    first_name
    last_name
    nni
    place_of_birth
    number_in_office
    genre
    office_id
    militant {
      id
      name
      nni
      phone
      createdAt
      updatedAt
      __typename
    }
    office {
      id
      label
      commune
      center
      mougataa
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    militantPartisansId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePartisanMutationVariables,
  APITypes.DeletePartisanMutation
>;
export const createOffice = /* GraphQL */ `mutation CreateOffice(
  $input: CreateOfficeInput!
  $condition: ModelOfficeConditionInput
) {
  createOffice(input: $input, condition: $condition) {
    id
    label
    commune
    center
    mougataa
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOfficeMutationVariables,
  APITypes.CreateOfficeMutation
>;
export const updateOffice = /* GraphQL */ `mutation UpdateOffice(
  $input: UpdateOfficeInput!
  $condition: ModelOfficeConditionInput
) {
  updateOffice(input: $input, condition: $condition) {
    id
    label
    commune
    center
    mougataa
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOfficeMutationVariables,
  APITypes.UpdateOfficeMutation
>;
export const deleteOffice = /* GraphQL */ `mutation DeleteOffice(
  $input: DeleteOfficeInput!
  $condition: ModelOfficeConditionInput
) {
  deleteOffice(input: $input, condition: $condition) {
    id
    label
    commune
    center
    mougataa
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOfficeMutationVariables,
  APITypes.DeleteOfficeMutation
>;
